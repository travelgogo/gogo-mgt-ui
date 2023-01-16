import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Layout, Menu, MenuProps, Space } from "antd";
import { Header as AntdHeader } from "antd/es/layout/layout";
import React from "react";
import { Link } from "react-router-dom";
import IUser from "types/userIdentity";
import './index.scss'
import {signoutRedirect} from '../../services/identityService'
const menuItems: MenuProps['items'] = [
    { name: 'Quản lý tour', link: '/tours' },
    { name: 'Quản lý bài viết', link: '/post' },
    { name: 'Quản lý phản hồi', link: '/feedback' },
    { name: 'Doanh thu', link: '/revenue' }
].map((value, index) => ({
    key: index + 2,
    label: (
        <Link to={value.link} rel="noopener noreferrer">
            {value.name}
        </Link>
    )
}));

const items: MenuProps['items'] = [
    { name: 'Signout', link: '/sign-out' },

].map((value, index) => ({
    key: index + 2,
    onClick: () => signoutRedirect(),
    label: (
        <a  rel="noopener noreferrer">
            {value.name}
        </a>
    )
}));

interface HeaderProps {
    user: IUser
}

const Header = ({ user }: HeaderProps) => {
    return (
        <Layout>
            <AntdHeader style={{display:'flex'}} className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems} />
                <Dropdown className="user-name" menu={{ items }}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            {user && user.profile?.name}
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </AntdHeader>
        </Layout>
    )
}

export default Header;