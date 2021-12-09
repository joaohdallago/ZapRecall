import { useState } from "react"

import TurnButton from "./TurnButton";
import AnswerButtons from "./AnswerButtons";

export default function Flashcard() {
    const [flashcardClasses, setFlashcardClasses] = useState(['flashcard'])

    return (
        <div className={flashcardClasses.join(' ')}>
            <div class="back-face face">
                <div className='flashcard-counter'>
                    1/8
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
                    1/8
                </div>

                <p>
                    Uma extensão de linguagem do JavaScript
                </p>
                
                {
                    flashcardClasses.includes('answered') ?
                    <TurnButton onClick={() => setFlashcardClasses([...flashcardClasses, 'passed'])}/>
                    :
                    <AnswerButtons flashcardClasses={flashcardClasses} setFlashcardClasses={setFlashcardClasses}/>
                }
            </div>
        </div>   
    )
}