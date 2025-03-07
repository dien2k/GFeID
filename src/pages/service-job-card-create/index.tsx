import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  InfoCircleFilled,
} from '@ant-design/icons';
import { Form, Button, Breadcrumb, Alert, message } from 'antd';
import ServiceSteps from '../../components/common/service-steps/index';
import { RouteNames } from '@/routes/routes';
import { useNavigate } from 'react-router-dom';
import ServiceJobCardListService from './service-job-card-list-service';
import { useRequest } from 'ahooks';

import dayjs from 'dayjs';
import { useServiceJobCartStore } from '@/stores/service-job-cart-store';
import ServiceJobCardServices from '@/services/service-job-card';
import { EntitiesServiceJobCardCreateRequest } from '@/@types/api.type';
import ServiceJobCardInformation from './service-job-card-information';

const CreateServiceJobCard = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const serviceItems = useServiceJobCartStore((state) => state.services);

  const createServiceJobCardAPI = useRequest(
    ServiceJobCardServices.createServiceJobCard,
    {
      manual: true,
      onSuccess: (response) => {
        form.resetFields();
        message.success('Service job card created successfully');
        navigate(RouteNames.SERVICE_JOB_CARD_DETAILS(String(response.data.id)));
      },
      onError: (error) => {
        message.error(`Failed to create service job card: ${error.message}`);
      },
    },
  );

  const onFinish = () => {
    const {
      customer_id,
      vehicle_id,
      technician_id,
      estimated_completion_time,
    } = form.getFieldsValue();

    const serviceJobCard: EntitiesServiceJobCardCreateRequest = {
      customer_id: Number(customer_id),
      vehicle_id: Number(vehicle_id),
      technician_id: Number(technician_id),
      estimated_completion_time: dayjs(estimated_completion_time).toISOString(),
      services: serviceItems.map((item) => ({
        ...item,
        service_id: item.service_id,
        part_id: item.part_id,
        quantity: item.quantity,
        unit: item.unit,
        note: item.note,
      })),
      payment_method: 'Cash',
      payment_status: 'Pending',
      service_center_id: 1,
    };
    createServiceJobCardAPI.run(serviceJobCard);
  };

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <Breadcrumb
          items={[
            {
              title: 'Service and Vehicle Management',
              className: 'text-green-700 font-medium',
              href: RouteNames.VEHICLE_AND_SERVICE_MANAGEMENT,
            },
            { title: 'Create Service Job Card' },
          ]}
        />
      </div>

      <div className="rounded-lg bg-white p-4">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="m-0 font-semibold">Create Service Job Card</h1>
          <Button
            type="primary"
            className="rounded-full font-medium"
            size="large"
          >
            View
          </Button>
        </div>

        <Alert
          message={
            <div className="flex items-center gap-2 p-2 text-lg">
              Please review the service details and complete the payment to
              close this job card.
            </div>
          }
          icon={<InfoCircleFilled className="text-lg text-blue-500" />}
          type="info"
          className="mb-6 rounded-lg text-blue-500"
          banner
        />

        <div className="mx-auto mb-6 flex max-w-xl items-center gap-4">
          <ServiceSteps current={0} />
        </div>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <ServiceJobCardInformation form={form} />
          <ServiceJobCardListService />

          <div className="mt-10 flex justify-between">
            <Button size="large" icon={<ArrowLeftOutlined />}>
              Back
            </Button>
            <Button
              size="large"
              type="primary"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              htmlType="submit"
            >
              Next
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default CreateServiceJobCard;
