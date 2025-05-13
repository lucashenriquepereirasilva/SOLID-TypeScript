import Pessoa from "./Pessoa";

export default class Autor extends Pessoa {
    [x: string]: any;
    genero_literario!: string
}