import { ServiceJobCardItem } from '@/@types/extended.type';
import PartServices from '@/services/part';
import ServiceServices from '@/services/service';
import {
  serviceJobCartStore,
  useServiceJobCartStore,
} from '@/stores/service-job-cart-store';
import { DeleteOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Button, Form, Input, InputNumber, Select, Switch, Table } from 'antd';
import { useCallback, useMemo } from 'react';

const UNIT_OPTIONS = [
  { value: 'Time', label: 'Time' },
  { value: 'Box', label: 'Box' },
  { value: 'Set', label: 'Set' },
  { value: 'Piece', label: 'Piece' },
] as const;

type UnitType = (typeof UNIT_OPTIONS)[number]['value'];

const ServiceJobCardListService = () => {
  const { services } = useServiceJobCartStore();

  const { data: partsData, loading: partsLoading } = useRequest(() =>
    PartServices.getParts({ page: 1, per_page: 1000 }),
  );

  const { data: servicesData, loading: servicesLoading } = useRequest(() =>
    ServiceServices.getServices({ page: 1, per_page: 1000 }),
  );

  // Memoize options
  const PART_OPTIONS = useMemo(
    () =>
      partsData?.data?.items?.map((item) => ({
        value: item.id,
        label: item.name,
      })) || [],
    [partsData],
  );

  const SERVICE_OPTIONS = useMemo(
    () =>
      servicesData?.data?.items?.map((item) => ({
        value: item.id,
        label: item.name,
      })) || [],
    [servicesData],
  );

  const handleUnitChange = useCallback(
    (value: UnitType, id: number) => {
      const defaultServiceId = servicesData?.data?.items?.[0]?.id ?? 0;
      const defaultPartId = partsData?.data?.items?.[0]?.id ?? 0;

      if (value === 'Time') {
        serviceJobCartStore.updateItem(id, {
          unit: value,
          service_id: defaultServiceId,
          part_id: 0,
        });
      } else {
        serviceJobCartStore.updateItem(id, {
          unit: value,
          service_id: 0,
          part_id: defaultPartId,
        });
      }
    },
    [servicesData, partsData],
  );

  const calculateAmount = (quantity: number, unitPrice: number): number =>
    Number((quantity * unitPrice).toFixed(2));

  const columns = useMemo(
    () => [
      {
        title: '#',
        dataIndex: 'id',
        width: 50,
      },
      {
        title: 'Unit',
        dataIndex: 'unit',
        render: (unit: UnitType, record: ServiceJobCardItem) => (
          <Select
            value={unit}
            style={{ width: 120 }}
            options={[...UNIT_OPTIONS]}
            onChange={(value) => handleUnitChange(value as UnitType, record.id)}
          />
        ),
      },
      {
        title: 'Part/Service',
        render: (record: ServiceJobCardItem) => (
          <Select
            value={record.unit === 'Time' ? record.service_id : record.part_id}
            options={record.unit === 'Time' ? SERVICE_OPTIONS : PART_OPTIONS}
            onChange={(value) =>
              serviceJobCartStore.updateItem(record.id, {
                [record.unit === 'Time' ? 'service_id' : 'part_id']: value,
              })
            }
            loading={record.unit === 'Time' ? servicesLoading : partsLoading}
            placement="bottomLeft"
            style={{ width: 200 }}
            allowClear
          />
        ),
        width: '10%',
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        render: (
          quantity: number,
          record: ServiceJobCardItem,
          index: number,
        ) => (
          <Form.Item
            name={['services', index, 'quantity']}
            className="m-0"
            rules={[
              { required: true, message: 'Required' },
              { type: 'number', min: 1, message: 'Min: 1' },
            ]}
            help={false}
          >
            <InputNumber
              min={1}
              precision={0}
              onChange={(value) =>
                serviceJobCartStore.updateItem(record.id, {
                  quantity: value ? Math.max(1, Number(value)) : 1,
                })
              }
              value={quantity}
            />
          </Form.Item>
        ),
      },
      {
        title: 'Unit Price',
        dataIndex: 'unit_price',
        render: (price: number, record: ServiceJobCardItem, index: number) => (
          <Form.Item
            className="m-0"
            name={['services', index, 'unit_price']}
            rules={[
              { required: true, message: 'Required' },
              { type: 'number', min: 1, message: 'Min: 1' },
            ]}
            help={false}
          >
            <InputNumber
              min={1}
              value={price}
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              parser={(value) => Number(value!.replace(/\$\s?|(,*)/g, ''))}
              onChange={(value) =>
                serviceJobCartStore.updateItem(record.id, {
                  unit_price: Number(value),
                })
              }
            />
          </Form.Item>
        ),
      },
      {
        title: 'Warranty',
        dataIndex: 'has_warranty',
        render: (warranty: boolean, record: ServiceJobCardItem) => (
          <Switch
            checked={warranty}
            onChange={(checked) =>
              serviceJobCartStore.updateItem(record.id, {
                has_warranty: checked,
              })
            }
          />
        ),
      },
      {
        title: 'Amount',
        render: (record: ServiceJobCardItem) => (
          <Input
            disabled
            value={calculateAmount(record.quantity, record.unit_price)}
          />
        ),
      },
      {
        title: 'Note',
        dataIndex: 'note',
        render: (note: string, record: ServiceJobCardItem) => (
          <Input
            value={note}
            onChange={(e) =>
              serviceJobCartStore.updateItem(record.id, {
                note: e.target.value,
              })
            }
            placeholder="Enter note"
          />
        ),
      },
      {
        title: 'Actions',
        key: 'actions',
        render: (record: ServiceJobCardItem) => (
          <Button
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={() => serviceJobCartStore.deleteItem(record.id)}
          />
        ),
      },
    ],
    [
      SERVICE_OPTIONS,
      PART_OPTIONS,
      partsLoading,
      servicesLoading,
      handleUnitChange,
    ],
  );

  const total = useMemo(
    () =>
      services.reduce(
        (sum, item) => sum + calculateAmount(item.quantity, item.unit_price),
        0,
      ),
    [services],
  );

  return (
    <div className="mb-4 rounded-lg border border-solid border-gray-200 p-4 shadow-sm">
      <div className="mb-4">
        <h2 className="m-0 font-medium">Part/Service Items</h2>
      </div>
      <Table
        dataSource={services}
        columns={columns}
        pagination={false}
        size="small"
        rowKey="id"
        summary={() => (
          <Table.Summary>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={6}>
                Total:
              </Table.Summary.Cell>
              <Table.Summary.Cell index={1}>
                {total.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2} colSpan={3} />
            </Table.Summary.Row>
          </Table.Summary>
        )}
      />
      <Button
        type="primary"
        onClick={serviceJobCartStore.addItem}
        className="mt-4 bg-blue-100 text-blue-500"
      >
        + Add Item
      </Button>
    </div>
  );
};

export default ServiceJobCardListService;
