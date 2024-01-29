import "./GameOver.css"

const GameOver = ({retry}) => {
    return (
        <div>
            <h1>recomeço</h1>
            <button onClick={retry}>Recomeçar o jogo</button>
        </div>
    )
}

export default GameOver