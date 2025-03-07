import CustomerForm from '@/components/features/customer-form';
import { RouteNames } from '@/routes/routes';
import CustomerServices from '@/services/customer';
import { useRequest } from 'ahooks';
import { Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const CustomerDetails = () => {
  const { id } = useParams();
  const { data } = useRequest(() => CustomerServices.getCustomerById(id!));
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: t('{{label}} Management', { label: 'Customer' }),
            href: RouteNames.CUSTOMER_MANAGEMENT,
          },
          { title: t('{{label}} Information', { label: 'Customer' }) },
        ]}
        className="mb-6"
      />
      <CustomerForm initialData={data?.data} mode="edit" />
    </>
  );
};

export default CustomerDetails;
