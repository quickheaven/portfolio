import React, { Component } from "react";

const TITLES = [
    'a Technical Specialist',
    'a Java Craftsman who explores the realms of ML/AI using Python',
    'a enthusiastic and continuous learner'
];

class Title extends Component {
    state = { titleIndex: 0 };

    componentDidMount() {
        this.animateTitles();
    }

    animateTitles = () => {
        setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex });
        }, 4000);
    }

    render() {
        const title = TITLES[this.state.titleIndex];

        return (
            <p>I am {title}</p>
        )
    }
}

export default Title;