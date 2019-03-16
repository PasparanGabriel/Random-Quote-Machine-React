import React from 'react';
import quotes from './date/quotes';
import getRandom from './utils/utils';
import Text from './components/Text';
import Hr from './components/Hr';
import Author from './components/Author';
import Tweet from './components/Tweet';
import NewQuote from './components/NewQuote';

class Quote extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "If you're not making mistakes, then you're not making decisions.",
            author: "Catherine Cook"
        };
    }

    handleClick = () => {  
        let index;
        
        do {
            index = getRandom();
        }
        while (this.state.text === quotes[index].text);
                 
        this.setState(() => ({
            text: quotes[index].text,
            author: quotes[index].author
        }));
    };

    render() {
        return (
            <div id="quote-box">
                <Text text={this.state.text} />
                <Hr />
                <Author text={this.state.author} />

                <div id="action">
                    <NewQuote handleClick={this.handleClick} />
                    <Tweet tweet={encodeURI("?text=".concat(this.state.text))} />
                </div>
            </div>
        );
    }
}

export default Quote;
