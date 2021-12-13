import { useState } from "react"

import TurnButton from "./TurnButton";
import AnswerButtons from "./AnswerButtons";

export default function Flashcard({ flashcardData, userAnswersListState }) {
    const { question, answer, counter } = flashcardData;

    const [containerFlashcardClasses, setContainerFlashcardClasses] = useState(['container-flashcard'])
    const [flashcardClasses, setFlashcardClasses] = useState(['flashcard'])
    

    return (
        <div className={containerFlashcardClasses.join(' ')} data-identifier="flashcard">
            <div className={flashcardClasses.join(' ')}>
                <div class="back-face face">
                    <div className='flashcard-counter'>{counter}</div>

                    <span>{question}</span>

                    <TurnButton onClick={() => setFlashcardClasses([...flashcardClasses, 'turned'])}/>
                </div>
                <div class="front-face face">
                    <span>{question}</span>

                    <div className='flashcard-counter' data-identifier="counter">{counter}</div>

                    <p>{answer}</p>
                    
                    {
                        flashcardClasses.includes('answered') ?
                        <TurnButton onClick={() => setContainerFlashcardClasses([...containerFlashcardClasses, 'passed'])} data-identifier="arrow"/>
                        :
                        <AnswerButtons flashcardClasses={flashcardClasses} setFlashcardClasses={setFlashcardClasses} userAnswersListState={userAnswersListState}/>
                    }
                </div>
            </div>
        </div>   
    )
}