import "./App.css";
import "./App.tsx";

export default function ItemCidade(props:any) {
  return <li key={props.itemDaLista.cep}>
  <div>
    <strong>{props.itemDaLista.city}</strong>
  </div>
  <div>
    <small>{props.itemDaLista.cep}</small>
  </div>
  <span>
    {props.itemDaLista.street}, {props.itemDaLista.neighborhood} -{" "}
    {props.itemDaLista.state}
  </span>
  </li>
};
