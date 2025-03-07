import ServiceTimeline from './service-timeline';
import ServiceInfo from './service-info';
import ServiceSummary from './service-summary';
import { Breadcrumb, Button, Tag } from 'antd';
import { CheckCircleOutlined, PrinterOutlined } from '@ant-design/icons';
import { RouteNames } from '@/routes/routes';
import { useParams } from 'react-router-dom';
import { useRequest } from 'ahooks';
import ServiceJobCardServices from '@/services/service-job-card';

const ServiceJobCardDetail = () => {
  const { id } = useParams();

  const serviceJobCardAPI = useRequest(
    () => ServiceJobCardServices.getServiceJobCardById(String(id)),
  );

  console.log(serviceJobCardAPI.data);
  return (
    <div className="mb-4">
      <div className="mb-4">
        <Breadcrumb
          items={[
            {
              title: 'Service and Vehicle Management',
              href: RouteNames.VEHICLE_AND_SERVICE_MANAGEMENT,
              className: 'font-medium',
            },
            { title: 'Service Job Card Detail', className: 'font-medium' },
          ]}
        />

        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h1 className="flex items-center gap-2 text-xl font-semibold">
              Service Job Card #SR001234
              <Tag color="success" className="ml-2">
                Closed
              </Tag>
            </h1>

            <div className="flex items-center gap-2 text-sm text-green-600">
              <CheckCircleOutlined />
              <span>
                All tasks are finalized, parts and services are confirmed, and
                payment is processed.
              </span>
            </div>
          </div>

          <Button
            type="primary"
            size="large"
            icon={<PrinterOutlined />}
            className="flex items-center gap-2"
            onClick={window.print}
          >
            Print Details
          </Button>
        </div>
      </div>
      <div className="flex gap-4">
        <ServiceInfo />
        <ServiceTimeline />
      </div>
      <ServiceSummary />
    </div>
  );
};

export default ServiceJobCardDetail;
