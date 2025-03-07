import { EntitiesPartCreateRequest, ModelsPart } from '@/@types/api.type';
import { RouteNames } from '@/routes/routes';
import PartServices from '@/services/part';
import VendorServices from '@/services/vendor';
import { useBoolean, useRequest } from 'ahooks';
import { Button, Card, Form, Input, InputNumber, message, Select } from 'antd';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface Props {
  onSuccess: (part: ModelsPart) => void;
  initialData?: ModelsPart;
  mode?: 'create' | 'edit';
}

const CATEGORY_OPTIONS = [
  { label: 'Category 1', value: 'category1' },
  { label: 'Category 2', value: 'category2' },
  { label: 'Category 3', value: 'category3' },
];

const UNIT_OPTIONS = [
  { label: 'Piece', value: 'Piece' },
  { label: 'Box', value: 'Box' },
  { label: 'Set', value: 'Set' },
  { label: 'Pair', value: 'Pair' },
];

function PartForm({ onSuccess, initialData, mode = 'create' }: Props) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const isEditMode = mode === 'edit';
  const [isEdit, setEdit] = useBoolean(true);
  const { data: vendors } = useRequest(
    () =>
      VendorServices.getVendors({
        page: 1,
        per_page: 1000,
      }),
    {
      refreshDeps: [],
    },
  );

  const StatusOptions = [
    { label: t('Active'), value: true },
    { label: t('Inactive'), value: false },
  ];

  const VENDOR_OPTIONS = vendors?.data?.items?.map((vendor) => ({
    label: vendor.name,
    value: vendor.id,
  }));

  useEffect(() => {
    if (initialData && isEditMode) {
      form.setFieldsValue({
        ...initialData,
      });
    } else {
      form.setFieldsValue({
        is_active: StatusOptions[0].value,
        unit: UNIT_OPTIONS[0].value,
        category: CATEGORY_OPTIONS[0].value,
        vendor_id: VENDOR_OPTIONS?.[0]?.value,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [VENDOR_OPTIONS, form, initialData, isEditMode]);

  const { run: submitForm, loading } = useRequest(
    (values: EntitiesPartCreateRequest) =>
      isEditMode
        ? PartServices.updatePart(`${initialData!.id}`, values)
        : PartServices.createPart(values),
    {
      manual: true,
      onSuccess: (response) => {
        form.resetFields();
        message.success(
          isEditMode
            ? t('Successfully updated {{label}}', { label: t('Part') })
            : t('Successfully created {{label}}', { label: t('Part') }),
        );
        navigate(RouteNames.PARTS_MANAGEMENT);
        onSuccess(response.data);
      },
    },
  );

  function onFinish(values: EntitiesPartCreateRequest) {
    submitForm(values);
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      rootClassName="flex flex-col gap-4"
    >
      <div className="w-full">
        {/* Basic Information */}
        <Card
          title={t('{{label}} Information', { label: t('Basic') })}
          className="[&_.ant-card-body]:!px-4 [&_.ant-card-body]:!py-2 [&_.ant-card-head]:!px-4"
        >
          <div className="grid grid-cols-2 gap-x-2">
            <Form.Item
              name="vendor_id"
              label={t('{{label}}', { label: t('Vendor') })}
              required
              rules={[
                {
                  required: true,
                  message: t('Please select {{label}}', { label: t('Vendor') }),
                },
              ]}
            >
              <Select
                disabled={isEdit && isEditMode}
                options={VENDOR_OPTIONS}
                placeholder={t('Select {{label}}', { label: t('Vendor') })}
              />
            </Form.Item>
            <Form.Item
              name="is_active"
              label={t('{{label}}', { label: t('Status') })}
              required
              rules={[
                {
                  required: true,
                  message: t('Please select {{label}}', { label: t('Status') }),
                },
              ]}
            >
              <Select
                disabled={isEdit && isEditMode}
                options={StatusOptions}
                placeholder={t('Select {{label}}', { label: t('Status') })}
              />
            </Form.Item>
            <Form.Item
              name="oem_number"
              label={t('{{label}}', { label: t('OEM Part Number') })}
              required
              rules={[
                {
                  required: true,
                  message: t('Please enter {{label}}', {
                    label: t('OEM Part Number'),
                  }),
                },
              ]}
            >
              <Input
                placeholder={t('Enter {{label}}', {
                  label: t('OEM Part Number'),
                })}
                disabled={isEdit && isEditMode}
              />
            </Form.Item>
            <Form.Item
              name="name"
              label={t('{{label}}', { label: t('Part Name') })}
              required
              rules={[
                {
                  required: true,
                  message: t('Please enter {{label}}', {
                    label: t('Part Name'),
                  }),
                },
              ]}
            >
              <Input
                placeholder={t('Enter {{label}}', {
                  label: t('Part Name'),
                })}
                disabled={isEdit && isEditMode}
              />
            </Form.Item>
          </div>

          <Form.Item
            name="category"
            label={t('{{label}}', { label: t('Category') })}
            required
            rules={[
              {
                required: true,
                message: t('Please select {{label}}', { label: t('Category') }),
              },
            ]}
          >
            <Select
              disabled={isEdit && isEditMode}
              options={CATEGORY_OPTIONS}
              placeholder={t('Select {{label}}', { label: t('Category') })}
            />
          </Form.Item>
        </Card>
      </div>

      {/* Stock Information */}
      <Card
        title={t('{{label}} Information', { label: t('Stock') })}
        className="[&_.ant-card-body]:!px-4 [&_.ant-card-body]:!py-2 [&_.ant-card-head]:!px-4"
      >
        <div className="grid grid-cols-3 gap-x-2">
          <Form.Item
            name="initial_stock"
            label={t('{{label}}', { label: t('Initial Stock') })}
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', {
                  label: t('Initial Stock'),
                }),
              },
            ]}
          >
            <InputNumber
              className="w-full"
              placeholder={t('Enter {{label}}', {
                label: t('Initial Stock'),
              })}
              disabled={isEdit && isEditMode}
            />
          </Form.Item>
          <Form.Item
            name="reorder_point"
            label={t('{{label}}', { label: t('Reorder Point') })}
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', {
                  label: t('Reorder Point'),
                }),
              },
            ]}
          >
            <InputNumber
              className="w-full"
              placeholder={t('Enter {{label}}', { label: t('Reorder Point') })}
              disabled={isEdit && isEditMode}
            />
          </Form.Item>
          <Form.Item
            name="max_stock"
            label={t('{{label}}', { label: t('Maximum Stock') })}
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', {
                  label: t('Maximum Stock'),
                }),
              },
            ]}
          >
            <InputNumber
              className="w-full"
              placeholder={t('Enter {{label}}', { label: t('Maximum Stock') })}
              disabled={isEdit && isEditMode}
            />
          </Form.Item>
        </div>
      </Card>

      {/* Pricing Information */}
      <Card
        title={t('{{label}} Information', {
          label: t('Pricing'),
        })}
        className="[&_.ant-card-body]:!px-4 [&_.ant-card-body]:!py-2 [&_.ant-card-head]:!px-4"
      >
        <div className="grid grid-cols-3 gap-x-2">
          <Form.Item
            name="unit"
            label={t('{{label}}', { label: t('Unit') })}
            required
            rules={[
              {
                required: true,
                message: t('Please select {{label}}', { label: t('Unit') }),
              },
            ]}
          >
            <Select
              disabled={isEdit && isEditMode}
              options={UNIT_OPTIONS}
              placeholder={t('Select {{label}}', { label: t('Unit') })}
            />
          </Form.Item>
          <Form.Item
            name="unit_price"
            label={t('{{label}}', { label: t('Unit Price') })}
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', {
                  label: t('Unit Price'),
                }),
              },
            ]}
          >
            <InputNumber
              className="w-full"
              step="0.01"
              placeholder={t('Enter {{label}}', { label: t('Unit Price') })}
              disabled={isEdit && isEditMode}
            />
          </Form.Item>
          <Form.Item
            name="promotion_price"
            label={t('{{label}}', { label: t('Promotion Price') })}
          >
            <InputNumber
              className="w-full"
              step="0.01"
              placeholder={t('Enter {{label}}', {
                label: t('Promotion Price'),
              })}
              disabled={isEdit && isEditMode}
            />
          </Form.Item>
        </div>
      </Card>

      {/* Additional Details */}
      <Card
        title={t('{{label}}', { label: t('Additional Details') })}
        className="[&_.ant-card-body]:!px-4 [&_.ant-card-body]:!py-2 [&_.ant-card-head]:!px-4"
      >
        <Form.Item name="description">
          <Input.TextArea
            placeholder={t('{{label}}', { label: t('Description') })}
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
          {isEditMode && !isEdit
            ? t('Update {{label}}', { label: t('Part') })
            : t('Create new {{label}}', { label: t('Part') })}
        </Button>
      </div>
    </Form>
  );
}

export default PartForm;
