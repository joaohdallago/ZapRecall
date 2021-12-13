export default function AnswerButtons({ flashcardClasses, setFlashcardClasses, userAnswersListState }) {
    const [userAnswersList, setUserAnswersList] = userAnswersListState;

    function selectAnswer(answer) {
        if (answer === 'Aprendi agora') {
            setFlashcardClasses([...flashcardClasses, 'answered']);
            setUserAnswersList([...userAnswersList, answer]);
        };

        if (answer === 'Não lembrei') {
            setFlashcardClasses([...flashcardClasses, 'answered', 'border-red']);
            setUserAnswersList([...userAnswersList, answer]);
        };

        if (answer === 'Lembrei com esforço') {
            setFlashcardClasses([...flashcardClasses, 'answered', 'border-green']);
            setUserAnswersList([...userAnswersList, answer]);
        };

        if (answer === 'Zap!') {
            setFlashcardClasses([...flashcardClasses, 'answered', 'border-yellow']);
            setUserAnswersList([...userAnswersList, answer]);
        };
    }

    return (
                <div className='answer-buttons'>
                    <button onClick={() => selectAnswer('Aprendi agora')}>Aprendi agora</button>
                    
                    <button className='border-red' onClick={() => selectAnswer('Não lembrei')}>Não lembrei</button>

                    <button className='border-green' onClick={() => selectAnswer('Lembrei com esforço')}>Lembrei com esforço</button>
                    
                    <button className='border-yellow' onClick={() => selectAnswer('Zap!')}>Zap!</button>
                </div>
    )
}