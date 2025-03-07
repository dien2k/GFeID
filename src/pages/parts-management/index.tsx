import { Button, Select, Table } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { columns } from './list-parts-table-col';
import AppPagination from '@/components/common/app-pagination';
import { Input } from 'antd';
import { ExportOutlined, ImportOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import PartServices from '@/services/part';
import { useTranslation } from 'react-i18next';
const Parts = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const page = Number(searchParams.get('page') || 1);
  const limit = Number(searchParams.get('limit') || 10);

  const { data, loading } = useRequest(
    () => PartServices.getParts({ page, per_page: limit }),
    {
      refreshDeps: [page, limit],
    },
  );

  return (
    <>
      <div className="mb-6 grid grid-cols-5 gap-4">
        <Input.Search placeholder={t('Search...')} />
        <Select
          defaultValue="all"
          options={[
            {
              value: 'all',
              label: t('All {{label}}', { label: t('Category') }),
            },
          ]}
        />
        <Select
          defaultValue="all"
          options={[
            { value: 'all', label: t('All {{label}}', { label: t('Status') }) },
            { value: 'in_stock', label: t('In Stock') },
            { value: 'low_stock', label: t('Low Stock') },
            { value: 'critical', label: t('Critical') },
          ]}
        />
        <Select
          defaultValue="all"
          options={[
            {
              value: 'all',
              label: t('All {{label}}', { label: t('Vendor') }),
            },
          ]}
        />
        <div className="flex">
          <Button
            icon={<ImportOutlined />}
            className="flex w-1/2 items-center rounded-r-none border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Import
          </Button>
          <Button
            icon={<ExportOutlined />}
            className="flex w-1/2 items-center rounded-l-none border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Export
          </Button>
        </div>
      </div>
      <Table
        columns={columns(navigate, t)}
        dataSource={
          data?.data?.items?.map((item) => ({
            ...item,
            key: item.id,
          })) || []
        }
        className="rounded-lg bg-white shadow"
        pagination={false}
        size="small"
        loading={loading}
        scroll={{ x: 1000 }}
      />
      <AppPagination
        page={page}
        limit={limit}
        totalCount={data?.data?.total_count || 0}
      />
    </>
  );
};

export default Parts;
