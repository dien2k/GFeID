import CreateVehicleForm from '@/components/features/vehicle-form';
import { RouteNames } from '@/routes/routes';
import VehicleServices from '@/services/vehicle';
import { useRequest } from 'ahooks';
import { Breadcrumb } from 'antd';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const VehicleDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { data } = useRequest(() => VehicleServices.getVehicleById(id!));
  return (
    <>
      <Breadcrumb
        className="mb-4"
        items={[
          {
            title: t('{{label}} Management', { label: t('Vehicle') }),
            className: 'text-green-700 font-medium',
            href: RouteNames.VEHICLE_MANAGEMENT,
          },
          { title: t('{{label}} details', { label: t('Vehicle') }) },
        ]}
      />
      <CreateVehicleForm
        onSuccess={() => {}}
        initialData={data?.data}
        mode="edit"
      />
    </>
  );
};

export default VehicleDetails;
