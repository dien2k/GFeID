import { Form, Input, Select, DatePicker, Button, Breadcrumb } from 'antd';
import PartSelection from './part-selection';
import { RouteNames } from '@/routes/routes';

const { TextArea } = Input;

const OrderCreate = () => {
  const [form] = Form.useForm();

  return (
    <>
      <Breadcrumb
        items={[
          { title: 'Order Management', href: RouteNames.ORDER_MANAGEMENT },
          { title: 'Order Details' },
        ]}
        className="mb-6"
      />
      <div className="mb-4 flex items-center justify-between">
        <h1 className="m-0">Create New Order</h1>
        <div className="space-x-2">
          <Button size="large">Cancel</Button>
          <Button size="large" type="primary" className="bg-blue-500">
            Create Order
          </Button>
        </div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow">
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => console.log(values)}
        >
          <div className="mb-4 grid grid-cols-4 gap-4">
            <Form.Item label="PO Number" name="poNumber" className="col-span-1">
              <Input prefix="PO-" placeholder="2024-001" />
            </Form.Item>

            <Form.Item label="Vendor" name="vendor" className="col-span-1">
              <Select
                placeholder="Select a vendor..."
                options={[
                  { label: 'EV Parts Co.', value: 'vendor1' },
                  { label: 'Auto Filters Inc.', value: 'vendor2' },
                ]}
              />
            </Form.Item>

            <Form.Item
              label="Order Date"
              name="orderDate"
              className="col-span-1"
            >
              <DatePicker className="w-full" />
            </Form.Item>

            <Form.Item
              label="Received Date"
              name="receivedDate"
              className="col-span-1"
            >
              <DatePicker className="w-full" />
            </Form.Item>
          </div>

          <PartSelection />

          <div className="mb-6">
            <h2 className="mb-4">Order Summary</h2>
            <div className="mb-2 flex justify-between">
              <span>Subtotal:</span>
            </div>
            <div className="mb-2 flex justify-between">
              <span>Total Savings:</span>
              <span className="text-green-500">$0.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Amount:</span>
            </div>
          </div>

          <div>
            <h2 className="mb-4">Order Notes</h2>
            <Form.Item name="notes">
              <TextArea
                rows={4}
                placeholder="Add any notes about this order..."
              />
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
};

export default OrderCreate;
