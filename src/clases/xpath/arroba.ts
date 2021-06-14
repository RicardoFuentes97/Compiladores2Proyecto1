import Nodo from "../AST/Nodo";
import Controlador from "../Controlador";
import { Instruccion } from "../Interfaces.ts/Instruccion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";

export default class barrabarra implements Instruccion{

    public id:string;
    public sig;

    constructor(id:string,sig){
        this.id=id;
        this.sig=sig;
    }

    ejecutar(controlador: Controlador, ts: TablaSimbolos) {
        if(this.sig!=null){
            this.siguiente(controlador,ts);
        }else{
            this.obtenerall(controlador,ts);
        }
    }
    
    obtenerall(controlador: Controlador, ts: TablaSimbolos) {
        if(ts!=null){
            console.log(this.id);
            for( let informacion of ts.tabla){
                console.log(informacion.identificador);
                if(informacion.identificador==this.id){
                    controlador.append(informacion.sim.objeto.gethtml(""));
                }
            }
            for (let tssig of ts.sig ){
                this.obtenerall(controlador,tssig.sig);
            } 
        }
    }
    
    siguiente(controlador: Controlador, ts: TablaSimbolos) {
        if(ts!=null){
            for (let tssig of ts.sig ){
                if(this.id==tssig.identificador){
                    console.log(this.id);
                    this.sig.ejecutar(controlador,tssig.sig);
                }else{
                    this.siguiente(controlador,tssig.sig);
                }
            } 
        }
    }
    recorrer(): Nodo {
        throw new Error("Method not implemented.");
    }

}