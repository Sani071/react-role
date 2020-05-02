import React, { Component } from 'react';
// import { throttle, debounce } from 'throttle-debounce';

export default class CustomTextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: 1,
            minRows: 1,
            maxRows: 20000,
        };
    }

    handleChange = (event) => {
        console.log(this.props)
        const textareaLineHeight = 22;
        const { minRows, maxRows } = this.state;

        const previousRows = event.target.rows;
        event.target.rows = minRows; // reset number of rows in textarea 

        const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }

        if (currentRows >= maxRows) {
            event.target.rows = maxRows;
            event.target.scrollTop = event.target.scrollHeight;
        }

        this.setState({
            rows: currentRows < maxRows ? currentRows : maxRows,
        });
        this.props.changeHandler(event.target.value)

        // throttle(300, () => {
        //     console.log(event.target.value)
        //     this.props.changeHandler(event.target.value)
        // });
    };
    render() {
        return (
            <textarea
                rows={this.state.rows}
                value={this.state.value}
                placeholder={'Type your comment...'}
                className={'textarea'}
                onChange={this.handleChange}
            />
        )
    }
}
