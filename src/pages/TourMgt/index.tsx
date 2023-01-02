import React, { useState } from 'react';
import './index.scss';
import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import TourCategory from './TourCategory';
import TourRegion from './TourRegion';
import TourLocation from './TourLocation';
import TourBooking from './TourBooking';
import Tours from './Tours';
import TourDetail from './Tours/TourDetail';
import TourEditing from './Tours/TourEditing';
import TourCreating from './Tours/TourCreating';

const { Content, Sider } = Layout;

const TourMgt = () => {
  const renderTourDetail = (tour: any) => {
    setCurrentPage(<TourDetail tour={tour} onGoToEditing={goToEditing} onBackTourList={backTourList} />)
  }
  const renderTourCreating = () => {
    console.log('click')
    setCurrentPage(<TourCreating onBackTourList={backTourList} />)
  }
  const [currentPage, setCurrentPage] = useState(<Tours onCreateTourClick={renderTourCreating} onSelectTour={renderTourDetail} />)

  const backTourList = () => {
    setCurrentPage(<Tours onCreateTourClick={renderTourCreating} onSelectTour={renderTourDetail} />)
  }

  const goToEditing = () => {
    setCurrentPage(<TourEditing onBackTourList={backTourList} />)
  }

  const onTourBookingClick = () => {
    setCurrentPage(<TourBooking />)
  }

  const onTourClick = () => {
    setCurrentPage(<Tours onCreateTourClick={renderTourCreating} onSelectTour={renderTourDetail} />)
  }

  const onCategoryClick = () => {
    setCurrentPage(<TourCategory />)
  }

  const onRegionClick = () => {
    setCurrentPage(<TourRegion />)
  }

  const onLocationClick = () => {
    setCurrentPage(<TourLocation />)
  }



  const subNavs: MenuProps['items'] = [
    {
      key: '1',
      icon: React.createElement(LaptopOutlined),
      label: 'Booking',
      onClick: onTourBookingClick
    },
    {
      key: '8',
      icon: React.createElement(LaptopOutlined),
      label: 'Tours',
      onClick: onTourClick
    },
    {
      key: '2',
      icon: React.createElement(UserOutlined),
      label: `Địa điểm`,
      children: [
        {
          key: '3',
          label: 'Loại du lịch',
          onClick: onCategoryClick
        },
        {
          key: '4',
          label: 'Vùng miền',
          onClick: onRegionClick
        },
        {
          key: '5',
          label: 'Địa điểm',
          onClick: onLocationClick
        }
      ]
    },
    {
      key: '7',
      icon: React.createElement(LaptopOutlined),
      label: 'Khuyến mãi'
    }
  ]

  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <>
      <Sider width={200} style={{ background: colorBgContainer }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          //defaultOpenKeys={['2']}
          style={{ height: '100%', borderRight: 0, textAlign: 'left' }}
          items={subNavs}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px', height: 'max-content' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {currentPage}
        </Content>
      </Layout>
    </>
  );
};

export default TourMgt;