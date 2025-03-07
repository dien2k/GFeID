import { EntitiesVehicleCreateRequest, ModelsVehicle } from '@/@types/api.type';
import CustomerServices from '@/services/customer';
import VehicleServices from '@/services/vehicle';
import { useRequest } from 'ahooks';
import {
  AutoComplete,
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  message,
  Select,
} from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type CreateVehicleModel = EntitiesVehicleCreateRequest & {};

interface Props {
  onSuccess: (vehicle: ModelsVehicle) => void;
  initialData?: ModelsVehicle;
  mode?: 'create' | 'edit';
}

const SearchType = {
  EMAIL: 'email',
  PHONE: 'phone',
  NAME: 'name',
};

function VehicleForm({ onSuccess, initialData, mode = 'create' }: Props) {
  const { t } = useTranslation();

  const [form] = Form.useForm();

  const isEditMode = mode === 'edit';

  console.log(initialData);

  const [customerSearch, setCustomerSearch] = useState('');
  const [searchType, setSearchType] = useState(SearchType.PHONE);

  const SearchOptions = [
    {
      value: SearchType.EMAIL,
      label: t('Email'),
    },
    {
      value: SearchType.PHONE,
      label: t('Phone'),
    },
    {
      value: SearchType.NAME,
      label: t('Name'),
    },
  ];

  const getCustomersAPI = useRequest(
    () =>
      CustomerServices.getCustomers({
        page: 1,
        limit: 10,
        [searchType]: customerSearch,
      }),
    {
      refreshDeps: [customerSearch, searchType],
      debounceWait: 500,
    },
  );

  const { run: submitForm, loading } = useRequest(
    (values: CreateVehicleModel) =>
      isEditMode
        ? VehicleServices.updateVehicle(`${initialData!.id}`, values)
        : VehicleServices.createVehicle(values),
    {
      manual: true,
      onSuccess: (response) => {
        form.resetFields();
        message.success(
          isEditMode
            ? t('Successfully updated {{label}}', { label: t('Vehicle') })
            : t('Successfully created {{label}}', { label: t('Vehicle') }),
        );
        onSuccess(response.data);
      },
    },
  );

  const onFinish = (values: CreateVehicleModel) => {
    submitForm(values);
  };

  const onSelectCustomer = (value: string) => {
    const customer = getCustomersAPI.data!.data!.items!.find(
      (item) => item.id === Number(value),
    );

    form.setFieldsValue({
      owner_name: customer!.name,
      owner_phone: customer!.phone,
      owner_email: customer!.email,
      owner_address: customer!.address,
      customer_id: customer!.id,
    });
  };

  useEffect(() => {
    if (initialData) {
      form.setFieldsValue(initialData);
      form.setFieldValue('customer_id', initialData.customer?.id);
      form.setFieldValue('owner_name', initialData.customer?.name);
      form.setFieldValue('owner_phone', initialData.customer?.phone);
      form.setFieldValue('owner_email', initialData.customer?.email);
      form.setFieldValue('owner_address', initialData.customer?.address);
    }
  }, [form, initialData]);

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      className="flex flex-col gap-y-4"
      rootClassName=""
    >
      <Card title={t('{{label}} Information', { label: t('Vehicle') })}>
        <div className="grid grid-cols-2 gap-x-4">
          <Form.Item
            label={t('{{label}}', { label: t('License Plate') })}
            name="license_plate"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', {
                  label: t('License Plate'),
                }),
              },
            ]}
            className="col-span-2"
          >
            <Input
              placeholder={`${t('Enter {{label}}', { label: t('License Plate') })}`}
            />
          </Form.Item>
          <Form.Item
            label={t('{{label}}', { label: t('Vehicle Model') })}
            name="vehicle_model"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', {
                  label: t('Vehicle Model'),
                }),
              },
            ]}
          >
            <Input
              placeholder={`${t('Enter {{label}}', { label: t('Vehicle Model') })}`}
            />
          </Form.Item>
          <Form.Item
            label={t('{{label}}', { label: t('Color') })}
            name="vehicle_color"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', {
                  label: t('Vehicle Color'),
                }),
              },
            ]}
          >
            <Input
              placeholder={`${t('Enter {{label}}', { label: t('Vehicle Color') })}`}
            />
          </Form.Item>
          <Form.Item
            label={t('{{label}}', { label: t('Purchase Date') })}
            name="purchase_date"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', {
                  label: t('Purchase Date'),
                }),
              },
            ]}
          >
            <DatePicker
              className="w-full"
              format="YYYY/MM/DD"
              placeholder={`${t('Enter {{label}}', { label: t('Purchase Date') })}`}
              disabledDate={(current) =>
                current && current > dayjs().startOf('day')
              }
            />
          </Form.Item>
          <Form.Item
            label={t('{{label}}', { label: t('Current Mileage') })}
            name="current_mileage"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', {
                  label: t('Current Mileage'),
                }),
              },
            ]}
          >
            <Input
              placeholder={`${t('Enter {{label}}', { label: t('Current Mileage') })}`}
            />
          </Form.Item>
          <Form.Item
            label={t('{{label}}', { label: t('Engine Number') })}
            name="engine_number"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', {
                  label: t('Engine Number'),
                }),
              },
            ]}
          >
            <Input
              placeholder={`${t('Enter {{label}}', { label: t('Engine Number') })}`}
            />
          </Form.Item>
          <Form.Item
            label={t('{{label}}', { label: t('Frame Number') })}
            name="frame_number"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', {
                  label: t('Frame Number'),
                }),
              },
            ]}
          >
            <Input
              placeholder={`${t('Enter {{label}}', { label: t('Frame Number') })}`}
            />
          </Form.Item>
          <Form.Item
            label={t('{{label}}', { label: t('VIN') })}
            name="vin"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', { label: t('VIN') }),
              },
            ]}
          >
            <Input
              placeholder={`${t('Enter {{label}}', { label: t('VIN') })}`}
            />
          </Form.Item>
          <Form.Item
            label={t('{{label}}', { label: t('Year') })}
            name="year"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', { label: t('Year') }),
              },
            ]}
          >
            <Input
              placeholder={`${t('Enter {{label}}', { label: t('Year') })}`}
            />
          </Form.Item>
        </div>
      </Card>

      <Card title={t('{{label}} Information', { label: t('Customer') })}>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <AutoComplete
            options={getCustomersAPI.data?.data?.items?.map((item) => ({
              value: item.id,
              label: item.name,
            }))}
            value={customerSearch}
            onSelect={onSelectCustomer}
            onSearch={setCustomerSearch}
            placeholder={t('Search...')}
          />
          <Select
            value={searchType}
            options={SearchOptions}
            onChange={setSearchType}
            className="col-span-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <Form.Item
            hidden
            label="Customer ID"
            name="customer_id"
            required
            rules={[{ required: true }]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            label={t('{{label}}', { label: t('Owner Name') })}
            name="owner_name"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', {
                  label: t('Owner Name'),
                }),
              },
            ]}
          >
            <Input
              disabled
              placeholder={`${t('Enter {{label}}', { label: t('Owner Name') })}`}
            />
          </Form.Item>

          <Form.Item
            label={t('{{label}}', { label: t('Owner Phone') })}
            name="owner_phone"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', {
                  label: t('Owner Phone'),
                }),
              },
            ]}
          >
            <Input
              disabled
              placeholder={`${t('Enter {{label}}', { label: t('Owner Phone') })}`}
            />
          </Form.Item>

          <Form.Item
            label={t('Owner Email')}
            name="owner_email"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', {
                  label: t('Owner Email'),
                }),
              },
            ]}
          >
            <Input
              disabled
              placeholder={`${t('Enter {{label}}', { label: t('Owner Email') })}`}
            />
          </Form.Item>

          <Form.Item
            label={t('Owner Address')}
            name="owner_address"
            required
            rules={[
              {
                required: true,
                message: t('Please enter {{label}}', {
                  label: t('Owner Address'),
                }),
              },
            ]}
          >
            <Input
              disabled
              placeholder={`${t('Enter {{label}}', { label: t('Owner Address') })}`}
            />
          </Form.Item>
        </div>
      </Card>

      <div className="flex justify-end">
        <Button size="large" type="primary" htmlType="submit" loading={loading}>
          {isEditMode
            ? t('Update {{label}}', { label: t('Vehicle') })
            : t('Create new {{label}}', { label: t('Vehicle') })}
        </Button>
      </div>
    </Form>
  );
}

export default VehicleForm;
