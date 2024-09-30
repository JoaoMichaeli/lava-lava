export type PedidoProps ={

	marca: string;
	modelo: string;
	placa: string;
	nome: string;
	tipoLavagem: string;
}

export type RemoveProps = {
    remove: (placa:string) => void;
}
 
export type ActionsProps = {
    add: (e:React.FormEvent<HTMLFormElement>) => void;
	captura: (e:React.ChangeEvent<HTMLInputElement>) => void;
}