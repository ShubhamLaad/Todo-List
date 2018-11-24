import React, { Component } from 'react';
class ToggleName extends Component {

    toggle(name) {
        this.setState = ({
            name: name,
        });
    }

    toggleName() {
        this.props.onClick("Pravin")
    }

    render() {
        return (
            <div>
                <h1>Myfrined{this.state.name}</h1>
                <button onClick={this.toggleName.bind(this)}>Toggle</button>
            </div>
        );
    }
}

export default ToggleName;