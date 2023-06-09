const React = require('react');
const { useState, useRef } = React;

const Wordrelay=()=>{
    const [word, setWord] = useState('지나');
    //const [userInput, setUserInput ] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onChangeInput = (e)=>{
        setUserInput(e.currentTarget.value);
    }
    const onSubmitForm = (e)=>{
        e.preventDefault();
        console.log(e.target.children)
        console.log(e.target.children.word)
        if(word[word.length-1]=== e.target.querySelector('#word').value[0]){
            setResult('딩동댕');
            //setWord(userInput);
            //setUserInput('');
            setWord(e.target.querySelector('#word').value);
            e.target.querySelector('#word').value=''; 
        }else{
            setResult('땡');
            setUserInput('');
        }
        inputRef.current.focus();
    } 
    return(
        <div>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>  
                <input id="word" ref={inputRef}/>
                <button>입력</button>
            </form>
            <div>{result}</div>
        </div>
    )
}
module.exports=Wordrelay;