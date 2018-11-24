import React from 'react';

export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: props.rowValue };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addList(this.state.value);
        this.setState({ value: "" });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </label>
                <button type="Submit" >Submit</button>

            </form>
        );
    }

}


NameForm.defaultProps = {
    addList: () => { },
    rowValue: '',
}