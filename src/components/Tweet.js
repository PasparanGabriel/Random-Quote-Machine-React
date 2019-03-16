import React from 'react';

const Tweet = props => {

    return (
        <a  id="tweet-quote"
            className="btn btn-success float-right"
            href={"https://www.twitter.com/intent/tweet".concat(props.tweet)}
            target="_blank" rel="noopener noreferrer">

            <i className="fas fa-share"></i> Tweet quote
        </a>
    );
};

export default Tweet;
