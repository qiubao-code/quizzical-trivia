import React from "react";
import shapeTop from "./images/shape-1.png"
import shapeBottom from "./images/shape-2.png"
import QusitionList from "./components/QusitionList"
import { Breadcrumb, Layout, Menu } from "antd"
import data from "./data"
import Homepage from "./components/Homepage";


export default function App() {
    const { Header, Content, Footer } = Layout;

    const [category, setCategory] = React.useState({ data });
    const [gameStart, setGameStart] = React.useState(false);
    const [gameOptions, setGameOptions] = React.useState({
        category: "",
        difficulty: "",
        type: ""
    })

    function handleGameStart() {
        setGameStart(true);
    }

    function handleGameOptions(value, event) {
        const { name } = event;
        // console.log(name)
        setGameOptions(preOptions => {
            return {
                ...preOptions,
                [name]: value
            }
        })
    }
    // console.log(gameOptions);
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
                    {
                        gameStart
                            ?
                            <QusitionList
                                gameOptions={gameOptions}
                            />
                            :
                            <Homepage
                                value={gameStart}
                                handleGameStart={handleGameStart}
                                gameOptions={gameOptions}
                                handleGameOptions={handleGameOptions}
                            />
                    }

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