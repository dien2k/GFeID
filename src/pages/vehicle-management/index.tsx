import VehicleServices from '@/services/vehicle';
import { PlusOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Input, Table } from 'antd';
import { Button } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { columns } from './list-vehicle-table-col';
import AppPagination from '@/components/common/app-pagination';
import { RouteNames } from '@/routes/routes';
import { useTranslation } from 'react-i18next';
const VehicleList = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();

  const page = +(searchParams.get('page') || 1);
  const limit = +(searchParams.get('limit') || 10);
  const search = searchParams.get('search') || '';

  const getVehiclesAPI = useRequest(
    () => VehicleServices.getVehicles({ page, limit, search }),
    {
      refreshDeps: [page, limit, search],
    },
  );

  const handleSearch = (value: string) => {
    setSearchParams({ page: '1', limit: '10', search: value });
  };

  return (
    <>
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h1 className="m-0">
            {t('{{label}} Management', { label: t('Vehicle') })}
          </h1>
          <Button
            size="large"
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => navigate(RouteNames.VEHICLE_CREATE)}
          >
            {t('Create new {{label}}', { label: t('Vehicle') })}
          </Button>
        </div>
        <div className="mb-4 grid w-full grid-cols-3 gap-4">
          <Input.Search
            placeholder={t('Search...')}
            onSearch={handleSearch}
            defaultValue={search}
          />
        </div>

        <Table
          columns={columns(navigate, t)}
          dataSource={
            getVehiclesAPI.data?.data.items?.map((item) => ({
              ...item,
              key: item.id,
            })) || []
          }
          pagination={false}
          size="small"
          loading={getVehiclesAPI.loading}
          className="w-full rounded-lg bg-white shadow"
        />
        <AppPagination
          page={page}
          limit={limit}
          totalCount={getVehiclesAPI.data?.data.total_count || 0}
        />
      </div>
    </>
  );
};

export default VehicleList;
