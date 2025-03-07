import { EyeOutlined } from '@ant-design/icons';
import { Button, Tag, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { ModelsService } from '../../@types/api.type';
import { RouteNames } from '@/routes/routes';
import { TFunction } from 'i18next';

export const columns = (
  navigate: (path: string) => void,
  t: TFunction,
): ColumnsType<ModelsService> => [
  {
    title: t('Service Name'),
    dataIndex: 'name',
    key: 'name',
    className: 'font-medium',
    width: '10%',
    fixed: 'left' as const,
  },
  {
    title: t('Service Code'),
    dataIndex: 'code',
    key: 'code',
    width: '10%',
    fixed: 'left' as const,
  },
  {
    title: t('Service Type'),
    dataIndex: 'type',
    key: 'type',
    width: '10%',
  },
  {
    title: t('Status'),
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => {
      const color =
        status === 'Critical'
          ? 'error'
          : status === 'Low Stock'
            ? 'warning'
            : 'success';
      return <Tag color={color}>{status}</Tag>;
    },
    width: '10%',
  },
  {
    title: t('Actions'),
    key: 'actions',
    render: (_, record) => (
      <Tooltip title={t('Details')}>
        <Button
          type="primary"
          size="large"
          icon={<EyeOutlined />}
          className="border-blue-500 bg-white text-blue-500"
          onClick={() => {
            navigate(RouteNames.SERVICES_DETAILS(String(record.id)));
          }}
        />
      </Tooltip>
    ),
    width: '10%',
    fixed: 'right' as const,
  },
];
