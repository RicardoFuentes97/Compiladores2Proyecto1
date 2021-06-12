import Nodo from "../AST/Nodo";
import Controlador from "../Controlador";
import { Instruccion } from "../Interfaces.ts/Instruccion";
import { TablaSimbolos } from "../TablaSimbolos/TablaSimbolos";


export default class acceso implements Instruccion{

    public id:string;
    public sig:acceso;

    constructor(id:string,sig:acceso){
        this.id=id;
        this.sig=sig;
    }
    ejecutar(controlador: Controlador, ts: TablaSimbolos) {
       if(this.sig!=null){
            for( let tssig of ts.sig){
                if(this.id==tssig.identificador){
                    this.sig.ejecutar(controlador,tssig.sig);
                }
            }
       }else{
           for( let informacion of ts.tabla){
               console.log("entre ");
               if(informacion.identificador==this.id){
                console.log("si exite");
                   controlador.append(informacion.sim.objeto.gethtml(""));
               }
           }
       }
    }
    recorrer(): Nodo {
        throw new Error("Method not implemented.");
    }

}