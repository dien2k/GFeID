import { Breadcrumb } from 'antd';
import ServiceCenterForm from '@/components/features/service-center-form';
import { RouteNames } from '@/routes/routes';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ServiceCenterCreate = () => {
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
          {
            title: t('Create new {{label}}', { label: t('Service Center') }),
          },
        ]}
      />
      <ServiceCenterForm
        onSuccess={() => {
          navigate(RouteNames.SERVICE_CENTER_MANAGEMENT);
        }}
      />
    </>
  );
};

export default ServiceCenterCreate;
