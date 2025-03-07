import { ModelsVendor } from '@/@types/api.type';
import { RouteNames } from '@/routes/routes';
import { EyeOutlined } from '@ant-design/icons';
import { Button, TableProps } from 'antd';
import dayjs from 'dayjs';
import { TFunction } from 'i18next';

export const columns = (
  navigate: (path: string) => void,
  t: TFunction,
): TableProps<ModelsVendor>['columns'] => [
  {
    title: t('Vendor ID'),
    dataIndex: 'id',
    key: 'id',
    width: '10%',
  },
  {
    title: t('Vendor Name'),
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
    title: t('Contact Person'),
    dataIndex: 'contact_person',
    key: 'contact_person',
    width: '10%',
  },
  {
    title: t('Email'),
    dataIndex: 'email',
    width: '10%',
  },
  {
    title: t('Address'),
    dataIndex: 'address',
    key: 'address',
    width: '10%',
  },
  {
    title: t('Hire Date'),
    dataIndex: 'hire_date',
    key: 'hire_date',
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
    title: t('Actions'),
    key: 'action',
    render: (_, record) => (
      <Button
        type="primary"
        icon={<EyeOutlined />}
        className="border-blue-500 bg-white text-blue-500"
        onClick={() => navigate(RouteNames.VENDOR_DETAILS(String(record.id)))}
      />
    ),
    width: '10%',
    fixed: 'right' as const,
  },
];
