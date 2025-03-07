import { Breadcrumb, Button, Card, Table } from 'antd';
import { PrinterOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { columns } from './list-part-details-table-col';
import { RouteNames } from '@/routes/routes';

interface OrderItem {
  key: string;
  oemPartName: string;
  partName: string;
  quantity: number;
  unitPrice: number;
  promotionPrice: number;
  total: number;
}

const OrderDetails = () => {
  const orderItems: OrderItem[] = [
    {
      key: '1',
      oemPartName: 'OIL-5W30-SYN',
      partName: '5W-30 Synthetic Oil',
      quantity: 15,
      unitPrice: 25.99,
      promotionPrice: 22.99,
      total: 344.85,
    },
    {
      key: '2',
      oemPartName: 'FLT-OIL-A1',
      partName: 'Oil Filter Type A',
      quantity: 20,
      unitPrice: 42.5,
      promotionPrice: 38.25,
      total: 765.0,
    },
    {
      key: '3',
      oemPartName: 'BRK-PAD-001',
      partName: 'Brake Pad Set',
      quantity: 10,
      unitPrice: 65.0,
      promotionPrice: 58.5,
      total: 585.0,
    },
  ];

  const totalAmount = orderItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <>
      <Breadcrumb
        items={[
          { title: 'Order Management', href: RouteNames.ORDER_MANAGEMENT },
          { title: 'Order Details' },
        ]}
        className="mb-6"
      />

      <div className="mb-6 flex items-center justify-between">
        <h1 className="m-0">Order Details</h1>
        <div className="space-x-2">
          <Button size="large" icon={<PrinterOutlined />}>
            Print
          </Button>
          <Button
            type="primary"
            size="large"
            icon={<EditOutlined />}
            className="bg-blue-500"
          >
            Edit Order
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="text-md text-gray-500">PO Number</p>
            <div>PO-2024-001</div>
          </div>
          <div>
            <p className="text-md text-gray-500">Vendor</p>
            <div>EV Parts Co.</div>
          </div>
          <div>
            <p className="text-md text-gray-500">Order Quantity</p>
            <div>45 items</div>
          </div>
        </div>
      </Card>

      <Card className="mb-6">
        <h2 className="mb-4">Order Items</h2>
        <Table
          columns={columns}
          dataSource={orderItems}
          pagination={false}
          size="small"
          summary={() => (
            <Table.Summary>
              <Table.Summary.Row>
                <Table.Summary.Cell
                  index={0}
                  colSpan={5}
                  className="text-right font-medium"
                >
                  Total:
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1} className="font-medium">
                  ${totalAmount.toFixed(2)}
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
      </Card>

      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="m-0">Notes</h2>
          <Button type="link" icon={<PlusOutlined />}>
            Add Note
          </Button>
        </div>
        <div className="space-y-2">
          <div className="text-sm text-gray-600">Added by John Doe</div>
          <div>Special promotion applied to all items in this order.</div>
          <div className="text-sm text-gray-500">Dec 15, 2024</div>
        </div>
      </Card>
    </>
  );
};

export default OrderDetails;
