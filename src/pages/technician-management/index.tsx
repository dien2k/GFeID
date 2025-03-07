import AppPagination from '@/components/common/app-pagination';
import TechnicianServices from '@/services/technician';
import { PlusOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Button, Input, Table } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { columns } from './list-technician-table-col';
import { RouteNames } from '@/routes/routes';
import { useTranslation } from 'react-i18next';

const TechnicianAndWorkforceManagement = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const page = +(searchParams.get('page') || 1);
  const limit = +(searchParams.get('limit') || 10);

  const getTechnicianList = useRequest(
    () => TechnicianServices.getTechnicians({ page, limit }),
    {
      refreshDeps: [page, limit],
    },
  );

  return (
    <>
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h1 className="m-0">{t('Technician and Workforce Management')}</h1>
          <Button
            size="large"
            type="primary"
            onClick={() => navigate(RouteNames.TECHNICIAN_CREATE)}
            icon={<PlusOutlined />}
          >
            {t('Create new {{label}}', { label: t('Technician') })}
          </Button>
        </div>
        <div className="mb-4 grid w-full grid-cols-3 gap-4">
          <Input.Search
            placeholder={t('Search...')}
            // onSearch={handleSearch} TODO: add search
            // defaultValue={searchValue}
          />
        </div>
        <Table
          columns={columns(navigate, t)}
          dataSource={
            getTechnicianList?.data?.data?.items?.map((item) => ({
              ...item,
              key: item.id,
            })) || []
          }
          pagination={false}
          loading={getTechnicianList.loading}
          className="w-full rounded-lg bg-white shadow"
        />
        <AppPagination
          page={page}
          limit={limit}
          totalCount={getTechnicianList?.data?.data?.total_count || 0}
        />
      </div>
    </>
  );
};

export default TechnicianAndWorkforceManagement;
