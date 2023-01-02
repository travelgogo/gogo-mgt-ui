import React, { useState } from 'react';
import './index.scss';
import { ArrowLeftOutlined, EditOutlined, PlusOutlined, SwapLeftOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  Table,
  Space,
  Row,
  Col,
  Image
} from 'antd';
import { ColumnsType } from 'antd/es/table';
import { CKEditor } from '@ckeditor/ckeditor5-react/';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface StartDateItem {
  no: number;
  description: string;
  startDate: string;
  price: string;
  seatBooked: string,
  status: string
}

const { TextArea } = Input;

const TourDetail = (props: any) => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  const onFormLayoutChange = ({ disabled }: { disabled: boolean }) => {
    setComponentDisabled(disabled);
  };
  const columns: ColumnsType<StartDateItem> = [
    {
      title: 'No.',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Start date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Seat Booked',
      key: 'seatBooked',
      dataIndex: 'seatBooked',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => { props.onSelectTour(record); }} >View</a>
        </Space>
      ),
    },
  ];

  const data: StartDateItem[] = [
    {
      no: 1,
      price: '599.25',
      startDate: '2022-12-10',
      seatBooked: '8/20',
      status: 'Opening',
      description: ''
    },
    {
      no: 2,
      price: '599.25',
      startDate: '2022-12-10',
      seatBooked: '8/20',
      status: 'Opening',
      description: ''
    },
    {
      no: 3,
      price: '599.25',
      startDate: '2022-12-10',
      seatBooked: '8/20',
      status: 'Opening',
      description: ''
    },
    {
      no: 4,
      price: '599.25',
      startDate: '2022-12-10',
      seatBooked: '8/20',
      status: 'Opening',
      description: ''
    },
    {
      no: 5,
      price: '599.25',
      startDate: '2022-12-10',
      seatBooked: '8/20',
      status: 'Opening',
      description: ''
    },
  ];
  return (
    <>
      <ArrowLeftOutlined style={{ display: 'flex', fontSize: 20, cursor: 'pointer', width: '20px' }} onClick={props.onBackTourList} />
      <h2>Tour Detail</h2>
      <div className='control-wrapper'>
        <Button type='primary' size='large' icon={<EditOutlined />} onClick={props.onGoToEditing} >Edit</Button>
      </div>
      <Form
        labelCol={{ span: 14 }}
        wrapperCol={{ span: 18 }}
        layout="vertical"
        onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
      >
        <Row>
          <Col offset={4} span={8}>
            <Form.Item label="Code">
              <Input />
            </Form.Item>
            <Form.Item label="Name">
              <Input />
            </Form.Item>
            <Form.Item label="Status">
              <Input />
            </Form.Item>

          </Col>
          <Col span={8}>
            <Form.Item label="Adult price">
              <Input />
            </Form.Item>
            <Form.Item label="Children under 2 price">
              <Input />
            </Form.Item>
            <Form.Item label="Children from 2 to 5 price">
              <Input />
            </Form.Item>
            <Form.Item label="Children from 5 to 10 price">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col offset={4} span={16}>
            <Form.Item wrapperCol={{ span: 24 }} label="Start date">
              <Table columns={columns} dataSource={data} pagination={false} />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }} label="Description">
              <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                onReady={(editor: any) => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event: any, editor: { getData: () => any; }) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={(event: any, editor: any) => {
                  console.log('Blur.', editor);
                }}
                onFocus={(event: any, editor: any) => {
                  console.log('Focus.', editor);
                }}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }} label="Schedule">
              <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                onReady={(editor: any) => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event: any, editor: { getData: () => any; }) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={(event: any, editor: any) => {
                  console.log('Blur.', editor);
                }}
                onFocus={(event: any, editor: any) => {
                  console.log('Focus.', editor);
                }}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 12 }} label="Thumbnail image">
              <Image
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12 }} label="Content image">
              <Image
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Form.Item>
          </Col>
        </Row>
        
      </Form>
    </>
  );
};

export default TourDetail;