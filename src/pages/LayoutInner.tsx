import { Button, Layout, Menu, MenuProps } from "antd";
import Header from "components/Header";
import Main from "components/Main";
import React from "react";
import { Route } from "react-router-dom";
import userManager from "utilities/identityOidc";

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

const LayoutInner = () => {
    return (
        <Layout className='layout'>
            <Header />
            <Main />
        </Layout>
    )
}

export default LayoutInner