import TechnicianForm from '@/components/features/technician-form';
import { RouteNames } from '@/routes/routes';
import TechnicianServices from '@/services/technician';
import { useRequest } from 'ahooks';
import { Breadcrumb } from 'antd';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TechnicianDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { data } = useRequest(() => TechnicianServices.getTechnicianById(id!));

  return (
    <>
      <Breadcrumb
        className="mb-4"
        items={[
          {
            title: t('Technician and Workforce Management'),
            href: RouteNames.TECHNICIAN_AND_WORKFORCE_MANAGEMENT,
          },
          { title: t('{{label}} details', { label: t('Technician') }) },
        ]}
      />
      <TechnicianForm
        onSuccess={() => {}}
        mode="edit"
        initialData={data?.data}
      />
    </>
  );
};

export default TechnicianDetails;
