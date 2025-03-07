import { RouteNames } from '@/routes/routes';
import { Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AdminForm from '@/components/features/admin-form';

const AdminCreate = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: t('{{label}} Management', { label: t('Admin') }),
            href: RouteNames.ADMIN_MANAGEMENT,
          },
          { title: t('Create new {{label}}', { label: t('Admin') }) },
        ]}
        className="mb-6"
      />
      <AdminForm onSuccess={() => navigate(RouteNames.ADMIN_MANAGEMENT)} />
    </>
  );
};

export default AdminCreate;
