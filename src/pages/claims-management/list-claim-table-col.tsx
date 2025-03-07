import { ModelsWarrantyClaim } from '@/@types/api.type';
import { RouteNames } from '@/routes/routes';
import { EyeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import numeral from 'numeral';

export const columns = (
  navigate: (path: string) => void,
): ColumnsType<ModelsWarrantyClaim> => [
  {
    title: 'Claim ID',
    dataIndex: 'id',
    key: 'id',
    width: '10%',
    fixed: 'left' as const,
  },
  {
    title: 'Service Job Card ID',
    dataIndex: 'service_job_card_id',
    key: 'service_job_card_id',
    width: '10%',
    fixed: 'left' as const,
  },
  {
    title: 'Customer Name',
    dataIndex: 'service_job_card.customer.name',
    key: 'customerName',
    width: '10%',
    fixed: 'left' as const,
  },
  {
    title: 'Phone Number',
    dataIndex: 'service_job_card.customer.phone_number',
    key: 'phoneNumber',
    width: '10%',
  },
  {
    title: 'License Plate',
    dataIndex: 'service_job_card.vehicle.license_plate',
    key: 'licensePlate',
    width: '10%',
  },
  {
    title: 'Vendor Name',
    dataIndex: 'service_job_card.vendor.name',
    key: 'vendorName',
    width: '10%',
  },
  {
    title: 'Claim Date',
    dataIndex: 'claim_date',
    key: 'claim_date',
    width: '10%',
  },
  {
    title: 'Total Cost',
    dataIndex: 'items.total_cost',
    key: 'total_cost',
    render: (value: number) => `$${numeral(value).format('0,0')}`,
    width: '10%',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Button
        type="link"
        className="border-blue-500 bg-white text-blue-500"
        icon={<EyeOutlined className="h-4 w-4" />}
        onClick={() => navigate(RouteNames.CLAIMS_DETAILS(String(record.id)))}
      />
    ),
    width: '10%',
    fixed: 'right' as const,
  },
];
