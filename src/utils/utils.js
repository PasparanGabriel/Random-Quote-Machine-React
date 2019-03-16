import quotes from '../date/quotes';

const getRandom = function() {

    return Math.floor((Math.random() * quotes.length));
};

export default getRandom;
