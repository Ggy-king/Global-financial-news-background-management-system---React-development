import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import SideMenu from '../../components/newsSand/SideMenu'
import TopHeader from '../../components/newsSand/TopHeader'
import AuthorityList from './authority-manage/AuthorityList'
import RoleList from './authority-manage/RoleList'
import Home from './home/Home'
import NoPermission from './noPermission/NoPermission'
import UserList from './user-manage/UserList'

// css
import './NewsSand.css'

// antd
import { Layout } from 'antd'

const {Content} = Layout

export default function NewsSand() {
    return (
        <Layout>
            <SideMenu></SideMenu>
            <Layout className="site-layout">
                <TopHeader></TopHeader>

                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        overflow:'auto'
                    }}
                >
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/user-manage/list" component={UserList} />
                        <Route path="/authority-manage/role/list" component={RoleList} />
                        <Route path="/authority-manage/authority/list" component={AuthorityList} />

                        <Redirect from="/" to="/home" exact />
                        <Route path="*" component={NoPermission} />
                        {/* 上写法优先级最低 所有的都不匹配才是 */}
                    </Switch>

                </Content>

            </Layout>

        </Layout>
    )
}
