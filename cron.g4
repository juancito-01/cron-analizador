grammar cron;

// REGLA INICIAL
schedule : time_field (time_field)* EOF ;

time_field
    : predefined
    | list
    | step
    | range
    | value
    | wildcard
    ;

value : NUMBER ;

range : NUMBER '-' NUMBER ('/' NUMBER)? ;

step : (wildcard | range | value) '/' NUMBER ;

wildcard : STAR ;

list : item (',' item)* ;

item : range | value ;

predefined 
    : '@yearly' 
    | '@monthly' 
    | '@weekly' 
    | '@daily' 
    | '@hourly' 
    | '@reboot' 
    ;

// LEXER
STAR : '*' ;
NUMBER : [0-9]+ ;

// ESTA ES LA CLAVE: Ignora espacios, tabulaciones y saltos de línea
WS : [ \t\r\n]+ -> skip ;