import { useState } from "react"

export default function Flashcard() {
    const [isTurned, setIsTurned] = useState(false)

    return (
        <div className={`flashcard ${isTurned && 'turned'}`}>
            <div class="back-face face">
                <div className='flashcard-counter'>
                    1/8
                </div>

                <span>
                    O que é JSX?
                </span>

                <button onClick={() => setIsTurned(true)}>
                    <img src='assets/turn.png'/>
                </button>
            </div>
            <div class="front-face face">
                Frente
            </div>
        </div>   
    )
}