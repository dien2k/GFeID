import AppPagination from '@/components/common/app-pagination';
import AppSelect from '@/components/common/app-select';
import CustomerServices from '@/services/customer';
import { UserAddOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Button, Input, Table } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { columns } from './list-customer-table-col';
import { RouteNames } from '@/routes/routes';
import { useTranslation } from 'react-i18next';

const OPTIONS = ['phone', 'name', 'email'];

const CustomerTable = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();

  const [searchOption, setSearchOption] = useState<string>(OPTIONS[0]);

  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 10;

  const searchParamsObject = Object.fromEntries(searchParams.entries());
  const { name, phone, email } = searchParamsObject;
  const searchValue = name || phone || email;

  const getCustomerList = useRequest(
    () => CustomerServices.getCustomers({ page, limit, name, phone, email }),
    {
      refreshDeps: [page, limit, name, phone, email],
    },
  );

  const handleSearch = (value: string) => {
    setSearchParams({
      page: '1',
      [searchOption]: value,
    });
  };

  const searchOptions = [
    {
      label: t('Phone'),
      value: OPTIONS[0],
    },
    {
      label: t('Name'),
      value: OPTIONS[1],
    },
    {
      label: t('Email'),
      value: OPTIONS[2],
    },
  ];

  useEffect(() => {
    switch (true) {
      case !!name:
        setSearchOption('name');
        break;
      case !!email:
        setSearchOption('email');
        break;
      default:
        setSearchOption('phone');
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="m-0">
          {t('{{label}} Management', { label: t('Customer') })}
        </h1>
        <Button
          size="large"
          type="primary"
          icon={<UserAddOutlined />}
          onClick={() => navigate(RouteNames.CUSTOMER_CREATE)}
        >
          {t('Create new {{label}}', { label: 'Customer' })}
        </Button>
      </div>
      <div className="mb-4 grid w-full grid-cols-3 gap-4">
        <Input.Search
          placeholder={t('Search...')}
          onSearch={handleSearch}
          defaultValue={searchValue}
        />
        <AppSelect
          options={searchOptions}
          value={searchOption}
          onChange={setSearchOption}
          className="w-1/3"
        />
      </div>

      <Table
        columns={columns(navigate, t)}
        dataSource={
          getCustomerList.data?.data.items?.map((item) => ({
            ...item,
            key: item.id,
          })) || []
        }
        pagination={false}
        size="small"
        loading={getCustomerList.loading}
        className="w-full rounded-lg bg-white shadow"
      />
      <AppPagination
        page={page}
        limit={limit}
        totalCount={getCustomerList.data?.data.total_count || 0}
      />
    </>
  );
};

export default CustomerTable;
