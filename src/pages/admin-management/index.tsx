import { RouteNames } from '@/routes/routes';
import { UserAddOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { columns } from './list-admin-table-col';
import AdminUserServices from '@/services/admin-user';
import { useRequest } from 'ahooks';

export default function AdminManagement() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const getAdminList = useRequest(() => AdminUserServices.getAdminUsers(), {
    refreshDeps: [],
  });

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="m-0">
          {t('{{label}} Management', { label: t('Admin') })}
        </h1>
        <Button
          size="large"
          type="primary"
          icon={<UserAddOutlined />}
          onClick={() => navigate(RouteNames.ADMIN_CREATE)}
        >
          {t('Create new {{label}}', { label: t('Admin') })}
        </Button>
      </div>
      <Table
        columns={columns(navigate, t)}
        dataSource={
          getAdminList.data?.data?.items?.map((item) => ({
            ...item,
            key: item.id,
          })) || []
        }
        pagination={false}
        size="small"
        loading={getAdminList.loading}
      />
    </>
  );
}
