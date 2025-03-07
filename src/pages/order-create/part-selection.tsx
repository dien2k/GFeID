import { useState } from 'react';
import { Table, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { columns } from './list-part-table-col';

export interface PartData {
  key: string;
  part: string;
  quantity: number;
  unitPrice: number;
  promotionPrice: number;
  total: number;
}

export default function PartSelectionTable() {
  const [dataSource, setDataSource] = useState<PartData[]>([
    {
      key: '1',
      part: '',
      quantity: 0,
      unitPrice: 0,
      promotionPrice: 0,
      total: 0,
    },
  ]);

  const handleAdd = () => {
    const newKey = (dataSource.length + 1).toString();
    setDataSource([
      ...dataSource,
      {
        key: newKey,
        part: '',
        quantity: 0,
        unitPrice: 0,
        promotionPrice: 0,
        total: 0,
      },
    ]);
  };

  const handleDelete = (key: string) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
  };

  return (
    <div className="space-y-4">
      <div className="text-lg font-medium">Part Selection</div>

      <Table
        dataSource={dataSource}
        columns={columns(handleDelete, dataSource)}
        pagination={false}
        size="small"
        className="rounded-lg border"
      />

      <Button
        type="dashed"
        onClick={handleAdd}
        className="border-blue-500 bg-white text-blue-500"
        icon={<PlusOutlined />}
      >
        Add Another Part
      </Button>
    </div>
  );
}
