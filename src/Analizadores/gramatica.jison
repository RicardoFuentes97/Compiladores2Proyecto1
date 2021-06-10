/* Definicion lexica */
%lex
%options case-insensitive
%option yylineno

/* Expresiones regulares */
num     [0-9]+
id      [a-zñA-ZÑ_][a-zñA-ZÑ0-9_]*
//--> Cadena
escapechar  [\'\"\\ntr]
escape      \\{escapechar}
aceptacion  [^\"\\]+
cadena      (\"({escape} | {aceptacion})*\")

%%

/* Operadores Relacionales */
"<="                    { console.log("Reconocio : "+ yytext); return 'MENORIGUAL'}
">="                    { console.log("Reconocio : "+ yytext); return 'MAYORIGUAL'}
"="                     { console.log("Reconocio : "+ yytext); return 'IGUAL'}
"<"                     { console.log("Reconocio : "+ yytext); return 'MENORQUE'}
">"                     { console.log("Reconocio : "+ yytext); return 'MAYORQUE'}
"!="                    { console.log("Reconocio : "+ yytext); return 'DIFERENTE'}

/* Simbolos del programa */
"("                     { console.log("Reconocio : "+ yytext); return 'PARA'}
"//"                    { console.log("Reconocio : "+ yytext); return 'BARRABARRA'}
"/"                     { console.log("Reconocio : "+ yytext); return 'BARRA'}
")"                     { console.log("Reconocio : "+ yytext); return 'PARC'}
"["                     { console.log("Reconocio : "+ yytext); return 'CORA'}
"]"                     { console.log("Reconocio : "+ yytext); return 'CORC'}
"@"                     { console.log("Reconocio : "+ yytext); return 'ARROBA'}
"."                     { console.log("Reconocio : "+ yytext); return 'PUNTO'}
".."                    { console.log("Reconocio : "+ yytext); return 'PUNTOPUNTO'}
"|"                     { console.log("Reconocio : "+ yytext); return 'SIGNOO'}
"::"                    { console.log("Reconocio : "+ yytext); return 'DOSPUNTOS'}

/* Operadores Aritmeticos */
"+"                     { console.log("Reconocio : "+ yytext); return 'MAS'}
"-"                     { console.log("Reconocio : "+ yytext); return 'MENOS'}
"*"                     { console.log("Reconocio : "+ yytext); return 'ASTERISCO'}
"div"                   { console.log("Reconocio : "+ yytext); return 'DIV'}
"mod"                   { console.log("Reconocio : "+ yytext); return 'MODULO'}


/* Operadores Logicos */
"and"                   { console.log("Reconocio : "+ yytext); return 'AND'}
"or"                    { console.log("Reconocio : "+ yytext); return 'OR'}


/* Palabras reservadas */
"last()"                { console.log("Reconocio : "+ yytext); return 'LAST'}
"position()"            { console.log("Reconocio : "+ yytext); return 'POSITION'}
"ancestor"            { console.log("Reconocio : "+ yytext); return 'ANCESTOR'}
"attribute"             { console.log("Reconocio : "+ yytext); return 'ATTRIBUTE'}
"self"    { console.log("Reconocio : "+ yytext); return 'SELF'} 
"child"                 { console.log("Reconocio : "+ yytext); return 'CHILD'}
"descendant"            { console.log("Reconocio : "+ yytext); return 'DESCENDANT'}
"following"             { console.log("Reconocio : "+ yytext); return 'FOLLOWING'}
"sibling"     { console.log("Reconocio : "+ yytext); return 'SIBLING'}
"namespace"             { console.log("Reconocio : "+ yytext); return 'NAMESPACE'}
"parent"                { console.log("Reconocio : "+ yytext); return 'PARENT'}
"preceding"             { console.log("Reconocio : "+ yytext); return 'PRECENDING'}
"text()"                  { console.log("Reconocio : "+ yytext); return 'TEXT'}
"node()"                  { console.log("Reconocio : "+ yytext); return 'NODE'}


/* SIMBOLOS ER */
{num}                       { console.log("Reconocio : "+ yytext); return 'ENTERO'}
[0-9]+"."[0-9]+\b        { console.log("Reconocio : "+ yytext); return 'DECIMAL'}
{id}                        { console.log("Reconocio : "+ yytext); return 'ID'}
{cadena}                    { console.log("Reconocio : "+ yytext); return 'CADENA'}

[\s\r\n\t]                  { /* skip whitespace */ }

<<EOF>>               return 'EOF'

/* Errores lexicos */
.                     { console.log("Error Lexico "+yytext
                        +" linea "+yylineno
                        +" columna "+(yylloc.last_column+1));
                                      
                        }

/lex

/* Area de imports */
%{
    const evaluar = require('../Clases/Evaluar');
    const aritmetica= require('../Clases/Expreciones/Operaciones/Aritmetica');
    const relacional = require('../Clases/Expreciones/Operaciones/Relaciones');
    const logica = require('../Clases/Expreciones/Operaciones/Logicas');
    const primitivo= require('../Clases/Expreciones/Primitivo');
    const identificador= require('../Clases/Expreciones/Identificador');
    const ternario= require('../Clases/Expreciones/Ternario');

    const ast =require('../Clases/AST/Ast');
    const declaracion = require ('../Clases/Instrucciones/Declaracion');
    const asignacion = require ('../Clases/Instrucciones/Asignacion');
    const funcion = require ('../Clases/Instrucciones/Funcion');
    const llamada = require ('../Clases/Instrucciones/Llamada');
    const ejecutar = require ('../Clases/Instrucciones/Ejecutar');
    const Print = require ('../Clases/Instrucciones/Print');
    const Ifs = require ('../Clases/Instrucciones/SentenciaControl/Ifs');
    const While = require ('../Clases/Instrucciones/SentenciaCiclos/While');
    const dowhile =require ('../Clases/Instrucciones/SentenciaCiclos/DoWhile');
    const For =require ('../Clases/Instrucciones/SentenciaCiclos/For');
    const simbolo= require ('../Clases/TablaSimbolos/Simbolos');
    const tipo= require ('../Clases/TablaSimbolos/Tipo');

    const detener = require ('../Clases/Instrucciones/SentenciaTransferencia/Break');
    const continuar = require ('../Clases/Instrucciones/SentenciaTransferencia/continuar');
    const retornar = require ('../Clases/Instrucciones/SentenciaTransferencia/retornar');

    const sw = require ('../Clases/Instrucciones/SentenciaControl/SW');
    const cs = require ('../Clases/Instrucciones/SentenciaControl/CS');
%}

/* Precedencia de operadores */

%right 'INTERROGACION'
%left 'OR'
%left 'AND'
%right 'NOT'
%left 'UNARIO'
%left 'IGUALIGUAL' 'DIFERENTE' 'MENORQUE' 'MENORIGUAL' 'MAYORQUE'  'MAYORIGUAL' 
%left  'DIV' 'MODULO' 'ASTERISCO'
%left 'MAS' 'MENOS' 


 
%start inicio

%% /* Gramatica */


inicio
    : instrucciones EOF { console.log($1); $$= new ast.default($1);  return $$; }
    ;

instrucciones : instrucciones instruccion   { $$ = $1; $$.push($2); }
            | instruccion                   {$$= new Array(); $$.push($1); }
            ;

instruccion : BARRA e       { $$ = $2}
            | BARRABARRA e  { $$ = $2}
            | RESERV DOSPUNTOS e
            |  SIGNOO instruccion 
            | BARRA RESERV DOSPUNTOS e
            | OPERADORES
            ;

RESERV :  LAST
        |  POSITION
        |  ANCESTOR RESERVLARGE
        |  ATTRIBUTE
        |  ANCESORSELF
        |  CHILD
        |  DESCENDANT RESERVLARGE
        |  FOLLOWING
        |  NAMESPACE
        |  PARENT
        |  PRECENDING
        |  SELF
        |  TEXT
        |  NODE
        | SIBLING 
        ;

RESERVLARGE :  MENOS OR MENOS SELF
            |  MENOS SIBLING
            ;

OPERADORES :  OPERADORES MAS OPERADORES             {$$ = new aritmetica.default($1, '+', $3, $1.first_line, $1.last_column, false);}
            | OPERADORES MENOS OPERADORES         {$$ = new aritmetica.default($1, '-', $3, $1.first_line, $1.last_column, false);}
            | OPERADORES ASTERISCO OPERADORES         {$$ = new aritmetica.default($1, '*', $3, $1.first_line, $1.last_column, false);}
            | OPERADORES DIV OPERADORES           {$$ = new aritmetica.default($1, '/', $3, $1.first_line, $1.last_column, false);}
            | OPERADORES MODULO OPERADORES        {$$ = new aritmetica.default($1, '%', $3, $1.first_line, $1.last_column, false);}
            | DECIMAL           {$$ = new primitivo.default(Number(yytext), $1.first_line, $1.last_column);}
            | ENTERO            {$$ = new primitivo.default(Number(yytext), $1.first_line, $1.last_column);}
            ;

e : e AND e           {$$ = new logica.default($1, '&&', $3, $1.first_line, $1.last_column, false);}
    | e OR e            {$$ = new logica.default($1, 'OR', $3, $1.first_line, $1.last_column, false);}
    | NOT e             {$$ = new logica.default($2, '@', null, $1.first_line, $1.last_column, true);}
    | e MAYORQUE e      {$$ = new relacional.default($1,'>', $3, $1.first_line, $1.last_column, false);}
    | e MAYORIGUAL e    {$$ = new relacional.default($1,'>=', $3, $1.first_line, $1.last_column, false);}
    | e MENORQUE e      {$$ = new relacional.default($1,'<', $3, $1.first_line, $1.last_column, false);}
    | e MENORIGUAL e    {$$ = new relacional.default($1,'<=', $3, $1.first_line, $1.last_column, false);}
    | e DIFERENTE e     {$$ = new relacional.default($1,'!=', $3, $1.first_line, $1.last_column, false);}
    | MENOS e %prec UNARIO {$$ = new aritmetica.default($2, 'UNARIO', null, $1.first_line, $1.last_column, true);}
    | PARA e PARC       {$$ = $2;}
    | CADENA            {$1 = $1.slice(1, $1.length-1); $$ = new primitivo.default($1, $1.first_line, $1.last_column);}
    | CHAR              {$1 = $1.slice(1, $1.length-1); $$ = new primitivo.default($1, $1.first_line, $1.last_column);}
    | TRUE              {$$ = new primitivo.default(true, $1.first_line, $1.last_column);}
    | FALSE             {$$ = new primitivo.default(false, $1.first_line, $1.last_column);}
    | ID                { $$ = $1}
    | DECIMAL           {$$ = new primitivo.default(Number(yytext), $1.first_line, $1.last_column);}
    | ENTERO            {$$ = new primitivo.default(Number(yytext), $1.first_line, $1.last_column);}        
    | e INTERROGACION e DSPNTS e {$$ = new ternario.default($1, $3, $5, @1.first_line, @1.last_column); } 
    | ID INCRE          
    | ID DECRE          
    | ID PARA PARC       { $$ = new llamada.default($1.toLowerCase() , [],@1.first_line, @1.last_column ); }
    | ID PARA lista_exp PARC { $$ = new llamada.default($1.toLowerCase() , $3 ,@1.first_line, @1.last_column ); }
    | SIM   
    | ID CORA e CORC
    | RESERV
    ;

SIM :   ARROBA ID             {$$ = new logica.default($2, '@', null, $1.first_line, $1.last_column, true);}
    | ARROBA ID IGUAL CADENA
    | ARROBA ASTERISCO      
    | ASTERISCO   
    | OR e
    ;