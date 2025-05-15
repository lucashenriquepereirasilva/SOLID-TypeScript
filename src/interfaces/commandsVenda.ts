import Commands from "./comando";

export default interface CommandsVenda<T> extends Commands<T> {
    PesquisarPorData(data: Date): Promise<T[]>
    PesquisarPorIntervalo(data_inicial: Date): Promise<T[]>

    
}