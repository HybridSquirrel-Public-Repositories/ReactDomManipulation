import React, {Component} from "react";
import {ProgressBar} from "react-bootstrap";

const intArray = [0, 10, 20, 30, 60, 80, 100];

export class LoadingBar extends Component {
    constructor() {
        super();
        this.state = { IntIdx: 0 };
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let currentIdx = this.state.IntIdx;
            this.setState({ IntIdx: currentIdx + 1 });
        }, 1500);
    }

    componentDidUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        let progressThatChanges = intArray[this.state.IntIdx % intArray.length];

        return (
            <section>
                <ProgressBar striped variant="success" now={progressThatChanges} />
            </section>
        )
    }
}


