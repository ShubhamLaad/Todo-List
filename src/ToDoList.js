import React from 'react';
import NameForm from './NameForm';

export default class ToDoList extends React.Component {

    constructor() {
        super();
        this.state = {
            editIndex: -1,
        }
    }

    editIndex(index) {
        this.setState({ editIndex: index });
    }

    addList(index, value) {
        this.props.editValueFromList(index, value);
        this.setState({ editIndex: -1 })
    }

    render() {

        return (
            <ul>
                {this.props.list.map((value, index) => (
                    <li key={index}>
                        {this.state.editIndex === index ?
                            <NameForm
                                rowValue={value}
                                addList={(value) => { this.addList(index, value) }} />
                            :
                            <div>
                                <span>{value} </span>
                                <button className='mybtn' onClick={() => { this.props.removeList(index) }}> X </button>
                                <button onClick={() => { this.editIndex(index) }}>edit</button>
                            </div>
                        }
                    </li>
                ))}
            </ul>
        )
    }
} 