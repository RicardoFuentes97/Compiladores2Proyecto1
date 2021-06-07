/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,5],$V2=[1,7],$V3=[1,8],$V4=[1,9],$V5=[1,10],$V6=[1,11],$V7=[1,12],$V8=[1,13],$V9=[1,14],$Va=[1,15],$Vb=[1,16],$Vc=[1,17],$Vd=[1,18],$Ve=[1,19],$Vf=[1,20],$Vg=[1,21],$Vh=[1,22],$Vi=[1,23],$Vj=[5,7,9,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],$Vk=[1,28],$Vl=[1,40],$Vm=[1,27],$Vn=[1,29],$Vo=[1,30],$Vp=[1,31],$Vq=[1,32],$Vr=[1,33],$Vs=[1,34],$Vt=[1,35],$Vu=[1,36],$Vv=[1,39],$Vw=[5,7,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,38,39,40,41,42,44,52,53,59],$Vx=[1,43],$Vy=[1,44],$Vz=[1,45],$VA=[1,46],$VB=[1,47],$VC=[1,48],$VD=[1,49],$VE=[1,50],$VF=[1,51],$VG=[1,52],$VH=[1,53],$VI=[1,54],$VJ=[1,55],$VK=[1,56],$VL=[5,7,9,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,38,39,40,41,42,44,52,53,59],$VM=[5,7,9,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,34,35,44,52,53,59],$VN=[5,7,9,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,34,35,37,38,39,40,41,42,44,52,53,59],$VO=[5,7,9,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,34,35,37,38,39,40,41,42,44,52,53,59];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"inicio":3,"instrucciones":4,"EOF":5,"instruccion":6,"BARRA":7,"e":8,"BARRABARRA":9,"RESERV":10,"DOSPUNTOS":11,"LAST":12,"POSITION":13,"ANTECESTOR":14,"ATTRIBUTE":15,"ANTECESORSELF":16,"CHILD":17,"DESCENDANT":18,"DESCENDANTSELF":19,"FOLLOWING":20,"FOLLOWINGSIBLING":21,"NAMESPACE":22,"PARENT":23,"PRECENDING":24,"PRECEDINGSIBLING":25,"SELF":26,"TEXT":27,"NODE":28,"MAS":29,"MENOS":30,"ASTERISCO":31,"DIV":32,"MODULO":33,"AND":34,"OR":35,"NOT":36,"MAYORQUE":37,"MAYORIGUAL":38,"MENORQUE":39,"MENORIGUAL":40,"IGUALIGUAL":41,"DIFERENTE":42,"PARA":43,"PARC":44,"DECIMAL":45,"ENTERO":46,"CADENA":47,"CHAR":48,"TRUE":49,"FALSE":50,"ID":51,"INTERROGACION":52,"DSPNTS":53,"INCRE":54,"DECRE":55,"lista_exp":56,"SIM":57,"CORA":58,"CORC":59,"ARROBA":60,"IGUAL":61,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"BARRA",9:"BARRABARRA",11:"DOSPUNTOS",12:"LAST",13:"POSITION",14:"ANTECESTOR",15:"ATTRIBUTE",16:"ANTECESORSELF",17:"CHILD",18:"DESCENDANT",19:"DESCENDANTSELF",20:"FOLLOWING",21:"FOLLOWINGSIBLING",22:"NAMESPACE",23:"PARENT",24:"PRECENDING",25:"PRECEDINGSIBLING",26:"SELF",27:"TEXT",28:"NODE",29:"MAS",30:"MENOS",31:"ASTERISCO",32:"DIV",33:"MODULO",34:"AND",35:"OR",36:"NOT",37:"MAYORQUE",38:"MAYORIGUAL",39:"MENORQUE",40:"MENORIGUAL",41:"IGUALIGUAL",42:"DIFERENTE",43:"PARA",44:"PARC",45:"DECIMAL",46:"ENTERO",47:"CADENA",48:"CHAR",49:"TRUE",50:"FALSE",51:"ID",52:"INTERROGACION",53:"DSPNTS",54:"INCRE",55:"DECRE",56:"lista_exp",58:"CORA",59:"CORC",60:"ARROBA",61:"IGUAL"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,2],[6,3],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[8,3],[8,3],[8,3],[8,3],[8,3],[8,3],[8,3],[8,2],[8,3],[8,3],[8,3],[8,3],[8,3],[8,3],[8,2],[8,3],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,5],[8,2],[8,2],[8,3],[8,4],[8,1],[8,4],[8,1],[57,2],[57,4],[57,2],[57,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 console.log($$[$0-1]); this.$= new ast.default($$[$0-1]);  return this.$; 
break;
case 2:
 this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 3:
this.$= new Array(); this.$.push($$[$0]); 
break;
case 24:
this.$ = new aritmetica.default($$[$0-2], '+', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 25:
this.$ = new aritmetica.default($$[$0-2], '-', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 26:
this.$ = new aritmetica.default($$[$0-2], '*', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 27:
this.$ = new aritmetica.default($$[$0-2], '/', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 28:
this.$ = new aritmetica.default($$[$0-2], '%', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 29:
this.$ = new logica.default($$[$0-2], '&&', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 30:
this.$ = new logica.default($$[$0-2], '||', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 31: case 55:
this.$ = new logica.default($$[$0], '@', null, $$[$0-1].first_line, $$[$0-1].last_column, true);
break;
case 32:
this.$ = new relacional.default($$[$0-2],'>', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 33:
this.$ = new relacional.default($$[$0-2],'>=', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 34:
this.$ = new relacional.default($$[$0-2],'<', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 35:
this.$ = new relacional.default($$[$0-2],'<=', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 36:
this.$ = new relacional.default($$[$0-2],'==', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 37:
this.$ = new relacional.default($$[$0-2],'!=', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 38:
this.$ = new aritmetica.default($$[$0], 'UNARIO', null, $$[$0-1].first_line, $$[$0-1].last_column, true);
break;
case 39:
this.$ = $$[$0-1];
break;
case 40: case 41:
this.$ = new primitivo.default(Number(yytext), $$[$0].first_line, $$[$0].last_column);
break;
case 42: case 43:
$$[$0] = $$[$0].slice(1, $$[$0].length-1); this.$ = new primitivo.default($$[$0], $$[$0].first_line, $$[$0].last_column);
break;
case 44:
this.$ = new primitivo.default(true, $$[$0].first_line, $$[$0].last_column);
break;
case 45:
this.$ = new primitivo.default(false, $$[$0].first_line, $$[$0].last_column);
break;
case 46:
this.$ = new identificador.default($$[$0].toLowerCase() , _$[$0].first_line, _$[$0].last_column); 
break;
case 47:
this.$ = new ternario.default($$[$0-4], $$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].last_column); 
break;
case 48:
this.$ = new aritmetica.default(new identificador.default($$[$0-1].toLowerCase() , _$[$0-1].first_line, _$[$0-1].last_column), '+',new primitivo.default(Number(1), $$[$0-1].first_line, $$[$0-1].last_column), $$[$0-1].first_line, $$[$0-1].last_column, false);
break;
case 49:
this.$ = new aritmetica.default(new identificador.default($$[$0-1].toLowerCase() , _$[$0-1].first_line, _$[$0-1].last_column), '-',new primitivo.default(Number(1), $$[$0-1].first_line, $$[$0-1].last_column), $$[$0-1].first_line, $$[$0-1].last_column, false);
break;
case 50:
 this.$ = new llamada.default($$[$0-2].toLowerCase() , [],_$[$0-2].first_line, _$[$0-2].last_column ); 
break;
case 51:
 this.$ = new llamada.default($$[$0-3].toLowerCase() , $$[$0-1] ,_$[$0-3].first_line, _$[$0-3].last_column ); 
break;
case 57:
this.$ = new logica.default($$[$0], '@*', null, $$[$0-1].first_line, $$[$0-1].last_column, true);
break;
case 58:
this.$ = new logica.default($$[$0], '*', null, $$[$0].first_line, $$[$0].last_column, true);
break;
}
},
table: [{3:1,4:2,6:3,7:$V0,9:$V1,10:6,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi},{1:[3]},{5:[1,24],6:25,7:$V0,9:$V1,10:6,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi},o($Vj,[2,3]),{8:26,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},{8:41,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},{11:[1,42]},o($Vw,[2,7]),o($Vw,[2,8]),o($Vw,[2,9]),o($Vw,[2,10]),o($Vw,[2,11]),o($Vw,[2,12]),o($Vw,[2,13]),o($Vw,[2,14]),o($Vw,[2,15]),o($Vw,[2,16]),o($Vw,[2,17]),o($Vw,[2,18]),o($Vw,[2,19]),o($Vw,[2,20]),o($Vw,[2,21]),o($Vw,[2,22]),o($Vw,[2,23]),{1:[2,1]},o($Vj,[2,2]),o($Vj,[2,4],{29:$Vx,30:$Vy,31:$Vz,32:$VA,33:$VB,34:$VC,35:$VD,37:$VE,38:$VF,39:$VG,40:$VH,41:$VI,42:$VJ,52:$VK}),{8:57,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},{8:58,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},{8:59,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},o($VL,[2,40]),o($VL,[2,41]),o($VL,[2,42]),o($VL,[2,43]),o($VL,[2,44]),o($VL,[2,45]),o($VL,[2,46],{43:[1,62],54:[1,60],55:[1,61],58:[1,63]}),o($VL,[2,52]),o($VL,[2,54]),{31:[1,65],51:[1,64]},o($VL,[2,58]),o($Vj,[2,5],{29:$Vx,30:$Vy,31:$Vz,32:$VA,33:$VB,34:$VC,35:$VD,37:$VE,38:$VF,39:$VG,40:$VH,41:$VI,42:$VJ,52:$VK}),{8:66,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},{8:67,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},{8:68,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},{8:69,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},{8:70,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},{8:71,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},{8:72,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},{8:73,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},{8:74,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},{8:75,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},{8:76,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},{8:77,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},{8:78,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},{8:79,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},{8:80,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},o($VM,[2,31],{29:$Vx,30:$Vy,31:$Vz,32:$VA,33:$VB,37:$VE,38:$VF,39:$VG,40:$VH,41:$VI,42:$VJ}),o($VN,[2,38],{31:$Vz,32:$VA,33:$VB}),{29:$Vx,30:$Vy,31:$Vz,32:$VA,33:$VB,34:$VC,35:$VD,37:$VE,38:$VF,39:$VG,40:$VH,41:$VI,42:$VJ,44:[1,81],52:$VK},o($VL,[2,48]),o($VL,[2,49]),{44:[1,82],56:[1,83]},{8:84,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},o($VL,[2,55],{61:[1,85]}),o($VL,[2,57]),o($Vj,[2,6],{29:$Vx,30:$Vy,31:$Vz,32:$VA,33:$VB,34:$VC,35:$VD,37:$VE,38:$VF,39:$VG,40:$VH,41:$VI,42:$VJ,52:$VK}),o($VN,[2,24],{31:$Vz,32:$VA,33:$VB}),o($VN,[2,25],{31:$Vz,32:$VA,33:$VB}),o($VL,[2,26]),o($VL,[2,27]),o($VL,[2,28]),o($VM,[2,29],{29:$Vx,30:$Vy,31:$Vz,32:$VA,33:$VB,37:$VE,38:$VF,39:$VG,40:$VH,41:$VI,42:$VJ}),o([5,7,9,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,35,44,52,53,59],[2,30],{29:$Vx,30:$Vy,31:$Vz,32:$VA,33:$VB,34:$VC,37:$VE,38:$VF,39:$VG,40:$VH,41:$VI,42:$VJ}),o($VO,[2,32],{29:$Vx,30:$Vy,31:$Vz,32:$VA,33:$VB}),o($VO,[2,33],{29:$Vx,30:$Vy,31:$Vz,32:$VA,33:$VB}),o($VO,[2,34],{29:$Vx,30:$Vy,31:$Vz,32:$VA,33:$VB}),o($VO,[2,35],{29:$Vx,30:$Vy,31:$Vz,32:$VA,33:$VB}),o($VO,[2,36],{29:$Vx,30:$Vy,31:$Vz,32:$VA,33:$VB}),o($VO,[2,37],{29:$Vx,30:$Vy,31:$Vz,32:$VA,33:$VB}),{29:$Vx,30:$Vy,31:$Vz,32:$VA,33:$VB,34:$VC,35:$VD,37:$VE,38:$VF,39:$VG,40:$VH,41:$VI,42:$VJ,52:$VK,53:[1,86]},o($VL,[2,39]),o($VL,[2,50]),{44:[1,87]},{29:$Vx,30:$Vy,31:$Vz,32:$VA,33:$VB,34:$VC,35:$VD,37:$VE,38:$VF,39:$VG,40:$VH,41:$VI,42:$VJ,52:$VK,59:[1,88]},{47:[1,89]},{8:90,10:38,12:$V2,13:$V3,14:$V4,15:$V5,16:$V6,17:$V7,18:$V8,19:$V9,20:$Va,21:$Vb,22:$Vc,23:$Vd,24:$Ve,25:$Vf,26:$Vg,27:$Vh,28:$Vi,30:$Vk,31:$Vl,36:$Vm,43:$Vn,45:$Vo,46:$Vp,47:$Vq,48:$Vr,49:$Vs,50:$Vt,51:$Vu,57:37,60:$Vv},o($VL,[2,51]),o($VL,[2,53]),o($VL,[2,56]),o([5,7,9,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,44,53,59],[2,47],{29:$Vx,30:$Vy,31:$Vz,32:$VA,33:$VB,34:$VC,35:$VD,37:$VE,38:$VF,39:$VG,40:$VH,41:$VI,42:$VJ,52:$VK})],
defaultActions: {24:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: console.log("Reconocio : "+ yy_.yytext); return 43
break;
case 1: console.log("Reconocio : "+ yy_.yytext); return 9
break;
case 2: console.log("Reconocio : "+ yy_.yytext); return 7
break;
case 3: console.log("Reconocio : "+ yy_.yytext); return 44
break;
case 4: console.log("Reconocio : "+ yy_.yytext); return 58
break;
case 5: console.log("Reconocio : "+ yy_.yytext); return 59
break;
case 6: console.log("Reconocio : "+ yy_.yytext); return 60
break;
case 7: console.log("Reconocio : "+ yy_.yytext); return 'PUNTO'
break;
case 8: console.log("Reconocio : "+ yy_.yytext); return 'PUNTOPUNTO'
break;
case 9: console.log("Reconocio : "+ yy_.yytext); return 'O'
break;
case 10: console.log("Reconocio : "+ yy_.yytext); return 11
break;
case 11: console.log("Reconocio : "+ yy_.yytext); return 29
break;
case 12: console.log("Reconocio : "+ yy_.yytext); return 30
break;
case 13: console.log("Reconocio : "+ yy_.yytext); return 31
break;
case 14: console.log("Reconocio : "+ yy_.yytext); return 32
break;
case 15: console.log("Reconocio : "+ yy_.yytext); return 33
break;
case 16: console.log("Reconocio : "+ yy_.yytext); return 61
break;
case 17: console.log("Reconocio : "+ yy_.yytext); return 40
break;
case 18: console.log("Reconocio : "+ yy_.yytext); return 39
break;
case 19: console.log("Reconocio : "+ yy_.yytext); return 38
break;
case 20: console.log("Reconocio : "+ yy_.yytext); return 37
break;
case 21: console.log("Reconocio : "+ yy_.yytext); return 42
break;
case 22: console.log("Reconocio : "+ yy_.yytext); return 34
break;
case 23: console.log("Reconocio : "+ yy_.yytext); return 35
break;
case 24: console.log("Reconocio : "+ yy_.yytext); return 12
break;
case 25: console.log("Reconocio : "+ yy_.yytext); return 13
break;
case 26: console.log("Reconocio : "+ yy_.yytext); return 14
break;
case 27: console.log("Reconocio : "+ yy_.yytext); return 15
break;
case 28: console.log("Reconocio : "+ yy_.yytext); return 16
break;
case 29: console.log("Reconocio : "+ yy_.yytext); return 17
break;
case 30: console.log("Reconocio : "+ yy_.yytext); return 18
break;
case 31: console.log("Reconocio : "+ yy_.yytext); return 19
break;
case 32: console.log("Reconocio : "+ yy_.yytext); return 20
break;
case 33: console.log("Reconocio : "+ yy_.yytext); return 21
break;
case 34: console.log("Reconocio : "+ yy_.yytext); return 22
break;
case 35: console.log("Reconocio : "+ yy_.yytext); return 23
break;
case 36: console.log("Reconocio : "+ yy_.yytext); return 24
break;
case 37: console.log("Reconocio : "+ yy_.yytext); return 25
break;
case 38: console.log("Reconocio : "+ yy_.yytext); return 26
break;
case 39: console.log("Reconocio : "+ yy_.yytext); return 27
break;
case 40: console.log("Reconocio : "+ yy_.yytext); return 28
break;
case 41: console.log("Reconocio : "+ yy_.yytext); return 45
break;
case 42: console.log("Reconocio : "+ yy_.yytext); return 46
break;
case 43: console.log("Reconocio : "+ yy_.yytext); return 51
break;
case 44: console.log("Reconocio : "+ yy_.yytext); return 47
break;
case 45:return 5
break;
case 46: console.log("Error Lexico "+yy_.yytext
                        +" linea "+yy_.yylineno
                        +" columna "+(yy_.yylloc.last_column+1));
                                      
                        
break;
}
},
rules: [/^(?:\()/i,/^(?:\/\/)/i,/^(?:\/)/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:@)/i,/^(?:\.)/i,/^(?:\.\.)/i,/^(?:\|)/i,/^(?:::)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:div\b)/i,/^(?:mod\b)/i,/^(?:=)/i,/^(?:<=)/i,/^(?:<)/i,/^(?:>=)/i,/^(?:>)/i,/^(?:!=)/i,/^(?:and\b)/i,/^(?:or\b)/i,/^(?:last\(\))/i,/^(?:position\(\))/i,/^(?:antecestor\b)/i,/^(?:attribute\b)/i,/^(?:antecestor-or-self\b)/i,/^(?:child\b)/i,/^(?:descendant\b)/i,/^(?:descendant-or-self\b)/i,/^(?:following\b)/i,/^(?:following-sibling\b)/i,/^(?:namespace\b)/i,/^(?:parent\b)/i,/^(?:preceding\b)/i,/^(?:preceding-sibling\b)/i,/^(?:self\b)/i,/^(?:text\b)/i,/^(?:node\b)/i,/^(?:[0-9]+(\.[0-9]+)?\b)/i,/^(?:([0-9]+))/i,/^(?:([a-zñA-ZÑ_][a-zñA-ZÑ0-9_]*))/i,/^(?:(('((\\([\'\"\\ntr]))|([^\"\\]+))*')))/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}