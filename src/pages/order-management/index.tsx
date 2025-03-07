import { Table, Button, Select } from 'antd';
import Search from 'antd/es/transfer/search';
import { columns } from './list-order-table-col';
import AppPagination from './../../components/common/app-pagination/index';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { RouteNames } from '@/routes/routes';
import { PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
const OrderManagement = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const page = +(searchParams.get('page') || 1);
  const limit = +(searchParams.get('limit') || 10);
  const data = [
    {
      id: 1,
      poNumber: 'PO-2024-001',
      vendor: 'EV Parts Co.',
      orderQty: 35,
      totalInvoice: 1609.65,
    },
  ];
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="m-0">Vehicle & Service Management</h1>
        <Button
          type="primary"
          size="large"
          onClick={() => {
            navigate(RouteNames.ORDER_CREATE);
          }}
          icon={<PlusOutlined />}
        >
          Create New Order
        </Button>
      </div>

      <div className="mb-6 flex w-1/2 gap-4">
        <Search placeholder="Search by PO number, Part Name..." />
        <Select
          defaultValue="all"
          className="min-w-[18rem]"
          options={[
            {
              value: 'all',
              label: t('All {{label}}', { label: t('Vendor') }),
            },
          ]}
        />
      </div>
      <Table
        columns={columns(navigate)}
        pagination={false}
        dataSource={data}
        size="small"
        className="rounded-lg bg-white shadow"
      />
      <AppPagination page={page} limit={limit} totalCount={50} />
    </>
  );
};

export default OrderManagement;
