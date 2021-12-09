export default function AnswerButtons({ flashcardClasses, setFlashcardClasses }) {
    return (
                <div className='answer-buttons'>
                    <button onClick={() => setFlashcardClasses([...flashcardClasses, 'answered'])}>Aprendi agora</button>
                    
                    <button className='border-red' onClick={() => setFlashcardClasses([...flashcardClasses, 'answered', 'border-red'])}>Não lembrei</button>

                    <button className='border-green' onClick={() => setFlashcardClasses([...flashcardClasses, 'answered', 'border-green'])}>Lembrei com esforço</button>
                    
                    <button className='border-yellow' onClick={() => setFlashcardClasses([...flashcardClasses, 'answered', 'border-yellow'])}>Zap!</button>
                </div>
    )
}