import { Button, InputNumber, Select, TableProps } from 'antd';
import { PartData } from './part-selection';
import { DeleteOutlined } from '@ant-design/icons';

export const columns = (
  handleDelete: (key: string) => void,
  dataSource: PartData[],
): TableProps<PartData>['columns'] => [
  {
    title: 'Part Selection',
    dataIndex: 'part',
    key: 'part',
    width: '30%',
    render: (_, record) => (
      <Select
        placeholder="Select a part..."
        value={record.part || undefined}
        className="w-full"
        options={[
          { value: 'part1', label: 'Battery Pack' },
          { value: 'part2', label: 'Air Filter' },
          { value: 'part3', label: 'Oil Filter' },
        ]}
      />
    ),
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    width: '15%',
    render: (_, record) => (
      <InputNumber
        placeholder="Quantity"
        value={record.quantity}
        min={0}
        className="w-full"
      />
    ),
  },
  {
    title: 'Unit Price',
    dataIndex: 'unitPrice',
    key: 'unitPrice',
    width: '15%',
    render: (_, record) => (
      <InputNumber
        prefix="$"
        placeholder="Unit Price"
        value={record.unitPrice}
        min={0}
        step={0.01}
        className="w-full"
      />
    ),
  },
  {
    title: 'Promotion Price',
    dataIndex: 'promotionPrice',
    key: 'promotionPrice',
    width: '15%',
    render: (_, record) => (
      <InputNumber
        prefix="$"
        placeholder="Promotion Price"
        value={record.promotionPrice}
        min={0}
        step={0.01}
        className="w-full"
      />
    ),
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    width: '15%',
    render: (total) => `$${total.toFixed(2)}`,
  },
  {
    title: '',
    key: 'action',
    width: '10%',
    render: (_, record) =>
      dataSource.length > 1 ? (
        <Button
          type="text"
          icon={<DeleteOutlined />}
          onClick={() => handleDelete(record.key)}
          className="text-red-500 hover:text-red-700"
        />
      ) : null,
  },
];
