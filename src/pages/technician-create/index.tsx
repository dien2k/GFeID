import TechnicianForm from '@/components/features/technician-form';
import { RouteNames } from '@/routes/routes';
import { Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';

const TechnicianCreate = () => {
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumb
        className="mb-4"
        items={[
          {
            title: t('Technician and Workforce Management'),
            href: RouteNames.TECHNICIAN_AND_WORKFORCE_MANAGEMENT,
          },
          { title: t('Create new {{label}}', { label: t('Technician') }) },
        ]}
      />
      <TechnicianForm onSuccess={() => {}} />
    </>
  );
};

export default TechnicianCreate;
