import { useState } from 'react';

import Flashcard from "./Flashcard"
import FinalResult from '../final-result/FinalResult';

export default function Flashcards() {
    const userAnswersListState = useState([])

    const [userAnswersList, setUserAnswersList] = userAnswersListState;
    console.log(userAnswersList)

    const flashcardList = [
        {
            question: 'Usamos estado (state) para __',
            answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
            counter: '8/8'
        },

        {
            question: 'Usamos props para __',
            answer: 'passar diferentes informações para componentes',
            counter: '7/8'
        },

        {
            question: 'Usamos o npm para __ ',
            answer: 'gerenciar os pacotes necessários e suas dependências',
            counter: '6/8'
        },

        {
            question: 'O ReactDOM nos ajuda __ ',
            answer: 'interagindo com a DOM para colocar componentes React na mesma',
            counter: '5/8'
        },

        {
            question: 'Podemos colocar __ dentro do JSX',
            answer: 'expressões',
            counter: '4/8'
        },

        {
            question: 'Componentes devem iniciar com __',
            answer: 'letra maiúscula',
            counter: '3/8'
        },

        {
            question: 'O React é __',
            answer: 'uma biblioteca JavaScript para construção de interfaces',
            counter: '2/8'
        },

        {
            question: 'O que é JSX?',
            answer: 'Uma extensão de linguagem do JavaScript',
            counter: '1/8'
        }
    ]

    

    return (
        <>
            {
                userAnswersList.length === flashcardList.length ?
                <FinalResult userAnswersList={userAnswersList}/>
                :
                <div className='container'>
                    {flashcardList.map(flashcardData => <Flashcard flashcardData={flashcardData} userAnswersListState={userAnswersListState} />)}
                </div>
            }
        </>
    )
}