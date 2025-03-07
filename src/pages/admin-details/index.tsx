import { RouteNames } from '@/routes/routes';
import { Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import AdminForm from '@/components/features/admin-form';
import { useRequest } from 'ahooks';
import AdminUserServices from '@/services/admin-user';

const AdminDetails = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useRequest(() => AdminUserServices.getAdminUser(id!));

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: t('{{label}} Management', { label: t('Admin') }),
            href: RouteNames.ADMIN_MANAGEMENT,
          },
          { title: t('{{label}} details', { label: t('Admin') }) },
        ]}
        className="mb-6"
      />
      <AdminForm
        onSuccess={() => navigate(RouteNames.ADMIN_MANAGEMENT)}
        initialData={data?.data}
        mode="edit"
      />
    </>
  );
};

export default AdminDetails;
