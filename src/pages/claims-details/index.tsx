import { RouteNames } from '@/routes/routes';
import { PrinterOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Card, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import numeral from 'numeral';

const { Text } = Typography;

interface PartItem {
  unit: string;
  code: string;
  partName: string;
  unitPrice: number;
  status: 'Approved' | 'Rejected';
  quantity: number;
  amount: number;
}

const WarrantyAndClaimDetails = () => {
  const columns: ColumnsType<PartItem> = [
    {
      title: 'Unit',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Part/Service Name',
      dataIndex: 'partName',
      key: 'partName',
    },
    {
      title: 'Unit Price',
      dataIndex: 'unitPrice',
      key: 'unitPrice',
      render: (price: number) => `$${numeral(price).format('0,0')}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Approved' ? 'success' : 'error'}>{status}</Tag>
      ),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => `$${numeral(amount).format('0,0')}`,
    },
  ];

  const partItems: PartItem[] = [
    {
      unit: 'Set',
      code: 'P001',
      partName: 'Brake Pad',
      unitPrice: 145.0,
      status: 'Approved',
      quantity: 1,
      amount: 145.0,
    },
    {
      unit: 'Piece',
      code: 'P002',
      partName: 'Oil Filter',
      unitPrice: 50.0,
      status: 'Rejected',
      quantity: 2,
      amount: 100.0,
    },
  ];

  return (
    <>
      <Breadcrumb
        className="mb-4"
        items={[
          {
            title: 'Claims Management',
            href: RouteNames.CLAIMS_MANAGEMENT,
          },
          { title: 'Claim Details' },
        ]}
      />
      <div className="mb-4 flex items-center justify-between">
        <h1 className="m-0">Claim Details</h1>
        <Button size="large" icon={<PrinterOutlined className="h-4 w-4" />}>
          Print Details
        </Button>
      </div>
      <Card title="Service Details" className="mb-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <Text type="secondary">Service Job Card ID</Text>
            <div>SRV-2024-001</div>
          </div>
          <div>
            <Text type="secondary">Technician</Text>
            <div>John Smith</div>
          </div>
          <div>
            <Text type="secondary">Completion Time</Text>
            <div>2024-01-15 12:00</div>
          </div>
        </div>
      </Card>

      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card title="Customer Information">
          <div className="space-y-4">
            <div>
              <Text type="secondary">Customer Name</Text>
              <div>Mai Ngân</div>
            </div>
            <div>
              <Text type="secondary">Phone Number</Text>
              <div>0123456789</div>
            </div>
            <div>
              <Text type="secondary">Email</Text>
              <div>09X.X63.703</div>
            </div>
          </div>
        </Card>

        <Card title="Vehicle Information">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Text type="secondary">Vehicle Model</Text>
                <div>Lead 125</div>
              </div>
              <div>
                <Text type="secondary">License Plate</Text>
                <div>--</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Text type="secondary">Owner's Name</Text>
                <div>Mai Ngân</div>
              </div>
              <div>
                <Text type="secondary">Owner's Phone</Text>
                <div>0123456789</div>
              </div>
            </div>
            <div>
              <Text type="secondary">Current Mileage</Text>
              <div>5,000 KM</div>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Part Items" className="mb-6">
        <Table
          columns={columns}
          dataSource={partItems}
          pagination={false}
          size="small"
          summary={(pageData) => {
            const total = pageData.reduce((sum, item) => sum + item.amount, 0);
            return (
              <Table.Summary.Row>
                <Table.Summary.Cell
                  index={0}
                  colSpan={6}
                  className="text-right"
                >
                  <Text strong>Total Amount:</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1}>
                  <Text strong>${total.toFixed(2)}</Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            );
          }}
        />
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card title="Payment Information">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Text type="secondary">Payment Date</Text>
                <div>2024-01-20</div>
              </div>
              <div>
                <Text type="secondary">Reference No.</Text>
                <div>REF123456789</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Text type="secondary">Payment Method</Text>
                <div>Bank Transfer</div>
              </div>
              <div>
                <Text type="secondary">Status</Text>
                <div>
                  <Tag color="success">Paid</Tag>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Vendor Information">
          <div className="space-y-4">
            <div>
              <Text type="secondary">Vendor Name</Text>
              <div>AutoParts Plus Ltd</div>
            </div>
            <div>
              <Text type="secondary">Contact</Text>
              <div>+1 234 567 890</div>
            </div>
            <div>
              <Text type="secondary">Email</Text>
              <div>vendor@autoparts.com</div>
            </div>
            <div>
              <Text type="secondary">Address</Text>
              <div>123 Parts Street, Auto City</div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default WarrantyAndClaimDetails;
