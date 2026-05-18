import fs from 'fs';
import antlr4 from 'antlr4';
import CronLexer from './generated/cronLexer.js';
import CronParser from './generated/cronParser.js';
import CustomCronVisitor from './customcronvisitator.js';

// 1. Lectura del archivo input.txt
const input = fs.readFileSync("input.txt", "utf8");
const chars = new antlr4.InputStream(input);

// 2. Análisis Léxico
const lexer = new CronLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

// 3. Análisis Sintáctico
const parser = new CronParser(tokens);

// --- DETECTOR INFALIBLE DE ERRORES ---
let contadorErrores = 0;

class ContadorDeErrores extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        contadorErrores++;
    }
}

// Le acoplamos nuestro detector al lexer y al parser
const detector = new ContadorDeErrores();
lexer.removeErrorListeners();
lexer.addErrorListener(detector);
parser.removeErrorListeners();
parser.addErrorListener(detector);
// -------------------------------------

// Ejecutamos la regla inicial después de activar el detector
const tree = parser.schedule(); 

// --- SALIDA POR CONSOLA ---

if (contadorErrores === 0) {
    
    console.log("Entrada válida.");
    
    // Punto 3 de la tarea: Mostrar el árbol de análisis sintáctico en texto
    console.log("Árbol de derivación: " + tree.toStringTree(parser.ruleNames));

    // Punto 4 de la tarea: Interpretación (Traducción)
    const visitor = new CustomCronVisitor();
    const resultado = visitor.visit(tree);

    console.log("\nResultado (Traducción):");
    console.log(resultado);

} else {
    // Si nuestro contador sumó aunque sea 1 error, frena de inmediato
    console.log(`\nEntrada INCORRECTA: se encontraron ${contadorErrores} errores sintácticos.`);
}
