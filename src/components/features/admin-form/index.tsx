import { ModelsAdminUser } from '@/@types/api.type';
import AdminUserService from '@/services/admin-user';
import { useRequest } from 'ahooks';
import { Form, Card, Button, Input, DatePicker, message } from 'antd';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  onSuccess?: () => void;
  initialData?: ModelsAdminUser;
  mode?: 'create' | 'edit';
}

const AdminForm = ({ onSuccess, initialData, mode = 'create' }: Props) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const isEditMode = mode === 'edit';

  const { run: submitForm, loading } = useRequest(
    (values: ModelsAdminUser) =>
      isEditMode
        ? AdminUserService.updateAdminUser(`${initialData!.id}`, values)
        : AdminUserService.createAdminUser(values),
    {
      manual: true,
      onSuccess: () => {
        form.resetFields();
        message.success(
          isEditMode
            ? t('Successfully updated {{label}}', { label: t('Admin') })
            : t('Successfully created {{label}}', { label: t('Admin') }),
        );
        onSuccess?.();
      },
    },
  );

  const onFinish = (values: ModelsAdminUser) => {
    submitForm(values);
  };

  useEffect(() => {
    if (initialData) {
      form.setFieldsValue(initialData);
    }
  }, [initialData, form]);

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      className="flex flex-col"
      rootClassName=""
    >
      <div className="space-y-4">
        <Card title={t('{{label}} Information', { label: t('Admin') })}>
          <div className="grid grid-cols-2 gap-x-6">
            <Form.Item
              label={t('Name')}
              name="name"
              required
              rules={[
                {
                  required: true,
                  message: t('Please enter {{label}}', { label: t('Name') }),
                },
              ]}
            >
              <Input placeholder={t('Enter {{label}}', { label: t('Name') })} />
            </Form.Item>
            <Form.Item
              label={t('Phone')}
              name="phone"
              required
              rules={[
                {
                  required: true,
                  message: t('Please enter {{label}}', { label: t('Phone') }),
                },
              ]}
            >
              <Input
                placeholder={t('Enter {{label}}', { label: t('Phone') })}
              />
            </Form.Item>
            <Form.Item
              label={t('Email')}
              name="email"
              required
              rules={[
                {
                  required: true,
                  message: t('Please enter {{label}}', {
                    label: t('Email'),
                  }),
                },
                {
                  type: 'email',
                  message: t('Please enter a valid {{label}}', {
                    label: t('Email'),
                  }),
                },
              ]}
            >
              <Input
                placeholder={t('Enter {{label}}', { label: t('Email') })}
              />
            </Form.Item>
            <Form.Item
              label={t('Date of Birth')}
              name="date_of_birth"
              required
              rules={[
                {
                  required: true,
                  message: t('Please select {{label}}', {
                    label: t('Date of Birth'),
                  }),
                },
              ]}
            >
              <DatePicker className="w-full" format="YYYY/MM/DD" />
            </Form.Item>
          </div>
        </Card>

        <Card title={t('{{label}} Information', { label: 'Address' })}>
          <Form.Item
            label={t('Address')}
            name="address"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', { label: t('Address') }),
              },
            ]}
          >
            <Input
              placeholder={t('Enter {{label}}', { label: t('Address') })}
            />
          </Form.Item>
        </Card>
      </div>

      <div className="mt-4 flex justify-end">
        <Button type="primary" size="large" htmlType="submit" loading={loading}>
          {isEditMode
            ? t('Update {{label}}', { label: t('Admin') })
            : t('Create new {{label}}', { label: t('Admin') })}
        </Button>
      </div>
    </Form>
  );
};

export default AdminForm;
