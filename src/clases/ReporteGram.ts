import * as xpath from "../Analizadores/gramatica"
import * as xml from "../Analizadores/XML";


export class ReporteGram{
    private static generador: ReporteGram;
    public code: string[];

    constructor(){
        this.code = [];
    }

    public static getInstancia(produccion: string) {
        if(this.generador == null){
            this.generador = new this();
        }
        this.generador.code.push(produccion);
    }

    public getSoloCode() {
        return this.code.join('\n');
    }

    
}
