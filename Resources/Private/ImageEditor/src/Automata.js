import React, { Component } from 'react';

class Automata extends Component {
    prepareMachine(machine, state, renderMap) {
        this.machine = machine;

        this.renderMap = renderMap;

        this.state = {
            current: state
        };
    }

    transition(action) {
        const currentState = this.state.current;
        const transition = this.machine[currentState][action];

        if (transition) {
            const { name, ...state } = transition(currentState);
            this.setState({
                current: name,
                ...state
            });
        }
    }

    render() {
        const {current} = this.state;
        return this.renderMap[current]();
    }
}

export default Automata;
