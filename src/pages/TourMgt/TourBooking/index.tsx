import React from 'react';
import './index.scss';
import { Button, Popconfirm, Select, Space, Table, Tag, Upload } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PlusOutlined, SearchOutlined, UploadOutlined } from '@ant-design/icons';
import SelectControl from '../../../components/SelectControl';

interface TourBookingItem {
    no: number;
    code: string;
    bookingDate: string;
    bookerName: string;
    bookerPhone: string;
    bookerEmail: string;
    // adultQuantity: number;
    // childrenUnder2: number;
    // childrenFrom2To5: number;
    // childrenFrom5To11: number;
    totalPrice: number;
    status: string;
    tour: string;
}
  
const columns: ColumnsType<TourBookingItem> = [
    {
        title: 'No.',
        dataIndex: 'no',
        key: 'no',
    },
    {
        title: 'Code',
        dataIndex: 'code',
        key: 'code',
    },
    {
    title: 'Tour',
    dataIndex: 'tour',
    key: 'tour',
    },
    {
    title: 'Booking date',
    dataIndex: 'bookingDate',
    key: 'bookingDate',
    },
    {
    title: 'BookerName',
    dataIndex: 'bookerName',
    key: 'bookerName',
    },
    {
    title: 'BookerPhone',
    key: 'bookerPhone',
    dataIndex: 'bookerPhone',
    },
    {
        title: 'BookerEmail',
        key: 'bookerEmail',
        dataIndex: 'bookerEmail',
    },
    {
        title: 'totalPrice',
        key: 'totalPrice',
        dataIndex: 'totalPrice',
    },
    {
        title: 'status',
        key: 'status',
        dataIndex: 'status',
    },
    {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
        <Space size="middle">
        <a>View</a>
        </Space>
    ),
    },
];

const data: TourBookingItem[] = [
    {
        no: 1,
        code: 'GXR126',
        bookingDate: '2022-11-05',
        bookerName: 'Mr. Smile',
        bookerPhone: '0234543212',
        bookerEmail: 'mrsmile@gmail.com',
        totalPrice: 512.50,
        status: 'Pending',
        tour: '2 days 1 night Hawaii'
    },
    {
        no: 2,
        code: 'GXR126',
        bookingDate: '2022-11-05',
        bookerName: 'Mr. Smile',
        bookerPhone: '0234543212',
        bookerEmail: 'mrsmile@gmail.com',
        totalPrice: 512.50,
        status: 'Pending',
        tour: '2 days 1 night Hawaii'
    },
    {
        no: 1,
        code: 'GXR126',
        bookingDate: '2022-11-05',
        bookerName: 'Mr. Smile',
        bookerPhone: '0234543212',
        bookerEmail: 'mrsmile@gmail.com',
        totalPrice: 512.50,
        status: 'Pending',
        tour: '2 days 1 night Hawaii'
    },
];

const bookingStatuses = [
    {name: "Pending", id: 1},
    {name: "Active", id: 2}
]

const TourBooking = () => {

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onBookingStatusSelect = (value: any) => {
        console.log(`selected ${value}`);
    }
    
    return (
        <>
            <div className='control-panel'>
                <SelectControl 
                    data={{
                        name:"Status", 
                        options: bookingStatuses, 
                        selectedOption: bookingStatuses[0]
                    }}
                    onSelect={onBookingStatusSelect} />
                <Button type="primary" size='large' style={{margin: '26px 0 0 30px'}} icon={<SearchOutlined />}>
                    Search
                </Button>
            </div>
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default TourBooking;