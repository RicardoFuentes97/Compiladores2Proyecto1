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
{num}                       { console.log("Reconocio entero : "+ yytext); return 'ENTERO'}
[0-9]+"."[0-9]+\b        { console.log("Reconocio decimal : "+ yytext); return 'DECIMAL'}
{id}                        { console.log("Reconocio id : "+ yytext); return 'ID'}
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

    const primitivo = require('../Clases/Expreciones/Primitivo');
    
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
    const acceso= require ('../Clases/xpath/acceso');
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
    : instrucciones EOF {  $$=$1;  return $$; };

instrucciones : instruccion instrucciones     { $1.sig=$2; $$ = $1; }
            |   instruccion                   { $$= $1; }
            ;

instruccion : BARRA e       { $$ = new acceso.default($2,null);}
            | BARRABARRA e   { $$ = $2}
            | RESERV DOSPUNTOS e  {$$ = new Array();  $$.push($1); $$.push($2); $$.push($3); }
            | SIGNOO instruccion {$$ = $2}
            | BARRA RESERV DOSPUNTOS e {$$ = $4}
            | OPERADORES    {$$ = $1}
            | ID      { $$ = $1} 
            ;

RESERV :  LAST                      {$$ = $1}
    |  POSITION                     {$$ = $1}
        |  ANCESTOR RESERVLARGE     {$$ = $1 + $2}    
        |  ATTRIBUTE                {$$ = $1}
        |  ANCESORSELF              {$$ = $1}
        |  CHILD                    {$$ = $1}
        |  DESCENDANT RESERVLARGE   { $$ = $1 + $2}
        |  DESCENDANT               {$$ = $1}
        |  FOLLOWING  MENOS SIBLING   {$$ = $1+$2+$3}
        |  FOLLOWING                {$$ = $1}
        |  NAMESPACE                {$$ = $1}    
        |  PARENT                   {$$ = $1}
        |  PRECENDING               {$$ = $1}
        |  PRECENDING MENOS SIBLING {$$ = $1+$2+$3}
        |  SELF                     {$$ = $1}
        |  TEXT                     {$$ = $1}
        |  NODE                     {$$ = $1}
        | SIBLING                   {$$ = $1}
        ;

RESERVLARGE :   MENOS OR MENOS SELF  {$$ = $1+$2+$3+$4}
            |  MENOS SIBLING        {$$ = $1+$2}
            ;


OPERADORES :  OPERADORES MAS OPERADORES             {$$ = new aritmetica.default($1, '+', $3, $1.first_line, $1.last_column, false);}
            | OPERADORES MENOS OPERADORES         {$$ = new aritmetica.default($1, '-', $3, $1.first_line, $1.last_column, false);}
            | OPERADORES ASTERISCO OPERADORES         {$$ = new aritmetica.default($1, '*', $3, $1.first_line, $1.last_column, false);}
            | OPERADORES DIV OPERADORES           {$$ = new aritmetica.default($1, '/', $3, $1.first_line, $1.last_column, false);}
            | OPERADORES MODULO OPERADORES        {$$ = new aritmetica.default($1, '%', $3, $1.first_line, $1.last_column, false);}
            | DECIMAL           {$$ = new primitivo.default(Number(yytext), $1.first_line, $1.last_column,-1);}
            | ENTERO            {$$ = new primitivo.default(Number(yytext), $1.first_line, $1.last_column,-1);}       
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
    | CADENA            {$1 = $1.slice(1, $1.length-1); $$ = new primitivo.default($1, $1.first_line, $1.last_column);}
    | CHAR              {$1 = $1.slice(1, $1.length-1); $$ = new primitivo.default($1, $1.first_line, $1.last_column);}
    | TRUE              {$$ = new primitivo.default(true, $1.first_line, $1.last_column,-1);}
    | FALSE             {$$ = new primitivo.default(false, $1.first_line, $1.last_column,-1);}
    | ID                {$$=$1;}
    | DECIMAL           {$$ = new primitivo.default(Number(yytext), 1, $1.last_column,-1);}
    | ENTERO            {$$ = new primitivo.default(Number(yytext), $1.first_line, $1.last_column,-1);}        
    | e INTERROGACION e DSPNTS e {$$ = new ternario.default($1, $3, $5, @1.first_line, @1.last_column); } 
    | CORA OPERADORES CORC       {$$ = $2}
    | SIM               {$$ = $1}
    | ID CORA OPERADORES CORC {$2 = new Array(); $2.push($1); $2.push($3); $$ = $3}
    | ID CORA SIM CORC      {$$ = $3}
    | RESERV                {$$ = $1}
    ;

SIM :   ARROBA ID           { $2 = new primitivo.default($1, 1, $1.last_column, -1);  $$ = $2}  
    | ARROBA ID IGUAL CADENA {$$ = $3}
    | ARROBA ASTERISCO      {$$= $1}
    | ASTERISCO             {$$ =$1}
    | OR e                  {$$ = $2}
    ;