export default function TurnButton({ onClick }) {
    return (
        <button className='turn-button' onClick={onClick}>
            <img src='assets/turn.png'/>
        </button>
    )
}