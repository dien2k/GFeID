import { ModelsVendor } from '@/@types/api.type';
import VendorServices from '@/services/vendor';
import { useRequest } from 'ahooks';
import { Button, Card, Form, Input, message } from 'antd';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
type VendorFormData = Omit<ModelsVendor, 'vendorId'>;

interface Props {
  onSuccess: VoidFunction;
  initialData?: ModelsVendor;
  mode?: 'create' | 'edit';
}

function VendorForm({ onSuccess, initialData, mode = 'create' }: Props) {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const isEditMode = mode === 'edit';

  useEffect(() => {
    if (initialData && isEditMode) {
      form.setFieldsValue({
        ...initialData,
      });
    } else {
      form.resetFields();
    }
  }, [initialData, form, isEditMode]);

  const { run: submitForm, loading } = useRequest(
    (values: VendorFormData) =>
      isEditMode
        ? VendorServices.updateVendor(`${initialData!.id}`, values)
        : VendorServices.createVendor(values),
    {
      manual: true,
      onSuccess: () => {
        form.resetFields();
        message.success(
          isEditMode
            ? t('Successfully updated {{label}}', { label: t('Vendor') })
            : t('Successfully created {{label}}', { label: t('Vendor') }),
        );
        onSuccess();
      },
    },
  );

  function onFinish(values: VendorFormData) {
    submitForm(values);
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      className="mb-4 flex flex-col"
    >
      <Card
        title={
          isEditMode
            ? t('Update {{label}}', { label: t('Vendor') })
            : t('Create new {{label}}', { label: t('Vendor') })
        }
      >
        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label={t('{{label}}', { label: t('Vendor Name') })}
            name="name"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', {
                  label: t('Vendor Name'),
                }),
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t('{{label}}', { label: t('Vendor Code') })}
            name="code"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', {
                  label: t('Vendor Code'),
                }),
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Form.Item
            label={t('{{label}}', { label: t('Contact Person') })}
            name="contact_person"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t('{{label}}', { label: t('Phone') })}
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
            label={t('{{label}}', { label: t('Email') })}
            name="email"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', { label: t('Email') }),
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <Form.Item
            label={t('{{label}}', { label: t('Lead Time') })}
            name="lead_time"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', { label: t('Lead Time') }),
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t('{{label}}', { label: t('Payment Terms') })}
            name="payment_terms"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', {
                  label: t('Payment Terms'),
                }),
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <Form.Item
          label={t('{{label}}', { label: t('Address') })}
          name="address"
        >
          <Input.TextArea rows={4} />
        </Form.Item>
      </Card>

      <div className="mt-4 flex justify-end">
        <Button type="primary" size="large" htmlType="submit" loading={loading}>
          {isEditMode
            ? t('Update {{label}}', { label: t('Vendor') })
            : t('Create new {{label}}', { label: t('Vendor') })}
        </Button>
      </div>
    </Form>
  );
}

export default VendorForm;
