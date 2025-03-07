import { EyeOutlined } from '@ant-design/icons';
import { Button, Tag, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { ModelsPart, ModelsVendor } from '../../@types/api.type';
import { RouteNames } from '@/routes/routes';
import { TFunction } from 'i18next';
export const columns = (
  navigate: (path: string) => void,
  t: TFunction,
): ColumnsType<ModelsPart> => [
  {
    title: t('OEM Part Number'),
    dataIndex: 'code',
    key: 'code',
    className: 'font-medium',

    width: '10%',
    fixed: 'left' as const,
  },
  {
    title: t('Part Name'),
    dataIndex: 'name',
    key: 'name',
    width: '10%',
    fixed: 'left' as const,
  },

  {
    title: t('Category'),
    dataIndex: 'category',
    key: 'category',
    width: '10%',
  },
  {
    title: t('Stock Level'),
    dataIndex: 'stock_level',
    key: 'stock_level',
    render: (text) => `${text} units`,
    width: '10%',
  },
  {
    title: t('Reorder Point'),
    dataIndex: 'reorder_point',
    key: 'reorder_point',
    render: (text) => `${text} units`,
    width: '10%',
  },
  {
    title: t('Vendor'),
    dataIndex: 'vendor',
    key: 'vendor',
    width: '10%',
    render: (vendor: ModelsVendor) => vendor.name,
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
            navigate(RouteNames.PARTS_DETAILS(String(record.id)));
          }}
        />
      </Tooltip>
    ),
    width: '10%',
    fixed: 'right' as const,
  },
];
