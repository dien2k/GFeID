import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Table, Input, Select, DatePicker, Button } from 'antd';
import { columns } from './list-claim-table-col';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AppPagination from '@/components/common/app-pagination';
import { RouteNames } from '@/routes/routes';
import { data } from './faker';
import { useTranslation } from 'react-i18next';

export default function ClaimsManagement() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const page = +(searchParams.get('page') || 1);
  const limit = +(searchParams.get('limit') || 10);

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="m-0">Warranty & Claims Management</h1>
        <div className="flex items-center gap-2">
          <Button
            size="large"
            type="primary"
            onClick={() => {
              navigate(RouteNames.CLAIMS_CREATE);
            }}
            icon={<PlusOutlined />}
          >
            Create New Claim
          </Button>
        </div>
      </div>

      <div className="mb-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Input
            placeholder={t('Search...')}
            prefix={<SearchOutlined className="text-gray-400" />}
          />
          <Select
            defaultValue={t('All {{label}}', { label: t('Vendor') })}
            className="w-full"
            options={[
              {
                value: 'all',
                label: t('All {{label}}', { label: t('Vendor') }),
              },
            ]}
          />
          <DatePicker.RangePicker className="w-full" format="DD/MM/YYYY" />
        </div>
      </div>

      <div className="rounded-lg bg-white shadow">
        <Table
          columns={columns(navigate)}
          dataSource={data}
          pagination={false}
          size="small"
          className="w-full"
          scroll={{ x: 1000 }}
        />
        <AppPagination page={page} limit={limit} totalCount={248} />
      </div>
    </>
  );
}
