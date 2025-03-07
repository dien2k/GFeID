import type { TableProps } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { RouteNames } from '@/routes/routes';
import { EntitiesServiceJobCardListItemResponse } from '@/@types/api.type';
import dayjs from 'dayjs';
import numeral from 'numeral';
import { TFunction } from 'i18next';
export const columns = (
  navigate: (path: string) => void,
  t: TFunction,
): TableProps<EntitiesServiceJobCardListItemResponse>['columns'] => [
  {
    title: t('Service Job Card ID'),
    dataIndex: 'id',
    key: 'id',
    className: 'font-medium',
    width: '15%',
    fixed: 'left' as const,
  },
  {
    title: t('Customer Name'),
    dataIndex: 'customer_name',
    key: 'customer_name',
    width: '16%',
    fixed: 'left' as const,
  },
  {
    title: t('Phone'),
    dataIndex: 'phone_number',
    key: 'phone_number',
    width: '13%',
  },
  {
    title: t('Vehicle'),
    dataIndex: 'vehicle',
    key: 'vehicle',
    width: '15%',
  },
  {
    title: t('License Plate'),
    dataIndex: 'license_plate',
    key: 'license_plate',
    width: '20%',
  },
  {
    title: t('Status'),
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <span
        className={`rounded-full px-2 py-1 text-xs font-medium ${
          status === 'Open'
            ? 'bg-green-100 text-green-700'
            : 'bg-gray-100 text-gray-700'
        }`}
      >
        {status}
      </span>
    ),
    width: '14%',
  },
  {
    title: t('Completion Time'),
    dataIndex: 'completion_time',
    key: 'completion_time',
    render: (completion_time: string) => (
      <span>
        {completion_time
          ? dayjs(completion_time).format('DD/MM/YYYY HH:mm')
          : 'N/A'}
      </span>
    ),
    width: '18%',
  },
  {
    title: t('Technician'),
    dataIndex: 'technician',
    key: 'technician',
    width: '17%',
  },
  {
    title: t('Total Amount'),
    dataIndex: 'total_amount',
    key: 'total_amount',
    render: (total_amount: number) => (
      <span>${numeral(total_amount).format('0,0')}</span>
    ),
    width: '20%',
  },
  {
    title: t('Actions'),
    key: 'actions',
    render: (_, record) => (
      <Tooltip title={t('Details')}>
        <Button
          size="large"
          type="primary"
          onClick={() => {
            navigate(RouteNames.SERVICE_JOB_CARD_DETAILS(String(record.id)));
          }}
          icon={<EyeOutlined />}
          className="border-blue-500 bg-white text-blue-500"
        />
      </Tooltip>
    ),
    width: '20%',
    fixed: 'right' as const,
  },
];
