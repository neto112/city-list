import { CepInfo } from "./App"
import "./App.css"

export default function ItemCidade(props: { cepInfo: CepInfo}) {
  return <li key={props.cepInfo.cep}>
  <div>
    <strong>{props.cepInfo.city}</strong>
  </div>
  <div>
    <small>{props.cepInfo.cep}</small>
  </div>
  <span>
    {props.cepInfo.street}, {props.cepInfo.neighborhood} -{" "}
    {props.cepInfo.state}
  </span>
  </li>
}