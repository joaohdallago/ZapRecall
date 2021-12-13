export default function FinalResult({ userAnswersList }) {
    
    return (
        <>
            {
                userAnswersList.includes('Não lembrei') || userAnswersList.includes('Aprendi agora') ?
                <div className='final-result'>
                    <span>Putz.. 😢</span>
                    <p>Você esqueceu alguns flashcards..Não desanime! Na próxima você consegue!</p>
                </div>
                :
                <div className='final-result'>
                    <span>PARABÉNS! 🥳</span>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </div>
            }
        </>
    )
}