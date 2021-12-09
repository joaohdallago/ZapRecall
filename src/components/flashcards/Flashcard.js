import { useState } from "react"

import TurnButton from "./TurnButton";
import AnswerButtons from "./AnswerButtons";

export default function Flashcard() {
    const [isTurned, setIsTurned] = useState(false)
    const [asnwerData, setAnswerData] = useState({isAnswered: false, borderColor: ''})
    const [isPassed, setIsPassed] = useState(false)

    const {isAnswered, borderColor} = asnwerData;

    return (
        <div className={`
            flashcard
            ${isTurned && 'turned'}
            ${isAnswered && `answered ${borderColor}`}
            ${isPassed && 'passed'}
        `}>
            <div class="back-face face">
                <div className='flashcard-counter'>
                    1/8
                </div>

                <span>
                    O que é JSX?
                </span>

                <TurnButton onClick={() => setIsTurned(true)}/>
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
                    <TurnButton onClick={() => setIsPassed(true)}/>
                    :
                    <AnswerButtons setAnswerData={setAnswerData}/>
                }
            </div>
        </div>   
    )
}