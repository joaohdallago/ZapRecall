import Flashcards from "./flashcards/Flashcards"


export default function Home({ setScreen }) {
    return (
        <div className="home">
            <img src="assets/logo.png" alt="logo" className="logo" />

            <button onClick={() => setScreen(<Flashcards />)} data-identifier="start-zap-recall">
                <div>
                    Praticar react
                    <img src="assets/next.png" alt="next icon"/>
                </div>
            </button>
        </div>
    )
}