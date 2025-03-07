import CustomerForm from '@/components/features/customer-form';
import { RouteNames } from '@/routes/routes';
import { Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const CustomerCreate = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: t('{{label}} Management', { label: 'Customer' }),
            href: RouteNames.CUSTOMER_MANAGEMENT,
          },
          { title: t('Create new {{label}}', { label: 'Customer' }) },
        ]}
        className="mb-6"
      />
      <CustomerForm
        onSuccess={() => navigate(RouteNames.CUSTOMER_MANAGEMENT)}
      />
    </>
  );
};

export default CustomerCreate;
