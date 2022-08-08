import { Button, Select } from "antd"
import data from '../data'
import React from "react";
const { Option } = Select;

export default function Homepage(props) {

    const categoryElements = data.map(item => (
        <Option
            value={item.key}
            name="category"
            key={item.id}
        >{item.value}</Option>
    ))

    return (
        <div>
            <div className="game-intro">
                <h1 className="game-title">Quizzical</h1>
                <p className="game-text">Answer the questions and test your knowledge!</p>
            </div>
            <div className="game-options-container">
                <div className="select-container">
                    <label className="custom-label" htmlFor="category">Category:</label>
                    <Select
                        defaultValue="Any Category"
                        className="custom-select"
                        onChange={(value, e) => props.handleGameOptions(value, e)}
                    >
                        {categoryElements}
                    </Select>
                </div>

                <div className="select-container">
                    <label className="custom-label" htmlFor="difficulty">Difficulty:</label>
                    <Select
                        defaultValue="Any Difficulty"
                        className="custom-select"
                        onChange={(value, e) => props.handleGameOptions(value, e)}
                    >
                        <Option name="difficulty" value="Any" key='0'>Any Difficulty</Option>
                        <Option name="difficulty" value="Easy" key='1'>Easy</Option>
                        <Option name="difficulty" value="Medium" key='2'>Medium</Option>
                        <Option name="difficulty" value="Hard" key='3'>Hard</Option>
                    </Select>
                </div>

                <div className="select-container">
                    <label className="custom-label" htmlFor="type">Type of question:</label>
                    <Select
                        defaultValue="Any Type"
                        className="custom-select"
                        onChange={(value, e) => props.handleGameOptions(value, e)}
                    >
                        <Option name="type" value="any" key="0">Any Type</Option>
                        <Option name="type" value="multiple" key='1'>Multiple Choice</Option>
                        <Option name="type" value="boolean" key="2">True / False</Option>
                    </Select>
                </div>

                <Button
                    type="primary"
                    shape="round"
                    size="large"
                    className="custom-button"
                    onClick={() => props.handleGameStart()}
                >
                    Start Quiz!
                </Button>
            </div>
        </div>
    )
}