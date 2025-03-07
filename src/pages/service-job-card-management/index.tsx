import AppPagination from '@/components/common/app-pagination';
import AppSelect from '@/components/common/app-select';
import { RouteNames } from '@/routes/routes';
import VehicleAndServiceServices from '@/services/service-job-card';
import { PlusOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Button, Input, Table } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { columns } from './list-service-job-card-table-col';
import { useTranslation } from 'react-i18next';

const VehicleAndServiceManagement = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [searchParams] = useSearchParams();

  const page = +(searchParams.get('page') || 1);
  const limit = +(searchParams.get('limit') || 10);

  const getJobCardList = useRequest(
    () => VehicleAndServiceServices.getServiceJobCard({ page, limit }),
    {
      refreshDeps: [page, limit],
    },
  );

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="m-0">{t('Vehicle and Service Management')}</h1>
        <Button
          size="large"
          type="primary"
          onClick={() => {
            navigate(RouteNames.SERVICE_JOB_CARD_CREATE);
          }}
          icon={<PlusOutlined />}
        >
          {t('Create new {{label}}', { label: t('Service Job Card') })}
        </Button>
      </div>

      <div className="mb-6 flex gap-4">
        <Input.Search placeholder={t('Search...')} className="w-[18.75rem]" />
        <AppSelect
          defaultValue="all"
          options={[
            { value: 'all', label: t('All {{label}}', { label: t('Status') }) },
            { value: 'open', label: t('Open') },
            { value: 'closed', label: t('Closed') },
          ]}
        />
        <AppSelect
          defaultValue="all"
          options={[
            {
              value: 'all',
              label: t('All {{label}}', { label: t('Technician') }),
            },
          ]}
        />
      </div>

      <Table
        columns={columns(navigate, t)}
        dataSource={getJobCardList.data?.data.items?.map((items) => {
          return {
            ...items,
            key: items.id,
          };
        })}
        pagination={false}
        scroll={{ x: 1000 }}
        size="small"
        loading={getJobCardList.loading}
        className="w-full rounded-lg bg-white shadow"
      />
      <AppPagination
        page={page}
        limit={limit}
        totalCount={getJobCardList.data?.data.total_count || 0}
      />
    </>
  );
};

export default VehicleAndServiceManagement;
