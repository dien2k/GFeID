import PartForm from '@/components/features/part-form';
import { RouteNames } from '@/routes/routes';
import PartServices from '@/services/part';
import { useRequest } from 'ahooks';
import { Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const PartDetails = () => {
  const { id } = useParams();

  const { data } = useRequest(() => PartServices.getPartById(id as string));
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
          { title: t('{{label}} details', { label: t('Part') }) },
        ]}
      />
      <PartForm mode="edit" onSuccess={() => {}} initialData={data?.data} />
    </>
  );
};

export default PartDetails;
