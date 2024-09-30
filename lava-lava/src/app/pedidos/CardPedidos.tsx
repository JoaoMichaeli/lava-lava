import { FaTrashAlt as X } from "react-icons/fa";

import { PedidoProps, RemoveProps, ActionsProps } from "@/types";

export default function CardPedidos({nome, placa, modelo, marca, tipoLavagem, remove}:PedidoProps&RemoveProps){
    return(
        <div className="cardPedido">
            <button onClick={() => remove(placa)}> <X></X> </button>
            <p>Placa: {placa}</p>
            <p>Nome Cliente: {nome} </p>
            <p>Modelo: {modelo}</p>
            <p>Marca: {marca}</p>
            <p>Tipo de Lavagem: {tipoLavagem}</p>
        </div>
    )
}