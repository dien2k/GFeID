import { ColumnsType } from 'antd/es/table';
import { ServiceItem } from '.';
import numeral from 'numeral';

export const columns: ColumnsType<ServiceItem> = [
  { title: 'No.', dataIndex: 'no', width: '10%' },
  { title: 'Code', dataIndex: 'code', width: '10%' },
  { title: 'Item/Service Name', dataIndex: 'name', width: '25%' },
  { title: 'Unit', dataIndex: 'unit', width: '8%' },
  { title: 'Quantity', dataIndex: 'quantity', width: '8%' },
  {
    title: 'Unit Price (VND)',
    dataIndex: 'unitPrice',
    width: '12%',
    render: (value: number) => numeral(value).format('0,0'),
  },
  {
    title: 'Amount (VND)',
    dataIndex: 'amount',
    width: '12%',
    render: (value: number) => numeral(value).format('0,0'),
  },
  { title: 'Note', dataIndex: 'note' },
];
