import React, { useEffect, useState } from 'react';
import './index.scss';
import { Button, Col, Modal, Popconfirm, Row, Select, Space, Table, Tag, Upload } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PlusOutlined, SearchOutlined, UploadOutlined } from '@ant-design/icons';
import SelectControl from '../../../components/SelectControl';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTours } from 'redux/actionCreators/tour';
import { useAppSelector } from 'redux/reducers';

interface TourItem {
    id:number;
    no: number;
    code: string;
    name: string;
    startDate: string;
    price: string;
    startingGate: string,
    seatRemaining: number,
    status: string
}

const bookingStatuses = [
    { name: "Pending", id: 1 },
    { name: "Active", id: 2 }
]

const Tours = (props: any) => {
    const dispatch = useDispatch();
    const data = useAppSelector(s => s.tour.tours)
    const isFetchingData = useAppSelector(s => s.tour.isFetchingTour)
    // const tmp: TourItem[] = [
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     },
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     }
    // ]
    useEffect(() => {
        dispatch(getTours())
    },[])

    const onBookingStatusSelect = (value: any) => {
        console.log(`selected ${value}`);
    }

    const columns: ColumnsType<TourItem> = [
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
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
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
            title: 'Starting gate',
            key: 'startingGate',
            dataIndex: 'startingGate',
        },
        {
            title: 'Seat remaining',
            key: 'seatRemaining',
            dataIndex: 'seatRemaining',
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
                    <Link to={record.id.toString()} >View</Link>
                </Space>
            ),
        },
    ];

    // const data: TourItem[] = [
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     },
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     },
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     },
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     },
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     },
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     },
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     },
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     },
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     },
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     },
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     },
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     },
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     },
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     },
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     },
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     },
    //     {
    //         id: 1,
    //         no: 1,
    //         code: 'GXR126',
    //         name: 'Rovaniemi - Runua Wildlife Park - Saariselka',
    //         price: '599.25',
    //         startDate: '2022-12-10',
    //         seatRemaining: 10,
    //         startingGate: 'Ho Chi Minh City',
    //         status: 'Opening'
    //     },
    // ];

    return (
        <>
            <Row>
                <Col span={16}>
                    <div style={{ display: 'flex', margin: '20px 0' }}>
                        <SelectControl
                            data={{
                                name: "Status",
                                options: bookingStatuses,
                                selectedOption: bookingStatuses[0]
                            }}
                            onSelect={onBookingStatusSelect} />
                        <Button type="primary" size='large' style={{ margin: '26px 0 0 30px' }} icon={<SearchOutlined />}>
                            Search
                        </Button>
                    </div>
                </Col>
                <Col span={8} style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                    <Link to='create'>
                        <Button type="primary"
                            size='large'
                            style={{ margin: '46px 0 20px 30px' }}
                            icon={<PlusOutlined />}
                            >
                            Create tour
                        </Button>
                    </Link>

                </Col>
            </Row>
            <Table loading={isFetchingData} columns={columns} dataSource={data} />
        </>
    )
}

export default Tours;