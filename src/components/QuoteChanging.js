import React, {Component} from "react";



const textArray = ['eat', 'sleep', 'drink', 'snore', 'foo', 'buzz', 'whatever'];

export class QuoteChanging extends Component {
    constructor() {
        super();
        this.state = { textIdx: 0 };
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
        let currentIdx = this.state.textIdx;
        this.setState({ textIdx: currentIdx + 1 });
        }, 1500);
    }

        componentDidUnmount() {
        clearInterval(this.timeout);
        }

        render() {
        let textThatChanges = textArray[this.state.textIdx % textArray.length];

        return (
        <section>
        <p>I like to <span>{textThatChanges}</span></p>
        </section>
        )
    }
    }






