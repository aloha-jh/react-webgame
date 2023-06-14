import React from 'react';

const Try = (value) =>{  
    return (
        <li>
            like   <b>{value[0]}</b>
            <div>
                <ul>
                    <li>추가</li>
                    <li>수정</li>
                    <li>삭제</li>
                </ul>
            </div>
        </li>
    ) 
}

export default Try;