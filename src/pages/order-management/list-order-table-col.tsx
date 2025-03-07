import { RouteNames } from '@/routes/routes';
import { EyeOutlined } from '@ant-design/icons';
import { Button, TableProps } from 'antd';

interface Order {
  id: number;
  poNumber: string;
  vendor: string;
  orderQty: number;
  totalInvoice: number;
}

export const columns = (
  navigate: (path: string) => void,
): TableProps<Order>['columns'] => [
  {
    title: 'PO Number',
    dataIndex: 'poNumber',
    key: 'poNumber',
  },
  {
    title: 'Vendor',
    dataIndex: 'vendor',
    key: 'vendor',
  },
  {
    title: 'Order Qty',
    dataIndex: 'orderQty',
    key: 'orderQty',
  },
  {
    title: 'Total Invoice',
    dataIndex: 'totalInvoice',
    key: 'totalInvoice',
    render: (value) => `$${value.toFixed(2)}`,
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (_, record) => (
      <Button
        type="primary"
        icon={<EyeOutlined />}
        className="border-blue-500 bg-white text-blue-500"
        onClick={() => navigate(RouteNames.ORDER_DETAILS(String(record.id)))}
      />
    ),
  },
];
