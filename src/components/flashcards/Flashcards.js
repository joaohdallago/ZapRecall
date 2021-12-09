import Flashcard from "./Flashcard"

export default function Flashcards() {
    const flashcardList = [
        {
            question: 'O que é JSX?',
            answer: 'Uma extensão de linguagem do JavaScript',
            counter: '2/8'
        },

        {
            question: 'O que é JSX?',
            answer: 'Uma extensão de linguagem do JavaScript',
            counter: '1/8'
        }
    ]

    return (
        <div className='container'>
            {flashcardList.map(flashcardData => <Flashcard flashcardData={flashcardData}/>)}
        </div>
    )
}