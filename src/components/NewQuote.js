import React from 'react';

class NewQuote extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    handleClick = () => {
        this.props.handleClick();
    };

    render() {
        return (
            <button onClick={this.handleClick} className="btn btn-success" id="new-quote">
                <i className="fas fa-redo"></i> New quote
            </button>
        );
    }
}

export default NewQuote;
