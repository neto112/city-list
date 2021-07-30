import React from 'react';
import './App.css';

function App() {
  const [newZip, setNewZip] = React.useState<string>("");
  const [zipList, setZipList] = React.useState<string[]>([]);
  

  return (
    <div className="App">
      <div className="meio">
        <h1><svg viewBox="0 0 20 20" height="2em" width="2em">
          <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
        </svg>
          Cidades TOP</h1>

        <div className="placeholder">
          <form onSubmit={event => {event.preventDefault(); 
          setZipList([...zipList, newZip]);
            }}
          >
            <input placeholder="Digitar um CEP" type="text"
              onChange={event => setNewZip(event.target.value)}
              value={newZip} required
            />

            <button type="submit">+</button>
          </form>
        </div>
        <ul>
          {zipList.map((severalZip) => (
            <li>{severalZip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

// OK - A lista precisa começar vazia;
// Está sendo possível adicionar um item em branco;
// OK - Apertar tecla Enter para adicionar o item não está funcionando;
// Está sendo possível adicionar itens repetidos.


// Add os itens, porém se a lista ficar vazia, não funciona.
// const addNewZip = (opa: string) => {
//  const newZipList = [...zipList, opa];
//  setZipList(newZipList);
// };

// const addCepInput = () => {
//  addNewZip(newZip);
// };

// colocar uma tag de form terá acesso ao evento submit
// que fica escutando o botão e permite o usuário add um new item
// ao apertar a tecla Enter. P/ isso, add uma chamada
// event.preventDefault()
// porém, vai interferir um never[], para isso add string[].
// Exibindo itens da lista 
// {zipList.map((severalZip, index) => (
// <li key={index}>{severalZip}</li>
// ))}

//<div className="placeholder">
//<form
//  onSubmit={event => {
//    event.preventDefault();
//    setZipList([...zipList, newZip]);
//  }}
//>
//  <input
//    placeholder="Digitar um CEP" type="text"
//    onChange={event => setNewZip(event.target.value)}
//    value={newZip}
//  />
//
//  <button type="submit">+</button>
//</form>
//</div>
//<ul>