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
cadena      (\'({escape} | {aceptacion})*\')

%%

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
"|"                     { console.log("Reconocio : "+ yytext); return 'O'}
"::"                    { console.log("Reconocio : "+ yytext); return 'DOSPUNTOS'}

/* Operadores Aritmeticos */
"+"                     { console.log("Reconocio : "+ yytext); return 'MAS'}
"-"                     { console.log("Reconocio : "+ yytext); return 'MENOS'}
"*"                     { console.log("Reconocio : "+ yytext); return 'ASTERISCO'}
"div"                   { console.log("Reconocio : "+ yytext); return 'DIV'}
"mod"                   { console.log("Reconocio : "+ yytext); return 'MODULO'}

/* Operadores Relacionales */
"="                     { console.log("Reconocio : "+ yytext); return 'IGUAL'}
"<="                    { console.log("Reconocio : "+ yytext); return 'MENORIGUAL'}
"<"                     { console.log("Reconocio : "+ yytext); return 'MENORQUE'}
">="                    { console.log("Reconocio : "+ yytext); return 'MAYORIGUAL'}
">"                     { console.log("Reconocio : "+ yytext); return 'MAYORQUE'}
"!="                    { console.log("Reconocio : "+ yytext); return 'DIFERENTE'}

/* Operadores Logicos */
"and"                   { console.log("Reconocio : "+ yytext); return 'AND'}
"or"                    { console.log("Reconocio : "+ yytext); return 'OR'}


/* Palabras reservadas */
"last()"                { console.log("Reconocio : "+ yytext); return 'LAST'}
"position()"            { console.log("Reconocio : "+ yytext); return 'POSITION'}
"antecestor"            { console.log("Reconocio : "+ yytext); return 'ANTECESTOR'}
"attribute"             { console.log("Reconocio : "+ yytext); return 'ATTRIBUTE'}
"antecestor-or-self"    { console.log("Reconocio : "+ yytext); return 'ANTECESORSELF'} 
"child"                 { console.log("Reconocio : "+ yytext); return 'CHILD'}
"descendant"            { console.log("Reconocio : "+ yytext); return 'DESCENDANT'}
"descendant-or-self"    { console.log("Reconocio : "+ yytext); return 'DESCENDANTSELF'}
"following"             { console.log("Reconocio : "+ yytext); return 'FOLLOWING'}
"following-sibling"     { console.log("Reconocio : "+ yytext); return 'FOLLOWINGSIBLING'}
"namespace"             { console.log("Reconocio : "+ yytext); return 'NAMESPACE'}
"parent"                { console.log("Reconocio : "+ yytext); return 'PARENT'}
"preceding"             { console.log("Reconocio : "+ yytext); return 'PRECENDING'}
"preceding-sibling"     { console.log("Reconocio : "+ yytext); return 'PRECEDINGSIBLING'}
"self"                  { console.log("Reconocio : "+ yytext); return 'SELF'}
"text"                  { console.log("Reconocio : "+ yytext); return 'TEXT'}
"node"                  { console.log("Reconocio : "+ yytext); return 'NODE'}


/* SIMBOLOS ER */
[0-9]+("."[0-9]+)?\b        { console.log("Reconocio : "+ yytext); return 'DECIMAL'}
{num}                       { console.log("Reconocio : "+ yytext); return 'ENTERO'}
{id}                        { console.log("Reconocio : "+ yytext); return 'ID'}
{cadena}                    { console.log("Reconocio : "+ yytext); return 'CADENA'}

<<EOF>>               return 'EOF'

/* Errores lexicos */
.                     { console.log("Error Lexico "+yytext
                        +" linea "+yylineno
                        +" columna "+(yylloc.last_column+1));
                                      
                        }

/lex

/* Area de imports */
%{
    
%}

/* Precedencia de operadores */

%right 'INTERROGACION'
%left 'OR'
%left 'AND'
%right 'NOT'
%left 'IGUALIGUAL' 'DIFERENTE' 'MENORQUE' 'MENORIGUAL' 'MAYORQUE'  'MAYORIGUAL' 
%left 'MAS' 'MENOS'
%left  'DIV' 'MODULO' 'ASTERISCO'


 
%start inicio

%% /* Gramatica */


inicio
    : instrucciones EOF { console.log($1); $$= new ast.default($1);  return $$; }
    ;

instrucciones : instrucciones instruccion   { $$ = $1; $$.push($2); }
            | instruccion                   {$$= new Array(); $$.push($1); }
            ;

instruccion : BARRA e
            | BARRABARRA e
            | RESERV DOSPUNTOS e
            ;

RESERV :  LAST
        |  POSITION
        |  ANTECESTOR
        |  ATTRIBUTE
        |  ANTECESORSELF
        |  CHILD
        |  DESCENDANT
        |  DESCENDANTSELF
        |  FOLLOWING
        |  FOLLOWINGSIBLING
        |  NAMESPACE
        |  PARENT
        |  PRECENDING
        |  PRECEDINGSIBLING
        |  SELF
        |  TEXT
        |  NODE
        ;



e : e MAS e             {$$ = new aritmetica.default($1, '+', $3, $1.first_line, $1.last_column, false);}
    | e MENOS e         {$$ = new aritmetica.default($1, '-', $3, $1.first_line, $1.last_column, false);}
    | e ASTERISCO e         {$$ = new aritmetica.default($1, '*', $3, $1.first_line, $1.last_column, false);}
    | e DIV e           {$$ = new aritmetica.default($1, '/', $3, $1.first_line, $1.last_column, false);}
    | e MODULO e        {$$ = new aritmetica.default($1, '%', $3, $1.first_line, $1.last_column, false);}
    | e AND e           {$$ = new logica.default($1, '&&', $3, $1.first_line, $1.last_column, false);}
    | e OR e            {$$ = new logica.default($1, '||', $3, $1.first_line, $1.last_column, false);}
    | NOT e             {$$ = new logica.default($2, '@', null, $1.first_line, $1.last_column, true);}
    | e MAYORQUE e      {$$ = new relacional.default($1,'>', $3, $1.first_line, $1.last_column, false);}
    | e MAYORIGUAL e    {$$ = new relacional.default($1,'>=', $3, $1.first_line, $1.last_column, false);}
    | e MENORQUE e      {$$ = new relacional.default($1,'<', $3, $1.first_line, $1.last_column, false);}
    | e MENORIGUAL e    {$$ = new relacional.default($1,'<=', $3, $1.first_line, $1.last_column, false);}
    | e IGUALIGUAL e    {$$ = new relacional.default($1,'==', $3, $1.first_line, $1.last_column, false);}
    | e DIFERENTE e     {$$ = new relacional.default($1,'!=', $3, $1.first_line, $1.last_column, false);}
    | MENOS e %prec UNARIO {$$ = new aritmetica.default($2, 'UNARIO', null, $1.first_line, $1.last_column, true);}
    | PARA e PARC       {$$ = $2;}
    | DECIMAL           {$$ = new primitivo.default(Number(yytext), $1.first_line, $1.last_column);}
    | ENTERO            {$$ = new primitivo.default(Number(yytext), $1.first_line, $1.last_column);}
    | CADENA            {$1 = $1.slice(1, $1.length-1); $$ = new primitivo.default($1, $1.first_line, $1.last_column);}
    | CHAR              {$1 = $1.slice(1, $1.length-1); $$ = new primitivo.default($1, $1.first_line, $1.last_column);}
    | TRUE              {$$ = new primitivo.default(true, $1.first_line, $1.last_column);}
    | FALSE             {$$ = new primitivo.default(false, $1.first_line, $1.last_column);}
    | ID                {$$ = new identificador.default($1.toLowerCase() , @1.first_line, @1.last_column); }
    | e INTERROGACION e DSPNTS e {$$ = new ternario.default($1, $3, $5, @1.first_line, @1.last_column); } 
    | ID INCRE          {$$ = new aritmetica.default(new identificador.default($1.toLowerCase() , @1.first_line, @1.last_column), '+',new primitivo.default(Number(1), $1.first_line, $1.last_column), $1.first_line, $1.last_column, false);}
    | ID DECRE          {$$ = new aritmetica.default(new identificador.default($1.toLowerCase() , @1.first_line, @1.last_column), '-',new primitivo.default(Number(1), $1.first_line, $1.last_column), $1.first_line, $1.last_column, false);}
    | ID PARA PARC       { $$ = new llamada.default($1.toLowerCase() , [],@1.first_line, @1.last_column ); }
    | ID PARA lista_exp PARC { $$ = new llamada.default($1.toLowerCase() , $3 ,@1.first_line, @1.last_column ); }
    | SIM   
    | ID CORA e CORC
    | RESERV   
    ;

SIM :   ARROBA ID             {$$ = new logica.default($2, '@', null, $1.first_line, $1.last_column, true);}
    | ARROBA ID IGUAL CADENA
    | ARROBA ASTERISCO             {$$ = new logica.default($2, '@*', null, $1.first_line, $1.last_column, true);}
    | ASTERISCO                     {$$ = new logica.default($1, '*', null, $1.first_line, $1.last_column, true);}
    ;