import React from "react";
import shapeTop from "./images/shape-1.png"
import shapeBottom from "./images/shape-2.png"
import QusitionList from "./components/QusitionList"
import { Breadcrumb, Layout, Menu, Button, Dropdown, message, Space, Tooltip } from "antd"
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import data from "./data"


export default function App() {
    const { Header, Content, Footer } = Layout;
    const [category,setCategory] = React.useState({data});
    console.log(category);

    const handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    };

    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };
    function setMenu(){
        for(let i = 0;i<category.data.length;i++){
            return{
                label:category.data[i].value,
                key:category.data[i].id
            }
        }
    }

    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={data.map(item=>({label:item.value,key:item.id}))}
            // items={[
            //     {
            //         label: 'Any Category',
            //         key: '1',
            //     },
            //     {
            //         label: '2nd menu item',
            //         key: '2',
            //     },
            //     {
            //         label: '3rd menu item',
            //         key: '3',
            //     },
            // ]}
        />
    );
    return (
        <Layout className="layout">
            <Header>
                <div className="logo">

                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(3).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: `nav${key}`
                        }
                    })}
                >

                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', }}>
                <Breadcrumb style={{ margin: '16px 0', }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>

                <div className="site-layout-content">
                    <img className="shape-top" src={shapeTop} alt="shape-top" />

                    <div className="game-intro">
                        <h1 className="game-title">Quizzical</h1>
                        <p className="game-text">Answer the questions and test your knowledge!</p>
                    </div>

                    <Dropdown overlay={menu} trigger={['click']} >
                        <Button>
                            <Space>
                                Button
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>

                    <QusitionList />
                    <img className="shape-bottom" src={shapeBottom} alt="shape-bottom" />
                </div>

            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                quizzical ©2022 Created by Qiu
            </Footer>
        </Layout >
    )
}