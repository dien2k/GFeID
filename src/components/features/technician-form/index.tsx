import { ModelsTechnician } from '@/@types/api.type';
import TechnicianServices from '@/services/technician';
import { useRequest } from 'ahooks';
import { Button, Card, DatePicker, Form, Input, message, Select } from 'antd';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
type TechnicianFormData = Omit<ModelsTechnician, 'technicianId'>;

interface Props {
  onSuccess: VoidFunction;
  initialData?: ModelsTechnician;
  mode?: 'create' | 'edit';
}

const StatusOptions = [
  { label: 'Active', value: 'Active' },
  { label: 'Inactive', value: 'Inactive' },
];

function TechnicianForm({ onSuccess, initialData, mode = 'create' }: Props) {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const isEditMode = mode === 'edit';

  useEffect(() => {
    if (initialData && isEditMode) {
      form.setFieldsValue({
        ...initialData,
        hire_date: initialData?.hire_date
          ? dayjs(initialData.hire_date)
          : undefined,
        email: initialData?.contact_email || undefined,
        phone: initialData?.phone || undefined,
      });
    } else {
      form.setFieldsValue({
        status: 'Active',
      });
    }
  }, [initialData, form, isEditMode]);

  const { run: submitForm, loading } = useRequest(
    (values: TechnicianFormData) =>
      isEditMode
        ? TechnicianServices.updateTechnician(`${initialData!.id}`, values)
        : TechnicianServices.createTechnician(values),
    {
      manual: true,
      onSuccess: () => {
        form.resetFields();
        message.success(
          isEditMode
            ? t('Successfully updated {{label}}', { label: t('Technician') })
            : t('Successfully created {{label}}', { label: t('Technician') }),
        );
        onSuccess();
      },
    },
  );

  function onFinish(values: TechnicianFormData) {
    submitForm(values);
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      className="flex flex-col"
    >
      <Card
        className="mb-4"
        title={t('{{label}} Information', { label: t('Technician') })}
      >
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
          <Input />
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
          <Input />
        </Form.Item>
        <Form.Item
          label={t('Email')}
          name="contact_email"
          required
          rules={[
            {
              required: true,
              message: t('Please enter {{label}}', { label: t('Email') }),
            },
            {
              type: 'email',
              message: t('Please enter a valid {{label}}', {
                label: t('Email'),
              }),
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={t('Status')} name="status">
          <Select options={StatusOptions} />
        </Form.Item>
        <Form.Item label={t('Hire Date')} name="hire_date">
          <DatePicker className="w-full" format="YYYY/MM/DD" />
        </Form.Item>
      </Card>

      <div className="flex justify-end">
        <Button type="primary" size="large" htmlType="submit" loading={loading}>
          {isEditMode
            ? t('Update {{label}}', { label: t('Technician') })
            : t('Create new {{label}}', { label: t('Technician') })}
        </Button>
      </div>
    </Form>
  );
}

export default TechnicianForm;
