import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import './App.css';
import {generateNumber} from "./util/Util";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: 0,
            count: 0,
            samples: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = Number(target.value);

        this.setState({
            [name]: value,
        });
    }

    onClick = () => {
        this.setState({
            samples: generateNumber(this.state.sum, this.state.count)
        })
    };

    render() {
        return (
            <div className="App">
                <Form className="sample-generator">
                    <label>
                        Sum
                        <input
                            name="sum"
                            type="number"
                            value={Number(this.state.sum).toString()}
                            min="0"
                            onChange={this.handleInputChange}/>
                    </label>
                    <br/>
                    <label>
                        Count
                        <input
                            name="count"
                            type="number"
                            value={Number(this.state.count).toString()}
                            max={this.state.sum}
                            min="0"
                            onChange={this.handleInputChange}/>
                    </label>
                    <Button name="generate" onClick={() => this.onClick()}>
                        Generate
                    </Button>
                </Form>
                <div className="samples">
                    <p>
                        {this.state.samples.join(", ")}
                    </p>
                </div>
            </div>
        );
    }
}

export default App;
