import { useState } from "react";
import { PedidoProps } from "@/types";
import FormPedidos from "./FormPedidos";

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

	const removerPedido = (index: number) => {
		const novosPedidos = pedidos.filter((_,i) => i !== index);
		setPedidos(novosPedidos);
	};		
	return (
		<div className="lista-pedidos">
			<FormPedidos {...pedidos} add={adicionarPedido} capturar={capturarInput}/>
			
		</div>
	)
}