import CreateVehicleForm from '@/components/features/vehicle-form';
import { RouteNames } from '@/routes/routes';
import { Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const VehicleCreate = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <Breadcrumb
        className="mb-4"
        items={[
          {
            title: t('Vehicle Management'),
            className: 'text-green-700 font-medium',
            href: RouteNames.VEHICLE_MANAGEMENT,
          },
          { title: t('Create new {{label}}', { label: t('Vehicle') }) },
        ]}
      />
      <CreateVehicleForm
        onSuccess={() => {
          navigate(RouteNames.VEHICLE_MANAGEMENT);
        }}
      />
    </>
  );
};

export default VehicleCreate;
