const React = require('react');
const ReactDom = require('react-dom');

const Wordrelay = require('./Wordrelay');
const Gugudan = require('./Gugudan');
import NumberBaseball from './NumberBaseball';

//ReactDom.createRoot(document.querySelector('#root').render(<Wordrelay/>))

// ReactDom.render(<Gugudan />, document.querySelector('#root'));
//ReactDom.render(<Wordrelay />, document.querySelector('#root'));
ReactDom.render(<NumberBaseball />, document.querySelector('#root'));