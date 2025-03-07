import { useState } from 'react';
import {
  Form,
  Input,
  InputNumber,
  Button,
  Select,
  Upload,
  Breadcrumb,
  Table,
} from 'antd';
import {
  PlusOutlined,
  DeleteOutlined,
  CloudUploadOutlined,
} from '@ant-design/icons';
import { UploadProps } from 'antd/es/upload/interface';
import { RouteNames } from '@/routes/routes';
import { ColumnsType } from 'antd/es/table';
import numeral from 'numeral';

interface PartItem {
  key: number;
  unit: string;
  partName: string;
  quantity: number;
  unitPrice: number;
  claimCost: number;
  status: string;
  note: string;
}

const WarrantyAndClaimCreate = () => {
  const [form] = Form.useForm();
  const [items, setItems] = useState<PartItem[]>([]);

  //col render input

  const columns: ColumnsType<PartItem> = [
    {
      title: 'Unit',
      dataIndex: 'unit',
      key: 'unit',
      render: () => (
        <Select
          defaultValue="Time"
          className="w-full"
          options={[
            { value: 'Time', label: 'Time' },
            { value: 'Box', label: 'Box' },
            { value: 'Set', label: 'Set' },
            { value: 'Piece', label: 'Piece' },
          ]}
        />
      ),
      width: '10%',
      fixed: 'left' as const,
    },
    {
      title: 'Part Name',
      dataIndex: 'partName',
      key: 'partName',
      render: () => (
        <Select
          placeholder="Select Part"
          className="w-full"
          options={[
            { value: 'S002', label: 'S002 - Brake Service' },
            { value: 'S003', label: 'S003 - Oil Change' },
          ]}
        />
      ),
      width: '15%',
      fixed: 'left' as const,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: () => <InputNumber min={1} className="w-full" />,
      width: '10%',
    },
    {
      title: 'Unit Price',
      dataIndex: 'unitPrice',
      key: 'unitPrice',
      render: () => <InputNumber min={1} className="w-full" />,
      width: '10%',
    },
    {
      title: 'Claim Cost',
      dataIndex: 'claimCost',
      key: 'claimCost',
      render: () => <InputNumber min={1} className="w-full" />,
      width: '10%',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: () => (
        <Select
          defaultValue="Approved"
          className="w-full"
          options={[
            { value: 'Approved', label: 'Approved' },
            { value: 'Rejected', label: 'Rejected' },
          ]}
        />
      ),
      width: '10%',
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
      render: () => <Input />,
      width: '15%',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button
          color="danger"
          icon={<DeleteOutlined />}
          onClick={() => handleDeleteItem(record.key)}
        />
      ),
      width: '10%',
      fixed: 'right' as const,
    },
  ];

  const handleAddItem = () => {
    const newItem: PartItem = {
      key: items.length + 1,
      unit: 'Time',
      partName: '',
      quantity: 0,
      unitPrice: 0,
      claimCost: 0,
      status: 'Approved',
      note: '',
    };
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (key: number) => {
    setItems(items.filter((item) => item.key !== key));
  };

  const uploadProps: UploadProps = {
    name: 'file',
    multiple: true,
    action: '/api/upload',
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
    },
  };

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + (item.claimCost || 0), 0);
  };

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <Breadcrumb
          items={[
            {
              title: 'Claims Management',
              href: RouteNames.CLAIMS_MANAGEMENT,
              className: 'font-medium',
            },
            {
              title: 'Create Claim',
              className: 'font-medium',
            },
          ]}
        />
      </div>
      <h1 className="mb-4 text-2xl font-bold text-gray-800">
        Claim Information
      </h1>

      <Form
        form={form}
        layout="vertical"
        className="rounded-lg bg-white p-6 shadow"
      >
        <Form.Item
          label="Service Job Card ID"
          name="jobCardId"
          className="mb-6"
        >
          <Input placeholder="Enter Job Card ID" />
        </Form.Item>

        <div className="mb-2">
          <h2 className="mb-4 text-lg font-medium">Parts</h2>
          <Table
            columns={columns}
            dataSource={items}
            pagination={false}
            scroll={{ x: 1000 }}
            className="mb-4"
          />
          <div className="flex items-center justify-between">
            <Button
              type="dashed"
              onClick={handleAddItem}
              icon={<PlusOutlined className="h-4 w-4" />}
              className="mb-4"
            >
              Add Item
            </Button>
            <span className="text-lg font-medium">
              Total Cost: {numeral(calculateTotal()).format('$0,0.00')}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="mb-4 text-lg font-medium">Attachments</h2>
          <Upload.Dragger {...uploadProps} className="bg-gray-50">
            <p className="ant-upload-drag-icon">
              <CloudUploadOutlined className="h-8 w-8 text-blue-500" />
            </p>
            <p className="ant-upload-text">Drag & drop files here</p>
            <p className="ant-upload-hint text-sm text-gray-500">
              Supported formats: PDF, JPG, PNG
              <br />
              Max size 10MB
            </p>
          </Upload.Dragger>
        </div>

        <div className="flex justify-end gap-2">
          <Button size="large">Cancel</Button>
          <Button size="large" type="primary" className="bg-blue-500">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default WarrantyAndClaimCreate;
