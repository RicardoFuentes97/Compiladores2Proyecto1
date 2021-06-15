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
"<!--"(.|\n)*"-->"  {/* Ignoro los comentarios simples */}
<INITIAL>\s+                    /* skip whitespace */
<INITIAL>{cadena}              { console.log("Reconocio : "+ yytext); return 'CADENA'} 
<INITIAL>{id}                  { console.log("Reconocio : "+ yytext); return 'ID'}
<INITIAL>"<"                   { console.log("Reconocio : "+ yytext); return '<'}  
<INITIAL>"="                   { console.log("Reconocio : "+ yytext); return '='}
<INITIAL>"/"                   { console.log("Reconocio : "+ yytext); return '/'}

// Cambiando de estado
<INITIAL>'>'                 { this.begin("S1"); $ESPACIOS=""; console.log("Reconocio : "+ yytext); return ">";}

// Estado S1
<S1>"&lt;"                   { yytext = $ESPACIOS + "<"; $ESPACIOS="";  console.log("Reconocio : "+ yytext); return 'TEXTO'; };
<S1>"&gt;"                   { yytext = $ESPACIOS + ">"; $ESPACIOS="";  console.log("Reconocio : "+ yytext); return 'TEXTO'; };
<S1>"&amp;"                  { yytext = $ESPACIOS + "&"; $ESPACIOS="";  console.log("Reconocio : "+ yytext); return 'TEXTO'; };
<S1>"&apos;"                 { yytext = $ESPACIOS + "\'"; $ESPACIOS="";  console.log("Reconocio : "+ yytext); return 'TEXTO'; };
<S1>"&quot;"                 { yytext = $ESPACIOS + "\""; $ESPACIOS="";  console.log("Reconocio : "+ yytext); return 'TEXTO'; };
"<!--"(.|\n)*"-->"           {  /* Ignoro los comentarios simples */}
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
      const  Atributo = require ('../Clases/xml/atributo');
      const  Objeto  = require ('../Clases/xml/objeto');
      const ast =require('../Clases/AST/Ast');
      const gram =require('../Clases/ReporteGram');
%}

%start inicio

%% /* Gramatica */


inicio: raices EOF { console.log($1); $$= new ast.default($1);  return $$; }
    ;

raices: raices raiz { gram.getInstancia('raices -> raices raiz; \n'); $1.push($2); $$ = $1;}
        | raiz      { gram.getInstancia('raices -> raiz; \n'); $$ = [$1]; }
        ;

raiz: objeto { gram.getInstancia('raiz -> objeto; \n'); $$ = $1; }
    ;

objeto:  '<' ID latributos '/' '>'                              { gram.getInstancia('objeto -> < ID latributos / >; \n'); $$ = new Objeto.default($2,'',@1.first_line, @1.first_column,$3,[],1); }
       | '<' ID latributos '>'  texto_libre  '<' '/' ID '>'     { gram.getInstancia('objeto -> < ID latributos >  texto_libre  < / ID >; \n'); $$ = new Objeto.default($2,$5,@1.first_line, @1.first_column,$3,[],2);}    
       | '<' ID latributos '>'  objetos  '<' '/' ID '>'         { gram.getInstancia('objeto -> < ID latributos >  objetos </ID >; \n'); $$ = new Objeto.default($2,'',@1.first_line, @1.first_column,$3,$5,2);}
        ;

objetos: objetos objeto         { gram.getInstancia('objetos -> objetos objeto; \n'); $1.push($2); $$ = $1;}
         |objeto                { gram.getInstancia('raiz -> objeto; \n'); $$ = [$1]; } 
         ;

latributos: atributos { gram.getInstancia('latributos -> atributos; \n'); $$ = $1;}
            |         { gram.getInstancia('latributos -> []; \n'); $$ = [];} 
            ;

atributos:   atributos atributo   { gram.getInstancia('atributos -> atributos atributo; \n'); $1.push($2); $$ = $1;}
            |atributo             { gram.getInstancia('atributos -> atributo; \n'); $$ = [$1];} 
            ;

atributo: ID '=' CADENA  { gram.getInstancia('atributo -> ID = CADENA; \n'); $$ = new Atributo.default($1, $3, @1.first_line, @1.first_column);}
        ;

texto_libre : texto_libre TEXTO       { gram.getInstancia('texto_libre -> texto_libre TEXTO; \n'); $$ = $1 + $2;}
             | TEXTO                  { gram.getInstancia('texto_libre -> TEXTO; \n'); $$ = $1;}
             ;