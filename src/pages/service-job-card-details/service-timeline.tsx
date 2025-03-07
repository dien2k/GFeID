import { Timeline, Card } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
}

const ServiceTimeline = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      time: '15 Jan 2024, 14:30',
      title: 'Payment Processed',
      description: 'Service completed and payment received',
    },
    {
      time: '15 Jan 2024, 14:00',
      title: 'Service Completed',
      description: 'All repairs and checks finished',
    },
    {
      time: '15 Jan 2024, 10:00',
      title: 'Service Started',
      description: 'Vehicle received and work begun',
    },
    {
      time: '15 Jan 2024, 09:30',
      title: 'Service Job Card Created',
      description: 'Initial inspection completed',
    },
  ];

  return (
    <div>
      <Card title="Service Timeline" className="w-full max-w-md">
        <Timeline
          items={timelineEvents.map((event, index) => ({
            color: 'green',
            children: (
              <div key={index} className="pb-4">
                <div className="text-sm text-gray-600">{event.time}</div>
                <div className="font-medium text-green-600">{event.title}</div>
                <div className="text-sm text-gray-600">{event.description}</div>
              </div>
            ),
          }))}
        />
      </Card>
      <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-100 p-3 text-green-600">
        <CheckCircleOutlined />
        <span className="font-medium">Service Successfully Completed</span>
      </div>
    </div>
  );
};

export default ServiceTimeline;
