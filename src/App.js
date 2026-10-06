
import './App.css';

function App() {
  const name = 'Mychael';
  const newName = name.toLocaleUpperCase();

  const sum = (num1, num2) => {
    return num1 + num2;
  }

  const url = "https://via.placherholder.com/150";

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>

      <p>Somatoria: {7 + 4}</p>
      <p>Somatoria: {sum(3, 6)}</p>

      <img src={url} alt="Minha Imagem" />
    </div>
  );
}

export default App;
