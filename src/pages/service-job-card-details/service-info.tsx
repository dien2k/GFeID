import { Card, Descriptions } from 'antd';

const ServiceInfo = () => {
  return (
    <div className="max-w-7xl space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card title="Customer Information" className="w-full">
          <Descriptions
            items={[
              {
                key: 'customerName',
                label: 'Customer Name',
                children: 'C001',
              },
              {
                key: 'phone',
                label: 'Phone',
                children: '0123456789',
              },
              {
                key: 'email',
                label: 'Email',
                children: 'VtZaD@example.com',
              },
            ]}
            column={1}
          />
        </Card>

        <Card title="Vehicle Information" className="w-full">
          <Descriptions
            column={2}
            items={[
              {
                key: 'vehicleModel',
                label: 'Vehicle Model',
                children: 'Lead 125',
              },
              {
                key: 'licensePlate',
                label: 'License Plate',
                children: '-',
              },
              {
                key: 'currentMileage',
                label: 'Current Mileage',
                children: '5,000 KM',
              },
              {
                key: 'purchaseDate',
                label: 'Purchase Date',
                children: '2023-12-15',
              },
              {
                key: 'ownerName',
                label: "Owner's Name",
                children: 'Mai Ngân',
              },
              {
                key: 'receptionTime',
                label: 'Reception Time',
                children: '2024-01-15 10:00',
              },
              {
                key: 'ownerPhone',
                label: "Owner's Phone",
                children: '0123456789',
              },
            ]}
          />
        </Card>
      </div>

      <Card title="Service Details" className="w-full">
        <Descriptions
          column={2}
          items={[
            {
              key: 'technician',
              label: 'Technician',
              children: 'John Smith',
            },
            {
              key: 'completionTime',
              label: 'Completion Time',
              children: '2024-01-15 12:00',
            },
          ]}
        />
      </Card>

      <Card title="Payment Information" className="w-full">
        <Descriptions
          column={3}
          items={[
            {
              key: 'paymentMethod',
              label: 'Payment Method',
              children: 'Cash',
            },
            {
              key: 'paymentDate',
              label: 'Payment Date',
              children: '2024-01-15 14:30',
            },
            {
              key: 'paymentAmount',
              label: 'Payment Amount',
              children: 'Rp 50.000',
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default ServiceInfo;
