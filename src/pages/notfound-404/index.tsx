import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { RouteNames } from '@/routes/routes';

const Notfound404 = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to={RouteNames.DASHBOARD}>
            <Button size="large" type="primary">
              Back Home
            </Button>
          </Link>
        }
      />
    </div>
  );
};

export default Notfound404;
