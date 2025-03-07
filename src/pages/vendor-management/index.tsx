import AppPagination from '@/components/common/app-pagination';
import { PlusOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Button, Input, Table } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { columns } from './list-vendor-table-col';
import { RouteNames } from '@/routes/routes';
import VendorServices from '@/services/vendor';
import { useTranslation } from 'react-i18next';
const VendorManagement = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const page = +(searchParams.get('page') || 1);
  const limit = +(searchParams.get('limit') || 10);

  const getVendorList = useRequest(
    () => VendorServices.getVendors({ page, per_page: limit }),
    {
      refreshDeps: [page, limit],
    },
  );

  return (
    <>
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h1 className="m-0">
            {t('{{label}} Management', { label: t('Vendor') })}
          </h1>
          <Button
            size="large"
            type="primary"
            onClick={() => navigate(RouteNames.VENDOR_CREATE)}
            icon={<PlusOutlined />}
          >
            {t('Create new {{label}}', { label: t('Vendor') })}
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
            getVendorList?.data?.data?.items?.map((item) => ({
              ...item,
              key: item.id,
            })) || []
          }
          pagination={false}
          loading={getVendorList.loading}
          className="w-full rounded-lg bg-white shadow"
        />
        <AppPagination
          page={page}
          limit={limit}
          totalCount={getVendorList?.data?.data?.total_count || 0}
        />
      </div>
    </>
  );
};

export default VendorManagement;
