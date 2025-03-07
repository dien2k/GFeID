import { useRequest } from 'ahooks';
import { Breadcrumb } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { RouteNames } from '@/routes/routes';
import ServiceCenterForm from '@/components/features/service-center-form';
import ServiceCenterServices from '@/services/service-center';
import { useTranslation } from 'react-i18next';

const ServiceCenterDetails = () => {
  const { id } = useParams();
  const { data } = useRequest(() =>
    ServiceCenterServices.getServiceCenter(id!),
  );
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumb
        className="mb-4"
        items={[
          {
            title: t('Service Center Management'),
            href: RouteNames.SERVICE_CENTER_MANAGEMENT,
          },
          { title: t('{{label}} details', { label: t('Service Center') }) },
        ]}
      />
      <ServiceCenterForm
        initialData={data?.data}
        onSuccess={() => {
          navigate(RouteNames.SERVICE_CENTER_MANAGEMENT);
        }}
        mode="edit"
      />
    </>
  );
};

export default ServiceCenterDetails;
