import React from 'react';
import cep from "cep-promise";
import './App.css';
import ItemCidade from './ItemCidade';

function App() {
  const [zipList, setZipList] = React.useState<string[]>([]);
  const [newZip, setNewZip] = React.useState<string>("");

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>,
    callback: { (): void; (): any; }) => event.key === "Enter" && callback();

  const handleInputChange = (event: { currentTarget: { maxLength: number; value: any; }; }) => {
    let value = event.currentTarget.value;
    value = value.replace(/\D/g, "");
    setNewZip(value)
  }

  const addNewZip = () => {
    const trimmed = newZip.trim();
    cep(trimmed).then((dados: any) => {
      console.log(dados);
      setZipList(zipList.concat(dados));
    });
  };

//    if (trimmed && !zipList.includes(trimmed)) {
//      setZipList(zipList.concat(trimmed));
//    }
  

  return (
    <div className="App">
      <div className="meio">
        <h1>
          <svg viewBox="0 0 20 20" height="2em" width="2em">
            <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
          </svg>
          Cidades TOP
        </h1>
        <div className="placeholder">
           <input
            type="text"
            maxLength={8}
            placeholder="Digitar um CEP"
            onChange={handleInputChange}
            value={newZip}
            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => onEnter(e, addNewZip)}
          />
          <button onClick={addNewZip}>+</button>
        </div>

        <ul>
          {zipList.map((itemDaLista: any) => (
<ItemCidade itemDaLista={itemDaLista}/>
          ))}
        </ul>
      </div>
    </div>
  );
}      

export default App;

// <ul className="quadrado">
// <li>
//   <div>
//     <strong>city</strong>
//   </div>
//   <div>
//     <small>cep</small>
//   </div>          
//     <span>street, neighborhood - state</span>
// </li>
// </ul> 