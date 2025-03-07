import { TableProps } from 'antd';
import numeral from 'numeral';

interface OrderItem {
  key: string;
  oemPartName: string;
  partName: string;
  quantity: number;
  unitPrice: number;
  promotionPrice: number;
  total: number;
}

export const columns: TableProps<OrderItem>['columns'] = [
  {
    title: 'OEM Part Name',
    dataIndex: 'oemPartName',
    key: 'oemPartName',
  },
  {
    title: 'Part Name',
    dataIndex: 'partName',
    key: 'partName',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Unit Price',
    dataIndex: 'unitPrice',
    key: 'unitPrice',
    render: (price: number) => <span>${numeral(price).format('0,0')}</span>,
  },
  {
    title: 'Promotion Price',
    dataIndex: 'promotionPrice',
    key: 'promotionPrice',
    render: (price: number) => <span>${numeral(price).format('0,0')}</span>,
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    render: (total: number) => <span>${numeral(total).format('0,0')}</span>,
  },
];
