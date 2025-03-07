import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import { useSearchParams } from 'react-router-dom';
import AppLink from '../app-link';

interface Props {
  page: number;
  limit: number;
  totalCount: number;
}

const AppPagination = ({ page, limit, totalCount }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangePage = (newPage: number, newLimit: number) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    setSearchParams({
      ...currentParams,
      page: newPage.toString(),
      limit: newLimit.toString(),
    });
  };

  return (
    <Pagination
      current={page}
      pageSize={limit}
      total={totalCount}
      showSizeChanger
      size="small"
      itemRender={(_, type, originalElement) => {
        if (type === 'prev') {
          return (
            <AppLink
              disabled={page === 1}
              onClick={() => handleChangePage(page - 1, limit)}
            >
              <ArrowLeftOutlined />
            </AppLink>
          );
        }
        if (type === 'next') {
          return (
            <AppLink
              disabled={page >= Math.ceil(totalCount / limit)}
              onClick={() => handleChangePage(page + 1, limit)}
            >
              <ArrowRightOutlined />
            </AppLink>
          );
        }
        return originalElement;
      }}
      showTotal={(total, range) => {
        if (!total || !range || range.length < 2) {
          return <label className="text-sm">No entries available...</label>;
        }
        const [start, end] = range;
        return (
          <label className="text-sm">
            {`Showing ${start.toLocaleString()}-${end.toLocaleString()} of ${total.toLocaleString()} entries`}
          </label>
        );
      }}
      onChange={(newPage, newLimit) => handleChangePage(newPage, newLimit)}
      className="flex w-full justify-end rounded-b-lg bg-white p-4 shadow-sm"
    />
  );
};

export default AppPagination;
