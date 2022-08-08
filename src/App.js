import React from "react";
import shapeTop from "./images/shape-1.png"
import shapeBottom from "./images/shape-2.png"
import QusitionList from "./components/QusitionList"
import { Breadcrumb, Layout, Menu, Button, Dropdown, message, Space, Tooltip } from "antd"
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import data from "./data"


export default function App() {
    const { Header, Content, Footer } = Layout;
    const [category, setCategory] = React.useState({ data });
    console.log(category);

    // const handleButtonClick = (e) => {
    //     message.info('Click on left button.');
    //     console.log('click left button', e);
    // };

    const handleMenuOneClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    const handleMenuTwoClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    const menuOne = (
        <Menu
            onClick={handleMenuOneClick}
            items={data.map(item => ({ label: item.value, key: item.id }))}
        />
    );

    const menuTwo = (
        <Menu
            onClick={handleMenuTwoClick}
            items={[
                {
                    label: 'Any Difficulty',
                    key: '1',
                },
                {
                    label: 'Easy',
                    key: '2',
                },
                {
                    label: 'Medium',
                    key: '3',
                },
                {
                    label: 'Hard',
                    key: '4',
                },
            ]}
        />
    )
    const menuThree = (
        <Menu
            onClick={handleMenuTwoClick}
            items={[
                {
                    label: 'Any Type',
                    key: '1',
                },
                {
                    label: 'Multiple Choice',
                    key: '2',
                    value: 'multiple'
                },
                {
                    label: 'True / False',
                    key: '3',
                },
            ]}
        />
    )
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
                    <div className="game-options-container">
                        <div className="select-container">
                            <label className="custom-label" htmlFor="category">Category:</label>
                            <Dropdown
                                overlay={menuOne}
                                trigger={['click']}
                                value={category}
                            >
                                <Button>
                                    <Space>
                                        Any category
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </div>
                        <div className="select-container">
                            <label className="custom-label" htmlFor="difficulty">Difficulty:</label>
                            <Dropdown
                                overlay={menuTwo}
                                trigger={['click']}
                            >
                                <Button>
                                    <Space>
                                        Any Difficulty
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>

                        </div>
                        <div className="select-container">
                            <label className="custom-label" htmlFor="type">Type of question:</label>
                            <Dropdown
                                overlay={menuThree}
                                trigger={['click']}
                            >
                                <Button>
                                    <Space>
                                        Any Type
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>

                        </div>
                        <Button type="primary" shape="round" size="large" className="custom-button">
                            Start Quiz!
                        </Button>
                    </div>

                    {/* <QusitionList /> */}
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