import "./StartScreen.css"

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
        <h1>Palavras Secretas</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGame}>Começar</button>
    </div>
  )
}

export default StartScreen