export default function AnswerButtons({ setAnswerData }) {
    return (
                <div className='answer-buttons'>
                    <button onClick={() => setAnswerData({isAnswered: true, borderColor: ''})}>Aprendi agora</button>
                    
                    <button className='border-red' onClick={() => setAnswerData({isAnswered: true, borderColor: 'border-red'})}>Não lembrei</button>

                    <button className='border-green' onClick={() => setAnswerData({isAnswered: true, borderColor: 'border-green'})}>Lembrei com esforço</button>
                    
                    <button className='border-yellow' onClick={() => setAnswerData({isAnswered: true, borderColor: 'border-yellow'})}>Zap!</button>
                </div>
    )
}