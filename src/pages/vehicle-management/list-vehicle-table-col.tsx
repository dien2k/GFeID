import { ModelsVehicle } from '@/@types/api.type';
import { RouteNames } from '@/routes/routes';
import { EyeOutlined } from '@ant-design/icons';
import { Button, type TableProps } from 'antd';
import { TFunction } from 'i18next';
export const columns = (
  navigate: (path: string) => void,
  t: TFunction,
): TableProps<ModelsVehicle>['columns'] => [
  {
    title: t('Vehicle ID'),
    dataIndex: 'id',
    key: 'id',
    width: '10%',
  },
  {
    title: t('Owner Name'),
    dataIndex: ['customer', 'name'],
    key: 'customerName',
    width: '20%',
  },
  {
    title: t('Owner Phone'),
    dataIndex: ['customer', 'phone'],
    key: 'customerPhone',
    width: '20%',
  },
  {
    title: t('Vehicle Model'),
    dataIndex: ['model', 'name'],
    key: 'modelName',
    width: '20%',
  },
  {
    title: t('License Plate'),
    dataIndex: ['license_plate'],
    key: 'licensePlate',
    width: '20%',
  },
  {
    title: t('Actions'),
    key: 'actions',
    render: (_, record) => (
      <Button
        size="large"
        type="primary"
        className="border-blue-500 bg-white text-blue-500"
        icon={<EyeOutlined />}
        onClick={() => navigate(RouteNames.VEHICLE_DETAILS(String(record.id)))}
      />
    ),
    width: '10%',
  },
];
