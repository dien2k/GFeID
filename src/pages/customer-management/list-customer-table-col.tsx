import { ModelsCustomer } from '@/@types/api.type';
import { RouteNames } from '@/routes/routes';
import { EyeOutlined } from '@ant-design/icons';
import { Button, Tooltip, type TableProps } from 'antd';
import dayjs from 'dayjs';
import { TFunction } from 'i18next';

export const columns = (
  navigate: (path: string) => void,
  t: TFunction,
): TableProps<ModelsCustomer>['columns'] => [
  {
    title: t('Customer ID'),
    dataIndex: 'id',
    key: 'id',
    width: '10%',
  },
  {
    title: t('Name'),
    dataIndex: 'name',
    key: 'name',
    width: '20%',
  },
  {
    title: t('Email'),
    dataIndex: 'email',
    key: 'email',
    width: '20%',
  },
  {
    title: t('Phone'),
    dataIndex: 'phone',
    key: 'phone',
    width: '20%',
  },
  {
    title: t('Created Date'),
    dataIndex: 'created_at',
    key: 'created_at',
    render: (created_at) => (
      <span>
        {created_at ? dayjs(created_at).format('DD/MM/YYYY HH:mm') : 'N/A'}
      </span>
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
          className="border-blue-500 bg-white text-blue-500"
          onClick={() => {
            navigate(RouteNames.CUSTOMER_DETAILS(String(record.id)));
          }}
          icon={<EyeOutlined />}
        />
      </Tooltip>
    ),
    width: '10%',
  },
];
