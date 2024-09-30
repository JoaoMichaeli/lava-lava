import { useState } from "react";
import { PedidoProps } from "@/types";
import FormPedidos from "./FormPedidos";
import { ActionsProps, RemoveProps } from "@/types";
import CardPedidos from "./CardPedidos";

export default function ListaPedidos(){
	const [pedidos, setPedidos] = useState<PedidoProps[]>([]);
	const [pedido, setPedido] = useState<PedidoProps>({
		marca: '',
		modelo: '',
		placa: '',
		nome: '',
		tipoLavagem: '',
	});

	// Função para capturar dados dos inputs
	const capturarInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const {name, value} = e.target;
		setPedido({...pedido, [name]: value})
	};
	
	 // Adiciona o pedido ao array de pedidos
	const adicionarPedido = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setPedidos([...pedidos, pedido]);
		setPedido({marca: '', modelo: '', placa: '', nome: '', tipoLavagem: ''})
	}

	const removerPedido = (placa: string) => {
		let novosPedidos = pedidos
		novosPedidos = novosPedidos.filter((e) => e.placa !== placa);
		setPedidos(novosPedidos);
	};		

	return (
		<div className="lista-pedidos">
			<FormPedidos {...pedido} add={adicionarPedido} captura={capturarInput}/>
			{pedidos.map((p, i) => (
				<CardPedidos key={i} {...p} remove={removerPedido}/>
			))}
		</div>
	)
}