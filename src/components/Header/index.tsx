import { Layout, Menu, MenuProps } from "antd";
import { Header as AntdHeader } from "antd/es/layout/layout";
import React from "react";

const items: MenuProps['items'] = [
    { name: 'Quản lý tour', link: '/tours' },
    { name: 'Quản lý bài viết', link: '/post' },
    { name: 'Quản lý phản hồi', link: '/feedback' },
    { name: 'Doanh thu', link: '/revenue' }
].map((value, index) => ({
    key: index + 2,
    label: (
        <a href={value.link} rel="noopener noreferrer">
            {value.name}
        </a>
    )
}));

const Header = () => {
    return (
        <>
            <Layout>
                <AntdHeader className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items} />
                </AntdHeader>
            </Layout>
        </>
    )
}

export default Header;