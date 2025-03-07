import { RouteNames } from '@/routes/routes';
import { Breadcrumb } from 'antd';
import CreateServiceForm from '@/components/features/service-form';
import { useNavigate, useParams } from 'react-router-dom';
import ServiceServices from '@/services/service';
import { useRequest } from 'ahooks';
import { useTranslation } from 'react-i18next';

const ServicesDetails = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id } = useParams();
  const { data } = useRequest(() => ServiceServices.getService(id!));

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
            title: t('{{label}} details', { label: t('Service') }),
          },
        ]}
      />
      <CreateServiceForm
        onSuccess={() => navigate(RouteNames.SERVICES_MANAGEMENT)}
        mode="edit"
        initialData={data?.data}
      />
    </div>
  );
};

export default ServicesDetails;
