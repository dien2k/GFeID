import { Table, Card, Descriptions } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface ServiceItem {
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

const ServiceSummary = () => {
  const columns: ColumnsType<ServiceItem> = [
    { title: 'No.', dataIndex: 'no', key: 'no', width: 60 },
    { title: 'Code', dataIndex: 'code', key: 'code', width: 100 },
    { title: 'Item/Service Name', dataIndex: 'name', key: 'name' },
    { title: 'Unit', dataIndex: 'unit', key: 'unit', width: 100 },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      width: 100,
      align: 'right',
    },
    {
      title: 'Unit Price (VND)',
      dataIndex: 'unitPrice',
      key: 'unitPrice',
      width: 150,
      align: 'right',
      render: (value: number) => value.toLocaleString(),
    },
    {
      title: 'Amount (VND)',
      dataIndex: 'amount',
      key: 'amount',
      width: 150,
      align: 'right',
      render: (value: number) => value.toLocaleString(),
    },
    { title: 'Note', dataIndex: 'note', key: 'note', width: 150 },
  ];

  const maintenanceData: ServiceItem[] = [
    {
      key: '1',
      no: 1,
      code: 'BDTBU',
      name: 'Full LH/LY Maintenance',
      unit: 'Service',
      quantity: 1.0,
      unitPrice: 340000,
      amount: 340000,
    },
    {
      key: '2',
      no: 2,
      code: 'VSKFU',
      name: 'Clean fuel injector with LH/LY Maintenance',
      unit: 'Service',
      quantity: 1.0,
      unitPrice: 140000,
      amount: 140000,
    },
  ];

  const partsData: ServiceItem[] = [
    {
      key: '1',
      no: 1,
      code: '293588',
      name: '10W Scooter Oil (1.2 lit)',
      unit: 'Box',
      quantity: 1.0,
      unitPrice: 215000,
      amount: 215000,
    },
    {
      key: '2',
      no: 2,
      code: 'DAUSG3',
      name: 'Gear Oil (3 tubes)',
      unit: 'Set',
      quantity: 1.0,
      unitPrice: 155000,
      amount: 155000,
    },
    {
      key: '14',
      no: 14,
      code: 'TC',
      name: 'Labor Cost',
      unit: '',
      quantity: 0,
      unitPrice: 0,
      amount: 770000,
    },
  ];

  const warrantyData: ServiceItem[] = [
    {
      key: '1',
      no: 1,
      code: 'PTR4',
      name: 'Cleaning Materials for Maintenance',
      unit: 'Service',
      quantity: 1.0,
      unitPrice: 30000,
      amount: 30000,
    },
  ];

  const totalAmount = 3525000;

  return (
    <div className="max-w-7xl space-y-6">
      <Card title="Service Summary" bordered={false}>
        <div className="space-y-6">
          <div>
            <h3 className="mb-4 font-medium">
              I. Maintenance, Repair, and Service
            </h3>
            <Table
              columns={columns}
              dataSource={maintenanceData}
              pagination={false}
              size="small"
              scroll={{ x: 1200 }}
            />
          </div>

          <div>
            <h3 className="mb-4 font-medium">II. Parts Replacement</h3>
            <Table
              columns={columns}
              dataSource={partsData}
              pagination={false}
              size="small"
              scroll={{ x: 1200 }}
            />
          </div>

          <div>
            <h3 className="mb-4 font-medium">III. Warranty Coverage</h3>
            <Table
              columns={columns}
              dataSource={warrantyData}
              pagination={false}
              size="small"
              scroll={{ x: 1200 }}
            />
          </div>
          <div className="mt-4 flex justify-end">
            <Descriptions
              column={1}
              items={[
                {
                  key: 'subtotal',
                  label: 'Subtotal',
                  children: `${totalAmount.toLocaleString()} VND`,
                },
                {
                  key: 'serviceFee',
                  label: 'Service Fee',
                  children: '0 VND',
                },
                {
                  key: 'discount',
                  label: 'Discount',
                  children: '0 VND',
                },
                {
                  key: 'total',
                  label: 'Total',
                  children: (
                    <span className="font-bold">
                      {totalAmount.toLocaleString()} VND
                    </span>
                  ),
                },
                {
                  key: 'totalInWords',
                  children: (
                    <span className="text-sm text-gray-500">
                      (Four million five hundred and seventy thousand VND)
                    </span>
                  ),
                },
              ]}
              className="max-w-md"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ServiceSummary;
