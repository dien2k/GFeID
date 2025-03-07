import { RouteNames } from '@/routes/routes';
import VendorServices from '@/services/vendor';
import { useRequest } from 'ahooks';
import { Breadcrumb } from 'antd';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import VendorForm from '@/components/features/vendor-form';
const VendorDetails = () => {
  const { id } = useParams();
  const { data } = useRequest(() => VendorServices.getVendorById(id!));
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumb
        className="mb-4"
        items={[
          {
            title: t('{{label}} Management', { label: t('Vendor') }),
            className: 'text-green-700 font-medium',
            href: RouteNames.VENDOR_MANAGEMENT,
          },
          { title: t('{{label}} details', { label: t('Vendor') }) },
        ]}
      />
      <VendorForm onSuccess={() => {}} initialData={data?.data} mode="edit" />
    </>
  );
};

export default VendorDetails;
