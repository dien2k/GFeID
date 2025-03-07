import { EntitiesServiceCreateRequest, ModelsService } from '@/@types/api.type';
import { RouteNames } from '@/routes/routes';
import ServiceServices from '@/services/service';
import { useBoolean, useRequest } from 'ahooks';
import { Button, Card, Form, Input, InputNumber, message, Select } from 'antd';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface Props {
  onSuccess: (service: ModelsService) => void;
  initialData?: ModelsService;
  mode?: 'create' | 'edit';
}

const SERVICE_TYPE_OPTIONS = [
  { label: 'Service', value: 'Service' },
  { label: 'Set', value: 'Set' },
];

function ServiceForm({ onSuccess, initialData, mode = 'create' }: Props) {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const isEditMode = mode === 'edit';

  const [isEdit, setEdit] = useBoolean(true);

  const StatusOptions = [
    { label: t('Active'), value: 'Active' },
    { label: t('Inactive'), value: 'Inactive' },
  ];

  useEffect(() => {
    if (initialData && isEditMode) {
      form.setFieldsValue({
        ...initialData,
      });
    } else {
      form.setFieldsValue({
        status: StatusOptions[0].value,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, initialData, isEditMode]);

  const { run: submitForm, loading } = useRequest(
    (values: EntitiesServiceCreateRequest) =>
      isEditMode
        ? ServiceServices.updateService(`${initialData!.id}`, {
            ...initialData,
            ...values,
          })
        : ServiceServices.createService(values),
    {
      manual: true,
      onSuccess: (response) => {
        form.resetFields();
        message.success(
          isEditMode
            ? t('Successfully updated {{label}}', { label: t('Service') })
            : t('Successfully created {{label}}', { label: t('Service') }),
        );
        onSuccess(response.data);
        navigate(RouteNames.SERVICES_MANAGEMENT);
      },
    },
  );

  function onFinish(values: EntitiesServiceCreateRequest) {
    submitForm(values);
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      rootClassName="flex flex-col gap-2"
    >
      <Card title={t('{{label}} Information', { label: t('Service') })}>
        <Form.Item
          name="type"
          label={t('Type')}
          required
          rules={[{ required: true, message: 'Please select service type' }]}
        >
          <Select
            options={SERVICE_TYPE_OPTIONS}
            placeholder={t('Select {{label}}', { label: t('Service') })}
            disabled={isEdit && isEditMode}
          />
        </Form.Item>
        <Form.Item name="status" label={t('Status')}>
          <Select
            options={StatusOptions}
            disabled={isEdit && isEditMode}
            placeholder={t('Select {{label}}', { label: t('Status') })}
          />
        </Form.Item>
        <Form.Item
          name="name"
          label={t('Name')}
          required
          rules={[
            {
              required: true,
              message: t('Please enter {{label}}', { label: t('Name') }),
            },
          ]}
        >
          <Input
            placeholder={t('Enter {{label}}', { label: t('Name') })}
            disabled={isEdit && isEditMode}
          />
        </Form.Item>
        <Form.Item
          name="unit_price"
          label={t('Unit Price')}
          required
          rules={[
            {
              required: true,
              message: t('Please enter {{label}}', { label: t('Unit Price') }),
            },
          ]}
        >
          <InputNumber
            disabled={isEdit && isEditMode}
            className="w-full"
            placeholder={t('Enter {{label}}', { label: t('Unit Price') })}
          />
        </Form.Item>
        <Form.Item name="duration" label={t('Duration (in minutes)')}>
          <InputNumber
            disabled={isEdit && isEditMode}
            className="w-full"
            placeholder={t('Enter {{label}}', { label: t('Duration') })}
            step={1}
          />
        </Form.Item>
        <Form.Item name="description" label={t('Description')}>
          <Input.TextArea
            rows={4}
            placeholder={t('Enter {{label}}', { label: t('Description') })}
            disabled={isEdit && isEditMode}
          />
        </Form.Item>
      </Card>

      <div className="flex justify-end gap-2">
        {isEditMode && (
          <>
            {!isEdit ? (
              <Button type="primary" size="large" onClick={setEdit.setTrue}>
                Cancel
              </Button>
            ) : (
              <Button type="default" size="large" onClick={setEdit.setFalse}>
                Edit
              </Button>
            )}
          </>
        )}
        <Button type="primary" size="large" htmlType="submit" loading={loading}>
          {isEditMode ? 'Update' : 'Create'} Service
        </Button>
      </div>
    </Form>
  );
}

export default ServiceForm;
