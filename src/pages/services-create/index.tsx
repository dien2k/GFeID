import { RouteNames } from '@/routes/routes';
import { Breadcrumb } from 'antd';
import CreateServiceForm from '@/components/features/service-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServicesCreate = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div>
      <Breadcrumb
        className="mb-4"
        items={[
          {
            title: t('{{label}} Management', { label: t('Service') }),
            href: RouteNames.SERVICES_MANAGEMENT,
          },
          {
            title: t('Create new {{label}}', { label: t('Service') }),
          },
        ]}
      />
      <CreateServiceForm
        onSuccess={() => navigate(RouteNames.SERVICES_MANAGEMENT)}
      />
    </div>
  );
};

export default ServicesCreate;
