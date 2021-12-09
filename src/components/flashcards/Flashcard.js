import { useState } from "react"

import AnswerButtons from "./answer-buttons/AnswerButtons";

export default function Flashcard() {
    const [isTurned, setIsTurned] = useState(false)
    const [asnwerData, setAnswerData] = useState({isAnswered: false, borderColor: ''})
    //const [isPassed, setIsPassed] = useState(false)

    const {isAnswered, borderColor} = asnwerData;

    return (
        <div className={`
            flashcard ${isTurned && 'turned'}
            ${isAnswered && `answered ${borderColor}`}
        `}>
            <div class="back-face face">
                <div className='flashcard-counter'>
                    1/8
                </div>

                <span>
                    O que é JSX?
                </span>

                <button className='turn-button' onClick={() => setIsTurned(true)}>
                    <img src='assets/turn.png'/>
                </button>
            </div>
            <div class="front-face face">
                <span>
                    O que é JSX?
                </span>

                <div className='flashcard-counter'>
                    1/8
                </div>

                <p>
                    Uma extensão de linguagem do JavaScript
                </p>
                
                {
                    isAnswered ?
                    <button className='turn-button'>
                        <img src='assets/turn.png'/>
                    </button>
                    :
                    <AnswerButtons setAnswerData={setAnswerData}/>
                }
            </div>
        </div>   
    )
}