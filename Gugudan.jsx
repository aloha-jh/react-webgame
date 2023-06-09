const React = require('react');
const { useState, useRef } = React;

const Gugudan = () =>{
    const [firstNum, setFirstNum] = React.useState(Math.ceil(Math.random() * 9));
    const [secondNum, setSecondNum] = React.useState(Math.ceil(Math.random() * 9));
    const [userInput, setUserInput] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);

    const onChangeInput = (e) => {
        setUserInput(e.target.value)
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(userInput) === firstNum * secondNum) {
            setResult('정답', userInput);
            setFirstNum(Math.ceil(Math.random() * 9))
            setSecondNum(Math.ceil(Math.random() * 9))
            setUserInput('')
            inputRef.current.focus();
        } else {
            setResult('땡');
            setUserInpuf('');
            inputRef.current.focus();
        }
    }
    console.log('render')
    return (

        <React.Fragment>
            <div>{firstNum}곱하기 {secondNum}은?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} value={userInput} />
                <button id="button" className="btn-sumbit" htmlFor="input">입력</button>
            </form>
            <div id="result">{result}</div>
        </React.Fragment>
    )
}

module.exports = Gugudan;