import { ModelsTechnician } from '@/@types/api.type';
import { RouteNames } from '@/routes/routes';
import { EyeOutlined } from '@ant-design/icons';
import { Button, TableProps, Tag } from 'antd';
import dayjs from 'dayjs';
import { TFunction } from 'i18next';
export const columns = (
  navigate: (path: string) => void,
  t: TFunction,
): TableProps<ModelsTechnician>['columns'] => [
  {
    title: t('Technician ID'),
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
    title: t('Phone'),
    dataIndex: 'phone',
    key: 'phone',
    width: '10%',
  },
  {
    title: t('Email'),
    dataIndex: 'contact_email',
    key: 'contact_email',
    width: '10%',
  },
  {
    title: t('Hire Date'),
    dataIndex: 'hire_date',
    key: 'hire_date',
    render: (_, record) =>
      record.hire_date ? dayjs(record.hire_date).format('DD/MM/YYYY') : '-',
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
      <Button
        type="primary"
        icon={<EyeOutlined />}
        className="border-blue-500 bg-white text-blue-500"
        onClick={() =>
          navigate(RouteNames.TECHNICIAN_DETAILS(String(record.id)))
        }
      />
    ),
    width: '10%',
    fixed: 'right' as const,
  },
];
