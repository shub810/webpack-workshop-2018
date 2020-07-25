// Here we are using CommonJs pattern to see if webpack is capable of working with it.
/**
 * 
 * @param {string} buttonName 
 * @returns {Element}
 */
const makeButton = (buttonName) => {
    return `Button: ${buttonName}`;
}

module.exports = makeButton;