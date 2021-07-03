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

/* Simbolos del programa */
"("                     { console.log("Reconocio : "+ yytext); return 'PARA'}
"//"                     { console.log("Reconocio : "+ yytext); return 'BARRABARRA'}
"/"                     { console.log("Reconocio : "+ yytext); return 'BARRA'}
")"                     { console.log("Reconocio : "+ yytext); return 'PARC'}
"$"                     { console.log("Reconocio : "+ yytext); return 'DOLAR'}
"{"                     { console.log("Reconocio : "+ yytext); return 'LLAVEA'}
"}"                     { console.log("Reconocio : "+ yytext); return 'LLAVEC'}
"["                     { console.log("Reconocio : "+ yytext); return 'CORA'}
"]"                     { console.log("Reconocio : "+ yytext); return 'CORC'}
".."                    { console.log("Reconocio : "+ yytext); return 'PUNTOPUNTO'}
"."                     { console.log("Reconocio : "+ yytext); return 'PUNTO'}
"|"                     { console.log("Reconocio : "+ yytext); return 'SIGNOO'}
"::"                    { console.log("Reconocio : "+ yytext); return 'DOSPUNTOS'}

/* Operadores Relacionales */
"<="                    { console.log("Reconocio : "+ yytext); return 'MENORIGUAL'}
">="                    { console.log("Reconocio : "+ yytext); return 'MAYORIGUAL'}
"="                     { console.log("Reconocio : "+ yytext); return 'IGUAL'}
"<"                     { console.log("Reconocio : "+ yytext); return 'MENORQUE'}
">"                     { console.log("Reconocio : "+ yytext); return 'MAYORQUE'}
"!="                    { console.log("Reconocio : "+ yytext); return 'DIFERENTE'}
":"                    { console.log("Reconocio : "+ yytext); return 'DOSPUNTOS'}
","                    { console.log("Reconocio : "+ yytext); return 'COMA'}
"@"                     { console.log("Reconocio : "+ yytext); return 'ARROBA'}

/* Operadores Aritmeticos */
"+"                     { console.log("Reconocio : "+ yytext); return 'MAS'}
"-"                     { console.log("Reconocio : "+ yytext); return 'MENOS'}
"*"                     { console.log("Reconocio : "+ yytext); return 'POR'}
"div"                   { console.log("Reconocio : "+ yytext); return 'DIV'}
"mod"                   { console.log("Reconocio : "+ yytext); return 'MODULO'}

/* Operadores Logicos */
"and"                   { console.log("Reconocio : "+ yytext); return 'AND'}
"or"                    { console.log("Reconocio : "+ yytext); return 'OR'}

/* Palabras reservadas */
"for"                   { console.log("Reconocio : "+ yytext); return 'FOR'}
"in"                    { console.log("Reconocio : "+ yytext); return 'IN'}
"let"                   { console.log("Reconocio : "+ yytext); return 'LET'}
"where"                 { console.log("Reconocio : "+ yytext); return 'WHERE'}
"order by"              { console.log("Reconocio : "+ yytext); return 'ORDER'}
"return"                { console.log("Reconocio : "+ yytext); return 'RETURN'}
"to"                    { console.log("Reconocio : "+ yytext); return 'TO'}
"if"                    { console.log("Reconocio : "+ yytext); return 'IF'}
"then"                  { console.log("Reconocio : "+ yytext); return 'THEN'}
"else"                  { console.log("Reconocio : "+ yytext); return 'ELSE'}
"declare"               { console.log("Reconocio : "+ yytext); return 'DECLARE'}
"function"              { console.log("Reconocio : "+ yytext); return 'FUNCTION'}
"as"                    { console.log("Reconocio : "+ yytext); return 'AS'}
"let"                   { console.log("Reconocio : "+ yytext); return 'LET'}
"data"                   { console.log("Reconocio : "+ yytext); return 'DATA'}

//XPATH
"last()"                { console.log("Reconocio : "+ yytext); return 'LAST'}
"position()"            { console.log("Reconocio : "+ yytext); return 'POSITION'}
"ancestor"              { console.log("Reconocio : "+ yytext); return 'ANCESTOR'}
"attribute"             { console.log("Reconocio : "+ yytext); return 'ATTRIBUTE'}
"self"                  { console.log("Reconocio : "+ yytext); return 'SELF'} 
"child"                 { console.log("Reconocio : "+ yytext); return 'CHILD'}
"descendant"            { console.log("Reconocio : "+ yytext); return 'DESCENDANT'}
"following"             { console.log("Reconocio : "+ yytext); return 'FOLLOWING'}
"sibling"               { console.log("Reconocio : "+ yytext); return 'SIBLING'}
"namespace"             { console.log("Reconocio : "+ yytext); return 'NAMESPACE'}
"parent"                { console.log("Reconocio : "+ yytext); return 'PARENT'}
"preceding"             { console.log("Reconocio : "+ yytext); return 'PRECENDING'}
"text()"                { console.log("Reconocio : "+ yytext); return 'TEXT'}
"node()"                { console.log("Reconocio : "+ yytext); return 'NODE'}
"last()"                { console.log("Reconocio : "+ yytext); return 'LAST'}
"position()"            { console.log("Reconocio : "+ yytext); return 'POSITION'}

/* SIMBOLOS ER */
[0-9]+("."[0-9]+)?\b        { console.log("Reconocio : "+ yytext); return 'DECIMAL'}
{num}                       { console.log("Reconocio : "+ yytext); return 'ENTERO'}
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

%{
    const evaluar = require('../Clases/Evaluar');
    const aritmetica= require('../Clases/Expreciones/Operaciones/Aritmetica');
    const relacional = require('../Clases/Expreciones/Operaciones/Relaciones');
    const logica = require('../Clases/Expreciones/Operaciones/Logicas');
    const primitivo = require('../Clases/Expreciones/Primitivo');
    
    const identificador= require('../Clases/Expreciones/Identificador');
    const last= require('../Clases/Expreciones/last');
    const position = require ('../Clases/Expreciones/position');
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
    const barrabarra= require ('../Clases/xpath/barrabarra');
    const informacion = require ('../Clases/xpath/informacion');
    const axes = require ('../Clases/xpath/axes');
    const axesbarrabarra = require ('../Clases/xpath/axesbarrabarra');
    const instrucciondoble =require ('../Clases/xpath/intrucciondoble');
    const puntopunto =require ('../Clases/xpath/puntopunto');
%}

/* Precedencia de operadores */


%right 'INTERROGACION'
%left 'OR'
%left 'AND'
%right 'NOT'
%left 'IGUAL' 'DIFERENTE' 'MENORQUE' 'MENORIGUAL' 'MAYORQUE'  'MAYORIGUAL' 
%left 'MAS' 'MENOS'
%left 'POR' 'DIV' 'MODULO'
%nonassoc 'POT'
%right 'UNARIO'
%right 'PARA' 'CORA'

%start INICIO

%% /* Gramatica */


INICIO
    : VARIAS EOF {  $$=$1; return $$ };


VARIAS: INSTRUCCIONES SIGNOO INSTRUCCIONES {$$=new instrucciondoble.default($1,$3);}
        |INSTRUCCIONES {$$=$1}
        ;

INSTRUCCIONES : SENTENCIAS INSTRUCCIONES    { $1.sig=$2; $$ = $1; }
            |   SENTENCIAS                  { $$= $1; }
            ;

SENTENCIAS: FOR DOLAR ID IN PARAMETROS
    | WHERE DOLAR ID PARAMETROS
    | ORDER DOLAR ID PARAMETROS
    | LET DOLAR ID DOSPUNTOS IGUAL PARAMETROS
    | IF PARA DOLAR ID PARAMETROS  PARC
    | RETURN SENT_RETURN
    | THEN DATA PARA DOLAR ID PARAMETROS  PARC
    | ELSE SENT_ELSE
    | DECLARE FUNCTION ID DOSPUNTOS ID PARA  PARAMETROS PARC
    | AS ID DOSPUNTOS ID LLAVEA INSTRUCCIONES LLAVEC
    ;

SENT_RETURN : DOLAR ID
            | DOLAR ID PARAMETROS
            |PARA OPERADORES PARC
            | SENTENCIAS
;

SENT_ELSE : DATA PARA DOLAR ID PARAMETROS  PARC
        | PARA PARC
        | SENTENCIAS  
        ;

PARAMETROS: LISTA_PARAMETROS PARAMETROS     { $1.sig=$2; $$ = $1; }
    | LISTA_PARAMETROS                      { $$= $1; }
    ;

LISTA_PARAMETROS : BARRA e                          {  $$ = new acceso.default($2,null);}
    | BARRABARRA e                                  {  $$ = new barrabarra.default($2,null);}
    | RESERV DOSPUNTOS e                            {  $$ =  new axes.default($1,$3,null);}
    | BARRA RESERV DOSPUNTOS e                      {  $$ =  new axes.default($2,$4,null);}
    | BARRA PUNTOPUNTO                              {  $$ =  new puntopunto.default($1,null);}
    | BARRABARRA RESERV DOSPUNTOS e                 {  $$ =  new axesbarrabarra.default($2,$4,null)}     
    | PARA OPERADORES TO OPERADORES PARC
    | LISTA_PARAMETROS MENORQUE LISTA_PARAMETROS
    | LISTA_PARAMETROS MAYORQUE LISTA_PARAMETROS
    | LISTA_PARAMETROS MENORIGUAL LISTA_PARAMETROS
    | LISTA_PARAMETROS MAYORIGUAL LISTA_PARAMETROS
    | LISTA_PARAMETROS MAS LISTA_PARAMETROS
    | LISTA_PARAMETROS MENOS LISTA_PARAMETROS
    | LISTA_PARAMETROS POR LISTA_PARAMETROS
    | LISTA_PARAMETROS DIV LISTA_PARAMETROS
    | LISTA_PARAMETROS MODULO LISTA_PARAMETROS
    | LISTA_PARAMETROS AND LISTA_PARAMETROS
    | LISTA_PARAMETROS OR LISTA_PARAMETROS
    | LISTA_PARAMETROS DIFERENTE LISTA_PARAMETROS
    | LISTA_PARAMETROS IGUAL LISTA_PARAMETROS
    | DATA PARA OPERADORES PARC
    | PARA OPERADORES PARC
    | ENTERO
    | DECIMAL
    | ID                                                {  $$ =  new acceso.default(new informacion.default($1,null,1),null);} 
    | CADENA    
    | DOLAR ID AS ID DOSPUNTOS ID COMA
    | DOLAR ID AS ID DOSPUNTOS ID
    ;



RESERV :  last                  {$$ = $1}
    | POSITION                  {$$ = $1}
    | ANCESTOR RESERVLARGE      {$$ = $1 + $2}    
    | ATTRIBUTE                 {$$ = $1}
    | ANCESORSELF               {$$ = $1}
    | CHILD                     {$$ = $1}
    | DESCENDANT RESERVLARGE    {$$ = $1 + $2}
    | DESCENDANT                {$$ = $1}
    | FOLLOWING  MENOS SIBLING  {$$ = $1+$2+$3}
    | FOLLOWING                 {$$ = $1}
    | NAMESPACE                 {$$ = $1}    
    | PARENT                    {$$ = $1}
    | PRECENDING                {$$ = $1}
    | PRECENDING MENOS SIBLING  {$$ = $1+$2+$3}
    | SELF                      {$$ = $1}
    | TEXT                      {$$ = $1}
    | NODE                      {$$ = $1}
    | SIBLING                   {$$ = $1}
    ;

RESERVLARGE :   MENOS OR MENOS SELF {$$ = $1+$2+$3+$4}
    |   MENOS SIBLING               {$$ = $1+$2}
    ;

e :   ID                        {$$=new informacion.default($1,null,1);}
    | ARROBA ID                 {$$=new informacion.default($2,null,2);}
    | ARROBA POR                {$$=new informacion.default($2,null,2);}
    | POR                       {$$=new informacion.default($1,null,1);}
    | ID CORA OPERADORES CORC   {$$=new informacion.default($1,null,1);}
    | ENTERO                    {$$=new informacion.default($1,null,1);} //Validar
    | DECIMAL                   {$$=new informacion.default($1,null,1);} //Validar
    | CADENA                    {$$=new informacion.default($1,null,1);} //Validar
    ;
 
    
OPERADORES :  OPERADORES MAS OPERADORES     {$$ = new aritmetica.default($1, '+', $3, $1.first_line, $1.last_column, false);}
    | OPERADORES MENOS OPERADORES           {$$ = new aritmetica.default($1, '-', $3, $1.first_line, $1.last_column, false);}
    | OPERADORES POR OPERADORES             {$$ = new aritmetica.default($1, '*', $3, $1.first_line, $1.last_column, false);}
    | OPERADORES DIV OPERADORES             {$$ = new aritmetica.default($1, '/', $3, $1.first_line, $1.last_column, false);}
    | OPERADORES MODULO OPERADORES          {$$ = new aritmetica.default($1, '%', $3, $1.first_line, $1.last_column, false);}
    | OPERADORES AND OPERADORES             {$$ = new logica.default($1, '&&', $3, $1.first_line, $1.last_column, false);}
    | OPERADORES OR OPERADORES              {$$ = new logica.default($1, '||', $3, $1.first_line, $1.last_column, false);}
    | OPERADORES MAYORQUE OPERADORES        {$$ = new relacional.default($1,'>', $3, $1.first_line, $1.last_column, false);}
    | OPERADORES MAYORIGUAL OPERADORES      {$$ = new relacional.default($1,'>=', $3, $1.first_line, $1.last_column, false);}
    | OPERADORES MENORQUE OPERADORES        {$$ = new relacional.default($1,'<', $3, $1.first_line, $1.last_column, false);}
    | OPERADORES MENORIGUAL OPERADORES      {$$ = new relacional.default($1,'<=', $3, $1.first_line, $1.last_column, false);}
    | OPERADORES DIFERENTE OPERADORES       {$$ = new relacional.default($1,'!=', $3, $1.first_line, $1.last_column, false);}
    | OPERADORES IGUAL OPERADORES           {$$ = new relacional.default($1,'==', $3, $1.first_line, $1.last_column, false);}
    | MENOS OPERADORES %prec UNARIO         {$$ = new aritmetica.default($2, 'UNARIO', null, $1.first_line, $1.last_column, true);}
    | DATA PARA OPERADORES PARC             {$$ = $2;}
    | PARA OPERADORES PARC                  {$$ = $2;}
    | DOLAR ID                              //AGREGAR DONDE SE LLENA
    | DECIMAL                               {$$ = new primitivo.default(Number(yytext), $1.first_line, $1.last_column,-1);}
    | ENTERO                                {$$ = new primitivo.default(Number(yytext), $1.first_line, $1.last_column,-1);}
    | ID                                    {$$ = new identificador.default($1 , @1.first_line, @1.last_column,1); }
    | LAST                                  {$$ = new last.default();}
    | POSITION                              {$$ = new position.default();}
    | CADENA                                {$1 = $1.slice(1, $1.length-1); $$ = new primitivo.default($1, $1.first_line, $1.last_column);}
    | ARROBA ID                             {$$ = new identificador.default($2 , @1.first_line, @1.last_column,2); }
            
    ;