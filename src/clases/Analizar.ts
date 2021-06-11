import * as sintactico from "../Analizadores/gramatica"
import * as xml from "../Analizadores/XML";
import Controlador from "./Controlador";
import { TablaSimbolos } from "./TablaSimbolos/TablaSimbolos";

export class Analizador {
    public ejecutar(input):any {
        console.log("vamos a analizar la entrada");
     
            let ast= xml.parse(input);
            
            let controlador = new Controlador();
            let ts_globla =new TablaSimbolos(null,"Global");

            ast.ejecutar(controlador,ts_globla);
            /*controlador.ambito="Globlal";*/
            //controlador.graficarEntornos(controlador,ts_globla,"Globlal");
            let ts_html =controlador.graficar_ts(controlador,ts_globla);
           /* let error_html = controlador.graficar_Semantico (controlador,ts_globla);*/
            let retorno = {"ts": ts_html ,"consola":controlador.consola };
            console.log(ts_html);
            return retorno;
        
    }
    public recorrer(input){

        try {
            let ast = sintactico.parse(input);
            let nodo_ast = ast.recorrer();

            return nodo_ast;
            
        } catch (error) {
            
        }
    }

}