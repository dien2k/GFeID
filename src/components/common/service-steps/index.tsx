import { Steps } from 'antd';
import { CreditCardOutlined, PrinterOutlined } from '@ant-design/icons';
import { cn } from '@/themes/cn';

export default function ServiceSteps({ current = 0 }: { current?: number }) {
  return (
    <Steps
      current={current}
      items={[
        {
          title: 'Create Service Job Card',
          icon: (
            <div
              className={cn(
                'flex size-10 items-center justify-center rounded-full',
                current === 0
                  ? 'bg-blue-500 text-white'
                  : 'border-2 border-solid border-blue-500 bg-white text-blue-500',
              )}
            >
              <PrinterOutlined className="h-5 w-5" />
            </div>
          ),
        },
        {
          title: 'Payment & Closure',
          icon: (
            <div
              className={cn(
                'flex size-10 items-center justify-center rounded-full p-2',
                current === 1
                  ? 'bg-blue-500 text-white'
                  : 'border-2 border-solid border-blue-500 bg-white text-blue-500',
              )}
            >
              <CreditCardOutlined className="h-5 w-5" />
            </div>
          ),
        },
      ]}
      className="flex items-center justify-between font-semibold [&_.ant-steps-item-container]:!flex [&_.ant-steps-item-container]:!items-center [&_.ant-steps-item-finish_.ant-steps-item-tail::after]:!bg-blue-600 [&_.ant-steps-item-icon]:!border-0 [&_.ant-steps-item-icon]:!bg-transparent [&_.ant-steps-item-tail::after]:!bg-gray-500 [&_.ant-steps-item]:!flex [&_.ant-steps-item]:!items-center"
    />
  );
}
