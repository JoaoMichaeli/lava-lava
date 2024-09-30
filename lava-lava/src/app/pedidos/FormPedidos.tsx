import { PedidoProps } from "@/types";
import { ActionsProps } from "@/types";


export default function FormPedidos({marca, modelo, placa, nome, tipoLavagem, captura, add} : PedidoProps&ActionsProps){
	return (
		<div className="container" onSubmit={captura}>
			<h2>Cadastrar Pedido</h2>
			<form onSubmit={add} >
				<input type="text" name="marca" placeholder="Marca" />
				<input type="text" name="modelo" placeholder="Modelo" />
				<input type="text" name="placa" placeholder="Placa" />
				<input type="text" name="nome" placeholder="Nome" />
				<input type="text" name="tipoLavagem" placeholder="tipo lavagem" />
				<button type="submit">Adicionar Pedido</button>
			</form>
		</div>
	)
}