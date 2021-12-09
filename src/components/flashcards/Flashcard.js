import { useState } from "react"

import TurnButton from "./TurnButton";
import AnswerButtons from "./AnswerButtons";

export default function Flashcard({ flashcardData }) {
    const { question, answer, counter } = flashcardData

    const [containerFlashcardClasses, setContainerFlashcardClasses] = useState(['container-flashcard'])
    const [flashcardClasses, setFlashcardClasses] = useState(['flashcard'])

    return (
        <div className={containerFlashcardClasses.join(' ')}>
            <div className={flashcardClasses.join(' ')}>
                <div class="back-face face">
                    <div className='flashcard-counter'>
                        {counter}
                    </div>

                    <span>
                        O que é JSX?
                    </span>

                    <TurnButton onClick={() => setFlashcardClasses([...flashcardClasses, 'turned'])}/>
                </div>
                <div class="front-face face">
                    <span>
                        O que é JSX?
                    </span>

                    <div className='flashcard-counter'>
                        {counter}
                    </div>

                    <p>
                        Uma extensão de linguagem do JavaScript
                    </p>
                    
                    {
                        flashcardClasses.includes('answered') ?
                        <TurnButton onClick={() => setContainerFlashcardClasses([...containerFlashcardClasses, 'passed'])}/>
                        :
                        <AnswerButtons flashcardClasses={flashcardClasses} setFlashcardClasses={setFlashcardClasses}/>
                    }
                </div>
            </div>
        </div>   
    )
}