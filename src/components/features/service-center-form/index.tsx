import { ModelsServiceCenter } from '@/@types/api.type';
import ServiceCenterServices from '@/services/service-center';
import { useProfileStore } from '@/stores/profile-store';
import { useRequest } from 'ahooks';
import { Button, Card, Form, Input, message, Select } from 'antd';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type ServiceCenterFormData = Omit<ModelsServiceCenter, 'serviceCenterId'>;

interface Props {
  onSuccess: VoidFunction;
  initialData?: ModelsServiceCenter;
  mode?: 'create' | 'edit';
}

function ServiceCenterForm({ onSuccess, initialData, mode = 'create' }: Props) {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const profile = useProfileStore((state) => state.profile);
  console.log(profile);
  // const [selectedProvince, setSelectedProvince] = useState<string>();
  // const [selectedDistrict, setSelectedDistrict] = useState<string>();
  // const [selectedWard, setSelectedWard] = useState<string>();
  const isEditMode = mode === 'edit';

  // Fetch provinces
  // const { data: provinces } = useRequest(
  //   () => ServiceCenterServices.getProvinces(),
  //   {
  //     formatResult: (res) => res.data,
  //   }
  // );

  // Fetch districts based on selected province
  // const { data: districts } = useRequest(
  //   () => selectedProvince ? ServiceCenterServices.getDistricts(selectedProvince) : Promise.resolve([]),
  //   {
  //     refreshDeps: [selectedProvince],
  //     formatResult: (res) => res.data,
  //   }
  // );

  // Fetch wards based on selected district
  // const { data: wards } = useRequest(
  //   () => selectedDistrict ? ServiceCenterServices.getWards(selectedDistrict) : Promise.resolve([]),
  //   {
  //     refreshDeps: [selectedDistrict],
  //     formatResult: (res) => res.data,
  //   }
  // );

  const StatusOptions = [
    { label: t('Active'), value: 'Active' },
    { label: t('Inactive'), value: 'Inactive' },
  ];

  useEffect(() => {
    if (initialData && isEditMode) {
      form.setFieldsValue({
        ...initialData,
      });
      // setSelectedProvince(initialData?.city_or_province);
      // setSelectedDistrict(initialData?.district);
    } else {
      form.setFieldsValue({
        status: StatusOptions[0].value,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData, form, isEditMode]);

  const { run: submitForm, loading } = useRequest(
    (values: ServiceCenterFormData) =>
      isEditMode
        ? ServiceCenterServices.updateServiceCenter(
            `${initialData!.id}`,
            values,
          )
        : ServiceCenterServices.createServiceCenter({
            ...values,
            admin_user_id: profile.id,
          }),
    {
      manual: true,
      onSuccess: () => {
        form.resetFields();
        message.success(
          isEditMode
            ? t('Successfully updated {{label}}', {
                label: t('Service Center'),
              })
            : t('Successfully created {{label}}', {
                label: t('Service Center'),
              }),
        );
        onSuccess();
      },
    },
  );

  // const handleProvinceChange = (value: string) => {
  //   setSelectedProvince(value);
  //   form.setFieldsValue({ district: undefined, ward: undefined });
  // };

  // const handleDistrictChange = (value: string) => {
  //   setSelectedDistrict(value);
  //   form.setFieldsValue({ ward: undefined });
  // };

  function onFinish(values: ServiceCenterFormData) {
    submitForm(values);
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      className="flex flex-col"
    >
      <div className="flex-1 space-y-4">
        <Card
          title={t('{{label}} Information', { label: t('Service Center') })}
        >
          <div className="flex flex-col">
            <Form.Item
              label={t('Name')}
              name="name"
              required
              rules={[
                {
                  required: true,
                  message: t('Please enter {{label}}', {
                    label: t('Name'),
                  }),
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label={t('Phone')} name="phone">
              <Input
                placeholder={t('Enter {{label}}', { label: t('Phone') })}
              />
            </Form.Item>

            <Form.Item
              label={t('Status')}
              name="status"
              required
              rules={[
                {
                  required: true,
                  message: t('Please select {{label}}', {
                    label: t('Status'),
                  }),
                },
              ]}
            >
              <Select options={StatusOptions} />
            </Form.Item>
            <Form.Item label={t('District')} name="district">
              <Input />
            </Form.Item>
            {/*
            <Form.Item
              label="Province/City"
              name="province"
              required
              rules={[{ required: true, message: 'Please select province' }]}
            >
              <Select
                onChange={handleProvinceChange}
                loading={!city_or_province}
                showSearch
                optionFilterProp="children"
              >
                {provinces?.map((province) => (
                  <Select.Option key={province.code} value={province.code}>
                    {province.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="District"
              name="district"
              required
              rules={[{ required: true, message: 'Please select district' }]}
            >
              <Select
                onChange={handleDistrictChange}
                loading={!districts}
                disabled={!selectedProvince}
                showSearch
                optionFilterProp="children"
              >
                {districts?.map((district) => (
                  <Select.Option key={district.code} value={district.code}>
                    {district.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Ward"
              name="ward"
              required
              rules={[{ required: true, message: 'Please select ward' }]}
            >
              <Select
                loading={!wards}
                disabled={!selectedDistrict}
                showSearch
                optionFilterProp="children"
              >
                {wards?.map((ward) => (
                  <Select.Option key={ward.code} value={ward.code}>
                    {ward.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item> */}

            <Form.Item label={t('Address')} name="address">
              <Input.TextArea rows={4} />
            </Form.Item>
          </div>
        </Card>
      </div>

      <div className="mt-4 flex justify-end">
        <Button type="primary" htmlType="submit" size="large" loading={loading}>
          {isEditMode
            ? t('Update {{label}}', { label: t('Service Center') })
            : t('Create new {{label}}', { label: t('Service Center') })}
        </Button>
      </div>
    </Form>
  );
}

export default ServiceCenterForm;
