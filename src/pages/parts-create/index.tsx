import PartForm from '@/components/features/part-form';
import { RouteNames } from '@/routes/routes';
import { Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';

const PartCreate = () => {
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumb
        className="mb-4"
        items={[
          {
            title: t('{{label}} Management', { label: t('Part') }),
            href: RouteNames.PARTS_MANAGEMENT,
          },
          { title: t('Create new {{label}}', { label: t('Part') }) },
        ]}
      />
      <PartForm onSuccess={() => {}} />
    </>
  );
};

export default PartCreate;
