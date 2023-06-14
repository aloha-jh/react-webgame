import React,{ Component , useState } from 'react';
import Try from './component/Try'
 

const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
      const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      array.push(chosen);
    }
    return array;
};

const NumberBaseball = ()=>{
    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState('');
    const [answer, setAnswer] = getNumbers();
    const [tryies, setTryies] = [];

    const onChnageUserInput = (e)=>{
        setUserInput(e.target.value)
    }

    const onSubmitForm = () =>{
        e.preventDefault();
        if( userInput === answer.join('') ){ // 답이맞는지 비교
            //맞았을때
            setTries((t)=>([
                ...t,
                {
                    try:value,
                    result:'홈런!'
                }
            ]));
            setResult('홈런!');
            alert('게임 다시 시작')            
        }else{ //틀렸을때 
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;

            //10번이상 틀림 - 게임초기화시키기
            if(tryies.length>=9){
                setResult(`10번넘게 틀려서 실패 답은${answer.join(',')}`)
                alert('게임다시 시작');
                setUserInput(''); setAnswer(getNumber()); setTryies([]);
                
            }else{ //10번이하 틀림 - 현재 몇볼 몇스트라이크인지 알려주기
                console.log('답은', answer.join(''));
                for(let i=0; i<4; i++){
                    if(answerArray[i] === answer[i]){
                        console.log('strike', answerArray[i], answer[i])
                        strike ++;
                    }else if(answer.includes(answerArray[i])){
                        console.log('ball',answerArray[i],answer.indexOf(answerArray[i]));
                        ball +=1;
                    }
                }
                setTries(t=>([
                    ...t,
                    {
                        try:value,
                        result:'4'
                    }
                ]))

            }



        }
    }

    const fruits = [['바나','노랑'],['포도','보라'],['사과','빨강'],['복숭아','분홍']]
    return(
        <>
        <div>number baseball</div>
        <form onSubmit={onSubmitForm}>
            <input type="number" maxLength={4} value={userInput} onChange={onChnageUserInput} />
        </form>
        <p>시도한 횟수 :{tryies != null ? tryies.length : 0}</p>
        <ul>
            {
                fruits.map((v,i)=>{
                    return(
                        <Try value={v} index={i} key={v+i}/>
                    )
                })
            }
        </ul>
        </>
    )
}

export default NumberBaseball;