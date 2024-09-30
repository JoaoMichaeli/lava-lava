import { PedidoProps } from "@/types";

export default function FormPedidos({marca, modelo, placa, nome, tipoLavagem} : PedidoProps){
	return (
		<div className="container" onSubmit={capturarInput}>
			<h2>Cadastrar Pedido</h2>
			<form onSubmit={adicionarPedido} >
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