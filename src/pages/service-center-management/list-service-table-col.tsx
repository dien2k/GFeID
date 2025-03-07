import { ModelsServiceCenter } from '@/@types/api.type';
import { RouteNames } from '@/routes/routes';
import { EyeOutlined } from '@ant-design/icons';
import { Button, TableProps, Tag, Tooltip } from 'antd';
import dayjs from 'dayjs';
import { TFunction } from 'i18next';
export const columns = (
  navigate: (path: string) => void,
  t: TFunction,
): TableProps<ModelsServiceCenter>['columns'] => [
  {
    title: t('Service Center ID'),
    dataIndex: 'id',
    key: 'id',
    width: '10%',
  },
  {
    title: t('Name'),
    dataIndex: 'name',
    key: 'name',
    width: '10%',
  },
  {
    title: t('Address'),
    dataIndex: 'address',
    key: 'address',
    render: (_, record) => (
      <span>
        {[
          record.address?.trim(),
          record.city_or_province?.trim(),
          record.district?.trim(),
          record.ward?.trim(),
        ]
          .filter((field): field is string => Boolean(field))
          .join(', ')}
      </span>
    ),
    width: '10%',
  },
  {
    title: t('Created Date'),
    dataIndex: 'created_at',
    key: 'created_at',
    render: (_, record) =>
      record.created_at ? dayjs(record.created_at).format('DD/MM/YYYY') : '-',
    width: '10%',
  },
  {
    title: t('Updated At'),
    dataIndex: 'updated_at',
    key: 'updated_at',
    render: (_, record) =>
      record.updated_at ? dayjs(record.updated_at).format('DD/MM/YYYY') : '-',
    width: '10%',
  },
  {
    title: t('Status'),
    dataIndex: 'status',
    key: 'status',
    render: (_, record) => (
      <Tag color={record.status === 'Active' ? 'green' : 'red'}>
        {record.status}
      </Tag>
    ),
    width: '10%',
  },
  {
    title: t('Actions'),
    key: 'action',
    render: (_, record) => (
      <Tooltip title={t('Details')}>
        <Button
          type="primary"
          icon={<EyeOutlined />}
          className="border-blue-500 bg-white text-blue-500"
          onClick={() =>
            navigate(RouteNames.SERVICE_CENTER_DETAILS(String(record.id)))
          }
        />
      </Tooltip>
    ),
    width: '10%',
    fixed: 'right' as const,
  },
];
