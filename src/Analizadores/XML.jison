%{
    let $ESPACIOS = "";
%}
%lex
%options case-insensitive
%s S1
/* Expresiones regulares */
num     [0-9]+
id      [a-zñA-ZÑ_][a-zñA-ZÑ0-9_]*
//--> Cadena
escapechar  [\'\"\\ntr]
escape      \\{escapechar}
aceptacion  [^\"\\]+
cadena      (\"({escape} | {aceptacion})*\")

%%

<INITIAL>\s+                   /* skip whitespace */
<INITIAL>{cadena}              { console.log("Reconocio : "+ yytext); return 'CADENA'} 
<INITIAL>{id}                  { console.log("Reconocio : "+ yytext); return 'ID'}
<INITIAL>"<"                   { console.log("Reconocio : "+ yytext); return '<'}  
<INITIAL>"="                   { console.log("Reconocio : "+ yytext); return '='}
<INITIAL>"/"                   { console.log("Reconocio : "+ yytext); return '/'}

// Cambiando de estado
<INITIAL>'>'                 { this.begin("S1"); $ESPACIOS=""; console.log("Reconocio : "+ yytext); return ">";}

// Estado S1
<S1>\s                       { $ESPACIOS += yy.lexer.match;};
<S1>'<'                      { this.begin("INITIAL"); console.log("Reconocio : "+ yytext); return "<";}
<S1>.                        { yytext = $ESPACIOS + yytext; $ESPACIOS="";  console.log("Reconocio : "+ yytext); return 'TEXTO'; };


<<EOF>>		                 return 'EOF'

/* Errores lexicos */
.                     { console.log("Error Lexico "+yytext
                        +" linea "+yylineno
                        +" columna "+(yylloc.last_column+1));        
                        }
/lex

/* Area de imports */

%{
%}

%start inicio

%% /* Gramatica */


inicio: raices EOF { $$ = $1; return $$; }
    ;

raices: raices raiz 
        | raiz
        ;

raiz: objeto 
    ;

objeto:  '<' ID latributos '/' '>'
       | '<' ID latributos '>'  texto_libre  '<' '/' ID '>'
       | '<' ID latributos '>'  objetos  '<' '/' ID '>'
        ;

objetos: objetos objeto
         |objeto
         ;

latributos: atributos
            |
            ;

atributos: atributos atributo
            |atributo
            ;

atributo: ID '=' CADENA 
        ;

texto_libre : texto_libre TEXTO                                   { $$ = $1 + $2; }
             | TEXTO                                              { $$ = $1; }
             ;