import {
  ArrowLeftOutlined,
  CreditCardOutlined,
  DollarCircleOutlined,
  PrinterOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import { Alert, Breadcrumb, Button, Table, Card } from 'antd';
import ServiceSteps from '@/components/common/service-steps';
import { RouteNames } from '@/routes/routes';
import { columns } from './list-part-table-col';
import { maintenanceData, partsData, warrantyData } from './faker';

export interface ServiceItem {
  key: string;
  no: number;
  code: string;
  name: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  amount: number;
  note?: string;
}

const ServiceJobCardPaymentAndClosure = () => {
  return (
    <>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <Breadcrumb
            items={[
              {
                title: 'Vehicle & Service Management',
                href: RouteNames.VEHICLE_AND_SERVICE_MANAGEMENT,
              },
              {
                title: 'Create Service Job Card',
                href: RouteNames.SERVICE_JOB_CARD_CREATE,
              },
              { title: 'Payment & Closure' },
            ]}
          />
          <h1 className="text-2xl font-semibold">Service Job Card #SR001234</h1>
        </div>
        <Button
          icon={<PrinterOutlined className="h-4 w-4" />}
          className="flex w-fit items-center gap-2"
        >
          Print Details
        </Button>
      </div>

      <Alert
        message={
          <div className="flex items-center gap-2">
            Please review the service details and complete the payment to close
            this job card.
          </div>
        }
        type="info"
        className="mb-6"
        banner
      />

      <div className="mx-auto mb-6 flex max-w-md items-center gap-4">
        <ServiceSteps current={1} />
      </div>

      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium">Customer Information</h2>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-500">Customer Name</div>
              <div>Mai Ngần</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Phone Number</div>
              <div>0123456789</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Email</div>
              <div>09X.X63.703</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium">Vehicle Information</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <div className="text-sm text-gray-500">Vehicle Model</div>
              <div>Lead 125</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">License Plate</div>
              <div>--</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Owner's Name</div>
              <div>Mai Ngần</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Current Mileage</div>
              <div>5,000 KM</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Owner's Phone</div>
              <div>0123456789</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-medium">Service Details</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <div className="text-sm text-gray-500">Reception Time</div>
                <div>2024-01-15 10:00</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Completion Time</div>
                <div>2024-01-15 12:00</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Technician</div>
                <div>John Smith</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card title="Service Summary">
        {/* Maintenance Section */}
        <Card title="I. Maintenance, Repair, and Service">
          <Table
            columns={columns}
            dataSource={maintenanceData}
            pagination={false}
            size="small"
            className="rounded-lg bg-white shadow-sm"
          />
        </Card>

        {/* Parts Replacement Section */}
        <Card title="II. Parts Replacement">
          <Table
            columns={columns}
            dataSource={partsData}
            pagination={false}
            size="small"
            className="rounded-lg bg-white shadow-sm"
          />
        </Card>

        {/* Warranty Coverage Section */}
        <Card className="space-y-4">
          <h2 className="text-base font-medium">III. Warranty Coverage</h2>
          <Table
            columns={columns}
            dataSource={warrantyData}
            pagination={false}
            size="small"
            className="rounded-lg bg-white shadow-sm"
          />
        </Card>

        {/* Summary */}
        <div className="space-y-4 p-4">
          <div className="flex justify-between">
            <span className="font-medium">Subtotal:</span>
            <span>3,525,000 VND</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Service Fee:</span>
            <span>0 VND</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Discount:</span>
            <span>0 VND</span>
          </div>
          <div className="flex justify-between font-medium">
            <span className="font-medium">Total:</span>
            <span>3,525,000 VND</span>
          </div>
          <div className="text-xs text-gray-500">
            (Four million four hundred and seventy thousand VND)
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-4">
          <h2 className="text-base font-medium">Payment Method</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card
              hoverable
              className="cursor-pointer text-center"
              onClick={() => console.log('Cash payment selected')}
            >
              <DollarCircleOutlined className="mx-auto h-6 w-6" />
              <div className="mt-2 font-medium">Cash Payment</div>
              <div className="text-sm text-gray-500">
                Pay with cash on completion
              </div>
            </Card>
            <Card
              hoverable
              className="cursor-pointer text-center"
              onClick={() => console.log('Card payment selected')}
            >
              <CreditCardOutlined className="mx-auto h-6 w-6" />
              <div className="mt-2 font-medium">Card Payment</div>
              <div className="text-sm text-gray-500">
                Pay with credit/debit card
              </div>
            </Card>
            <Card
              hoverable
              className="cursor-pointer text-center"
              onClick={() => console.log('Momo wallet selected')}
            >
              <WalletOutlined className="mx-auto h-6 w-6" />
              <div className="mt-2 font-medium">Momo Wallet</div>
              <div className="text-sm text-gray-500">Pay via Momo e-wallet</div>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4">
          <Button
            icon={<ArrowLeftOutlined className="h-4 w-4" />}
            onClick={() => console.log('Back clicked')}
            className="flex items-center gap-2"
          >
            Back
          </Button>
          <Button
            type="primary"
            onClick={() => console.log('Process payment clicked')}
            className="bg-blue-500"
          >
            Process Payment →
          </Button>
        </div>
      </Card>
    </>
  );
};

export default ServiceJobCardPaymentAndClosure;
