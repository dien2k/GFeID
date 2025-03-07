// import CreateVendorForm from '@/components/features/vendor-form';
import VendorForm from '@/components/features/vendor-form';
import { RouteNames } from '@/routes/routes';
import { Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const VendorCreate = () => {
  const navigate = useNavigate();
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
          { title: t('Create new {{label}}', { label: t('Vendor') }) },
        ]}
      />
      <VendorForm
        onSuccess={() => {
          navigate(RouteNames.VENDOR_MANAGEMENT);
        }}
      />
    </>
  );
};

export default VendorCreate;
