import { ModelsCustomer } from '@/@types/api.type';
import { VehicleResponse } from '@/@types/extended.type';
import CustomerForm from '@/components/features/customer-form';
import VehicleForm from '@/components/features/vehicle-form';
import TechnicianServices from '@/services/technician';
import VehicleServices from '@/services/vehicle';
import { SearchOutlined } from '@ant-design/icons';
import { useBoolean, useRequest } from 'ahooks';
import {
  AutoComplete,
  Button,
  Card,
  DatePicker,
  Drawer,
  Form,
  FormInstance,
  Input,
  Select,
} from 'antd';
import dayjs from 'dayjs';
import { useMemo, useState } from 'react';

interface ServiceJobCardInformationProps {
  form: FormInstance;
}

const ServiceJobCardInformation = ({
  form,
}: ServiceJobCardInformationProps) => {
  const [vehicleSearch, setVehicleSearch] = useState('');
  const [
    isOpenCreateCustomerDrawer,
    { setTrue: openCreateCustomerDrawer, setFalse: closeCreateCustomerDrawer },
  ] = useBoolean(false);
  const [
    isOpenCreateVehicleDrawer,
    { setTrue: openCreateVehicleDrawer, setFalse: closeCreateVehicleDrawer },
  ] = useBoolean(false);

  const { data: technicianData } = useRequest(() =>
    TechnicianServices.getTechnicians({ page: 1, limit: 1000 }),
  );

  const { data: vehicleData } = useRequest(
    () =>
      VehicleServices.getVehicles({
        page: 1,
        limit: 1000,
        search: vehicleSearch,
      }),
    { refreshDeps: [vehicleSearch] },
  );

  const TECHNICIAN_OPTIONS = useMemo(
    () =>
      technicianData?.data?.items?.map((tech) => ({
        value: String(tech.id),
        label: tech.name,
      })) || [],
    [technicianData],
  );

  const VEHICLE_OPTIONS = useMemo(
    () =>
      vehicleData?.data?.items?.map((item) => ({
        value: String(item.id),
        label: item.license_plate,
        id: item.id,
      })) || [],
    [vehicleData],
  );

  const handleVehicleSelect = (value: string) => {
    const vehicle = vehicleData?.data?.items?.find(
      (item) => String(item.id) === value,
    );
    if (!vehicle || !vehicle?.customer) return;

    const { customer, model, license_plate, current_mileage, id } = vehicle;
    form.setFieldsValue({
      customer_id: customer.id,
      customer_name: customer.name,
      customer_phone: customer.phone,
      customer_email: customer.email,
      customer_address: customer.address,
      vehicle_model: model?.name,
      license_plate,
      current_mileage,
      owner_phone: customer.phone,
      owner_name: customer.name,
      vehicle_id: id,
    });
  };

  const handleCreateCustomerSuccess = (customer: ModelsCustomer) => {
    form.setFieldsValue({
      customer_id: customer.id,
      customer_name: customer.name,
      customer_phone: customer.phone,
      customer_email: customer.email,
    });
    closeCreateCustomerDrawer();
  };

  const handleCreateVehicleSuccess = (vehicle: VehicleResponse) => {
    if (!vehicle.customer) return;

    form.setFieldsValue({
      vehicle_id: vehicle.id,
      vehicle_model: vehicle.model?.name,
      license_plate: vehicle.license_plate,
      current_mileage: vehicle.current_mileage,
      owner_name: vehicle.customer?.name,
      owner_phone: vehicle.customer?.phone,
      customer_id: vehicle.customer?.id,
      customer_name: vehicle.customer?.name,
      customer_phone: vehicle.customer?.phone,
      customer_email: vehicle.customer?.email,
      customer_address: vehicle.customer?.address,
    });
    closeCreateVehicleDrawer();
  };

  return (
    <div className="space-y-4">
      <div className="mb-4 grid grid-cols-2 gap-4">
        <AutoComplete
          options={VEHICLE_OPTIONS}
          value={vehicleSearch}
          onSelect={handleVehicleSelect}
          onSearch={setVehicleSearch}
          prefix={<SearchOutlined />}
          placeholder="Search customer..."
          className="col-span-1"
        />
        <AutoComplete
          options={VEHICLE_OPTIONS}
          value={vehicleSearch}
          onSelect={handleVehicleSelect}
          onSearch={setVehicleSearch}
          prefix={<SearchOutlined />}
          placeholder="Search vehicle..."
          className="col-span-1"
        />
      </div>

      {/* Customer Information Section */}
      <div className="grid grid-cols-2 gap-4">
        <Card
          title={
            <div className="flex items-center justify-between">
              <h2 className="mb-4 text-lg font-semibold">
                Customer Information
              </h2>
              <Button
                type="primary"
                className="bg-blue-100 text-blue-500"
                onClick={openCreateCustomerDrawer}
              >
                + Create New Customer
              </Button>
            </div>
          }
        >
          <Form.Item name="customer_id" hidden rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="customer_name" label="Customer Name">
            <Input disabled placeholder="Customer name" />
          </Form.Item>
          <Form.Item name="customer_phone" label="Phone Number">
            <Input disabled placeholder="Phone number" />
          </Form.Item>
          <Form.Item name="customer_email" label="Email">
            <Input disabled placeholder="Email" />
          </Form.Item>
        </Card>

        {/* Vehicle Information Section */}
        <Card
          title={
            <div className="flex items-center justify-between">
              <h2 className="mb-4 text-lg font-semibold">
                Vehicle Information
              </h2>
              <Button
                type="primary"
                className="bg-blue-100 text-blue-500"
                onClick={openCreateVehicleDrawer}
              >
                + Create New Vehicle
              </Button>
            </div>
          }
        >
          <div className="grid grid-cols-2 gap-x-4">
            <Form.Item
              className="hidden"
              name="vehicle_id"
              label="Vehicle ID"
              rules={[{ required: true, message: 'Please enter vehicle id' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="vehicle_model" label="Vehicle Model">
              <Input disabled placeholder="Lead 125" />
            </Form.Item>
            <Form.Item name="license_plate" label="License Plate">
              <Input disabled placeholder="09X.X63.703" />
            </Form.Item>
            <Form.Item name="current_mileage" label="Current Mileage">
              <Input disabled placeholder="5000 KM" />
            </Form.Item>
            <Form.Item name="owner_name" label="Owner's Name">
              <Input disabled placeholder="Mai Ngân" />
            </Form.Item>
          </div>
          <Form.Item name="owner_phone" label="Owner's Phone Number">
            <Input disabled placeholder="0123456789" />
          </Form.Item>
        </Card>
      </div>

      {/* Service Details Section */}
      <Card title="Service Details">
        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            name="estimated_completion_time"
            label="Est. Completion Time"
            rules={[
              {
                required: true,
                message: 'Please enter estimated completion time',
              },
            ]}
          >
            <DatePicker
              showTime
              className="w-full"
              disabledDate={(current) =>
                current && current < dayjs().startOf('day')
              }
            />
          </Form.Item>
          <Form.Item
            name="technician_id"
            label="Technician"
            rules={[{ required: true, message: 'Please select technician' }]}
          >
            <Select
              placeholder="Select Technician"
              className="w-full"
              options={TECHNICIAN_OPTIONS}
            />
          </Form.Item>
        </div>
      </Card>

      {/* Drawers */}
      <Drawer
        title="Create Customer"
        open={isOpenCreateCustomerDrawer}
        onClose={closeCreateCustomerDrawer}
        width={600}
      >
        <CustomerForm onSuccess={handleCreateCustomerSuccess} />
      </Drawer>
      <Drawer
        title="Create Vehicle"
        open={isOpenCreateVehicleDrawer}
        onClose={closeCreateVehicleDrawer}
        width={600}
      >
        <VehicleForm onSuccess={handleCreateVehicleSuccess} />
      </Drawer>
    </div>
  );
};

export default ServiceJobCardInformation;
