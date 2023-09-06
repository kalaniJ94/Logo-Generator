const {JSDOM} = require('jsdom');
const { toHaveAttribute, toHaveTextContent, } = require('@testing-library/jest-dom/matchers');


expect.extend({toHaveAttribute, toHaveTextContent});


//used to setup jest code globally, make testing code cleaner. Jest has specified this file in "setupFiles", in package.json. 