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
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,5],$V2=[1,7],$V3=[1,9],$V4=[1,10],$V5=[1,11],$V6=[1,12],$V7=[1,13],$V8=[1,14],$V9=[1,15],$Va=[1,16],$Vb=[1,17],$Vc=[1,18],$Vd=[1,19],$Ve=[1,20],$Vf=[1,21],$Vg=[1,22],$Vh=[1,23],$Vi=[1,24],$Vj=[1,25],$Vk=[5,7,9,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,36,37],$Vl=[1,31],$Vm=[1,43],$Vn=[1,42],$Vo=[1,38],$Vp=[1,39],$Vq=[1,30],$Vr=[1,32],$Vs=[1,33],$Vt=[1,34],$Vu=[1,35],$Vv=[1,36],$Vw=[1,37],$Vx=[1,41],$Vy=[1,49],$Vz=[1,48],$VA=[5,7,9,11,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,31,36,37,38,40,41,42,43,44,46,52,53,59],$VB=[1,54],$VC=[5,7,9,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,34,35,36,37],$VD=[1,57],$VE=[1,56],$VF=[1,58],$VG=[1,59],$VH=[1,60],$VI=[1,61],$VJ=[1,62],$VK=[1,63],$VL=[2,58],$VM=[5,7,9,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,31,36,37,38,40,41,42,43,44,46,52,53,59],$VN=[5,7,9,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,31,36,37,38,46,52,53,59],$VO=[5,7,9,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,31,36,37,46,52,53,59],$VP=[5,7,9,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,33,34,35,36,37];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"inicio":3,"instrucciones":4,"EOF":5,"instruccion":6,"BARRA":7,"e":8,"BARRABARRA":9,"RESERV":10,"DOSPUNTOS":11,"SIGNOO":12,"OPERADORES":13,"LAST":14,"POSITION":15,"ANCESTOR":16,"RESERVLARGE":17,"ATTRIBUTE":18,"ANCESORSELF":19,"CHILD":20,"DESCENDANT":21,"FOLLOWING":22,"NAMESPACE":23,"PARENT":24,"PRECENDING":25,"SELF":26,"TEXT":27,"NODE":28,"SIBLING":29,"MENOS":30,"OR":31,"MAS":32,"ASTERISCO":33,"DIV":34,"MODULO":35,"DECIMAL":36,"ENTERO":37,"AND":38,"NOT":39,"MAYORQUE":40,"MAYORIGUAL":41,"MENORQUE":42,"MENORIGUAL":43,"DIFERENTE":44,"PARA":45,"PARC":46,"CADENA":47,"CHAR":48,"TRUE":49,"FALSE":50,"ID":51,"INTERROGACION":52,"DSPNTS":53,"INCRE":54,"DECRE":55,"lista_exp":56,"SIM":57,"CORA":58,"CORC":59,"ARROBA":60,"IGUAL":61,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"BARRA",9:"BARRABARRA",11:"DOSPUNTOS",12:"SIGNOO",14:"LAST",15:"POSITION",16:"ANCESTOR",18:"ATTRIBUTE",19:"ANCESORSELF",20:"CHILD",21:"DESCENDANT",22:"FOLLOWING",23:"NAMESPACE",24:"PARENT",25:"PRECENDING",26:"SELF",27:"TEXT",28:"NODE",29:"SIBLING",30:"MENOS",31:"OR",32:"MAS",33:"ASTERISCO",34:"DIV",35:"MODULO",36:"DECIMAL",37:"ENTERO",38:"AND",39:"NOT",40:"MAYORQUE",41:"MAYORIGUAL",42:"MENORQUE",43:"MENORIGUAL",44:"DIFERENTE",45:"PARA",46:"PARC",47:"CADENA",48:"CHAR",49:"TRUE",50:"FALSE",51:"ID",52:"INTERROGACION",53:"DSPNTS",54:"INCRE",55:"DECRE",56:"lista_exp",58:"CORA",59:"CORC",60:"ARROBA",61:"IGUAL"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,2],[6,3],[6,2],[6,4],[6,1],[10,1],[10,1],[10,2],[10,1],[10,1],[10,1],[10,2],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[17,4],[17,2],[13,3],[13,3],[13,3],[13,3],[13,3],[13,1],[13,1],[8,3],[8,3],[8,2],[8,3],[8,3],[8,3],[8,3],[8,3],[8,2],[8,3],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,5],[8,2],[8,2],[8,3],[8,4],[8,1],[8,4],[8,1],[57,2],[57,4],[57,2],[57,1],[57,2]],
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
case 27:
this.$ = new aritmetica.default($$[$0-2], '+', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 28:
this.$ = new aritmetica.default($$[$0-2], '-', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 29:
this.$ = new aritmetica.default($$[$0-2], '*', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 30:
this.$ = new aritmetica.default($$[$0-2], '/', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 31:
this.$ = new aritmetica.default($$[$0-2], '%', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 32: case 33: case 49: case 50:
this.$ = new primitivo.default(Number(yytext), $$[$0].first_line, $$[$0].last_column);
break;
case 34:
this.$ = new logica.default($$[$0-2], '&&', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 35:
this.$ = new logica.default($$[$0-2], 'OR', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 36: case 59:
this.$ = new logica.default($$[$0], '@', null, $$[$0-1].first_line, $$[$0-1].last_column, true);
break;
case 37:
this.$ = new relacional.default($$[$0-2],'>', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 38:
this.$ = new relacional.default($$[$0-2],'>=', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 39:
this.$ = new relacional.default($$[$0-2],'<', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 40:
this.$ = new relacional.default($$[$0-2],'<=', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 41:
this.$ = new relacional.default($$[$0-2],'!=', $$[$0], $$[$0-2].first_line, $$[$0-2].last_column, false);
break;
case 42:
this.$ = new aritmetica.default($$[$0], 'UNARIO', null, $$[$0-1].first_line, $$[$0-1].last_column, true);
break;
case 43:
this.$ = $$[$0-1];
break;
case 44: case 45:
$$[$0] = $$[$0].slice(1, $$[$0].length-1); this.$ = new primitivo.default($$[$0], $$[$0].first_line, $$[$0].last_column);
break;
case 46:
this.$ = new primitivo.default(true, $$[$0].first_line, $$[$0].last_column);
break;
case 47:
this.$ = new primitivo.default(false, $$[$0].first_line, $$[$0].last_column);
break;
case 51:
this.$ = new ternario.default($$[$0-4], $$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].last_column); 
break;
case 54:
 this.$ = new llamada.default($$[$0-2].toLowerCase() , [],_$[$0-2].first_line, _$[$0-2].last_column ); 
break;
case 55:
 this.$ = new llamada.default($$[$0-3].toLowerCase() , $$[$0-1] ,_$[$0-3].first_line, _$[$0-3].last_column ); 
break;
}
},
table: [{3:1,4:2,6:3,7:$V0,9:$V1,10:6,12:$V2,13:8,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,36:$Vi,37:$Vj},{1:[3]},{5:[1,26],6:27,7:$V0,9:$V1,10:6,12:$V2,13:8,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,36:$Vi,37:$Vj},o($Vk,[2,3]),{8:28,10:29,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vl,31:$Vm,33:$Vn,36:$Vo,37:$Vp,39:$Vq,45:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,57:40,60:$Vx},{8:44,10:45,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vl,31:$Vm,33:$Vn,36:$Vo,37:$Vp,39:$Vq,45:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,57:40,60:$Vx},{11:[1,46]},{6:47,7:$V0,9:$V1,10:6,12:$V2,13:8,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,36:$Vi,37:$Vj},o($Vk,[2,9],{30:$Vy,32:$Vz,33:[1,50],34:[1,51],35:[1,52]}),o($VA,[2,10]),o($VA,[2,11]),{17:53,30:$VB},o($VA,[2,13]),o($VA,[2,14]),o($VA,[2,15]),{17:55,30:$VB},o($VA,[2,17]),o($VA,[2,18]),o($VA,[2,19]),o($VA,[2,20]),o($VA,[2,21]),o($VA,[2,22]),o($VA,[2,23]),o($VA,[2,24]),o($VC,[2,32]),o($VC,[2,33]),{1:[2,1]},o($Vk,[2,2]),o($Vk,[2,4],{31:$VD,38:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,52:$VK}),o([5,7,9,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,31,36,37,38,40,41,42,43,44,52],$VL,{11:[1,64]}),{8:65,10:45,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vl,31:$Vm,33:$Vn,36:$Vo,37:$Vp,39:$Vq,45:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,57:40,60:$Vx},{8:66,10:45,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vl,31:$Vm,33:$Vn,36:$Vo,37:$Vp,39:$Vq,45:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,57:40,60:$Vx},{8:67,10:45,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vl,31:$Vm,33:$Vn,36:$Vo,37:$Vp,39:$Vq,45:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,57:40,60:$Vx},o($VM,[2,44]),o($VM,[2,45]),o($VM,[2,46]),o($VM,[2,47]),o($VM,[2,48],{45:[1,70],54:[1,68],55:[1,69],58:[1,71]}),o($VM,[2,49]),o($VM,[2,50]),o($VM,[2,56]),{33:[1,73],51:[1,72]},o($VM,[2,62]),{8:74,10:45,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vl,31:$Vm,33:$Vn,36:$Vo,37:$Vp,39:$Vq,45:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,57:40,60:$Vx},o($Vk,[2,5],{31:$VD,38:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,52:$VK}),o($VM,$VL),{8:75,10:45,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vl,31:$Vm,33:$Vn,36:$Vo,37:$Vp,39:$Vq,45:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,57:40,60:$Vx},o($Vk,[2,7]),{13:76,36:$Vi,37:$Vj},{13:77,36:$Vi,37:$Vj},{13:78,36:$Vi,37:$Vj},{13:79,36:$Vi,37:$Vj},{13:80,36:$Vi,37:$Vj},o($VA,[2,12]),{29:[1,82],31:[1,81]},o($VA,[2,16]),{8:83,10:45,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vl,31:$Vm,33:$Vn,36:$Vo,37:$Vp,39:$Vq,45:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,57:40,60:$Vx},{8:84,10:45,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vl,31:$Vm,33:$Vn,36:$Vo,37:$Vp,39:$Vq,45:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,57:40,60:$Vx},{8:85,10:45,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vl,31:$Vm,33:$Vn,36:$Vo,37:$Vp,39:$Vq,45:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,57:40,60:$Vx},{8:86,10:45,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vl,31:$Vm,33:$Vn,36:$Vo,37:$Vp,39:$Vq,45:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,57:40,60:$Vx},{8:87,10:45,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vl,31:$Vm,33:$Vn,36:$Vo,37:$Vp,39:$Vq,45:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,57:40,60:$Vx},{8:88,10:45,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vl,31:$Vm,33:$Vn,36:$Vo,37:$Vp,39:$Vq,45:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,57:40,60:$Vx},{8:89,10:45,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vl,31:$Vm,33:$Vn,36:$Vo,37:$Vp,39:$Vq,45:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,57:40,60:$Vx},{8:90,10:45,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vl,31:$Vm,33:$Vn,36:$Vo,37:$Vp,39:$Vq,45:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,57:40,60:$Vx},{8:91,10:45,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vl,31:$Vm,33:$Vn,36:$Vo,37:$Vp,39:$Vq,45:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,57:40,60:$Vx},o($VN,[2,36],{40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ}),o($VN,[2,42],{40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ}),{31:$VD,38:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,46:[1,92],52:$VK},o($VM,[2,52]),o($VM,[2,53]),{46:[1,93],56:[1,94]},{8:95,10:45,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vl,31:$Vm,33:$Vn,36:$Vo,37:$Vp,39:$Vq,45:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,57:40,60:$Vx},o($VM,[2,59],{61:[1,96]}),o($VM,[2,61]),o($VO,[2,63],{38:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ}),o($Vk,[2,6],{31:$VD,38:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,52:$VK}),o($VC,[2,27]),o($VC,[2,28]),o($VP,[2,29],{30:$Vy,32:$Vz}),o($VP,[2,30],{30:$Vy,32:$Vz}),o($VP,[2,31],{30:$Vy,32:$Vz}),{30:[1,97]},o($VA,[2,26]),o($VN,[2,34],{40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ}),o($VO,[2,35],{38:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ}),o($VM,[2,37]),o($VM,[2,38]),o($VM,[2,39]),o($VM,[2,40]),o($VM,[2,41]),{31:$VD,38:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,52:$VK,53:[1,98]},o($Vk,[2,8],{31:$VD,38:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,52:$VK}),o($VM,[2,43]),o($VM,[2,54]),{46:[1,99]},{31:$VD,38:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,52:$VK,59:[1,100]},{47:[1,101]},{26:[1,102]},{8:103,10:45,14:$V3,15:$V4,16:$V5,18:$V6,19:$V7,20:$V8,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vl,31:$Vm,33:$Vn,36:$Vo,37:$Vp,39:$Vq,45:$Vr,47:$Vs,48:$Vt,49:$Vu,50:$Vv,51:$Vw,57:40,60:$Vx},o($VM,[2,55]),o($VM,[2,57]),o($VM,[2,60]),o($VA,[2,25]),o([5,7,9,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,36,37,46,53,59],[2,51],{31:$VD,38:$VE,40:$VF,41:$VG,42:$VH,43:$VI,44:$VJ,52:$VK})],
defaultActions: {26:[2,1]},
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
case 1: console.log("Reconocio : "+ yy_.yytext); return 41
break;
case 2: console.log("Reconocio : "+ yy_.yytext); return 61
break;
case 3: console.log("Reconocio : "+ yy_.yytext); return 42
break;
case 4: console.log("Reconocio : "+ yy_.yytext); return 40
break;
case 5: console.log("Reconocio : "+ yy_.yytext); return 44
break;
case 6: console.log("Reconocio : "+ yy_.yytext); return 45
break;
case 7: console.log("Reconocio : "+ yy_.yytext); return 9
break;
case 8: console.log("Reconocio : "+ yy_.yytext); return 7
break;
case 9: console.log("Reconocio : "+ yy_.yytext); return 46
break;
case 10: console.log("Reconocio : "+ yy_.yytext); return 58
break;
case 11: console.log("Reconocio : "+ yy_.yytext); return 59
break;
case 12: console.log("Reconocio : "+ yy_.yytext); return 60
break;
case 13: console.log("Reconocio : "+ yy_.yytext); return 'PUNTO'
break;
case 14: console.log("Reconocio : "+ yy_.yytext); return 'PUNTOPUNTO'
break;
case 15: console.log("Reconocio : "+ yy_.yytext); return 12
break;
case 16: console.log("Reconocio : "+ yy_.yytext); return 11
break;
case 17: console.log("Reconocio : "+ yy_.yytext); return 32
break;
case 18: console.log("Reconocio : "+ yy_.yytext); return 30
break;
case 19: console.log("Reconocio : "+ yy_.yytext); return 33
break;
case 20: console.log("Reconocio : "+ yy_.yytext); return 34
break;
case 21: console.log("Reconocio : "+ yy_.yytext); return 35
break;
case 22: console.log("Reconocio : "+ yy_.yytext); return 38
break;
case 23: console.log("Reconocio : "+ yy_.yytext); return 31
break;
case 24: console.log("Reconocio : "+ yy_.yytext); return 14
break;
case 25: console.log("Reconocio : "+ yy_.yytext); return 15
break;
case 26: console.log("Reconocio : "+ yy_.yytext); return 16
break;
case 27: console.log("Reconocio : "+ yy_.yytext); return 18
break;
case 28: console.log("Reconocio : "+ yy_.yytext); return 26
break;
case 29: console.log("Reconocio : "+ yy_.yytext); return 20
break;
case 30: console.log("Reconocio : "+ yy_.yytext); return 21
break;
case 31: console.log("Reconocio : "+ yy_.yytext); return 22
break;
case 32: console.log("Reconocio : "+ yy_.yytext); return 29
break;
case 33: console.log("Reconocio : "+ yy_.yytext); return 23
break;
case 34: console.log("Reconocio : "+ yy_.yytext); return 24
break;
case 35: console.log("Reconocio : "+ yy_.yytext); return 25
break;
case 36: console.log("Reconocio : "+ yy_.yytext); return 27
break;
case 37: console.log("Reconocio : "+ yy_.yytext); return 28
break;
case 38: console.log("Reconocio : "+ yy_.yytext); return 37
break;
case 39: console.log("Reconocio : "+ yy_.yytext); return 36
break;
case 40: console.log("Reconocio : "+ yy_.yytext); return 51
break;
case 41: console.log("Reconocio : "+ yy_.yytext); return 47
break;
case 42: /* skip whitespace */ 
break;
case 43:return 5
break;
case 44: console.log("Error Lexico "+yy_.yytext
                        +" linea "+yy_.yylineno
                        +" columna "+(yy_.yylloc.last_column+1));
                                      
                        
break;
}
},
rules: [/^(?:<=)/i,/^(?:>=)/i,/^(?:=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:!=)/i,/^(?:\()/i,/^(?:\/\/)/i,/^(?:\/)/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:@)/i,/^(?:\.)/i,/^(?:\.\.)/i,/^(?:\|)/i,/^(?:::)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:div\b)/i,/^(?:mod\b)/i,/^(?:and\b)/i,/^(?:or\b)/i,/^(?:last\(\))/i,/^(?:position\(\))/i,/^(?:ancestor\b)/i,/^(?:attribute\b)/i,/^(?:self\b)/i,/^(?:child\b)/i,/^(?:descendant\b)/i,/^(?:following\b)/i,/^(?:sibling\b)/i,/^(?:namespace\b)/i,/^(?:parent\b)/i,/^(?:preceding\b)/i,/^(?:text\(\))/i,/^(?:node\(\))/i,/^(?:([0-9]+))/i,/^(?:[0-9]+\.[0-9]+\b)/i,/^(?:([a-zñA-ZÑ_][a-zñA-ZÑ0-9_]*))/i,/^(?:(("((\\([\'\"\\ntr]))|([^\"\\]+))*")))/i,/^(?:[\s\r\n\t])/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"inclusive":true}}
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