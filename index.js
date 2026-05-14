import fs from 'fs';
import antlr4 from 'antlr4';
import CronLexer from './generated/cronLexer.js';
import CronParser from './generated/cronParser.js';
import CustomCronVisitor from './customcronvisitator.js';

// 1. Lectura del archivo
const input = fs.readFileSync("input.txt", "utf8");
const chars = new antlr4.InputStream(input);

// 2. Análisis Léxico
const lexer = new CronLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

// 3. Análisis Sintáctico
const parser = new CronParser(tokens);
const tree = parser.schedule(); // 'schedule' es tu regla inicial según image_d9f2fd.png

// --- SALIDA POR CONSOLA (Como en la foto) ---

// Punto 1 de la tarea: Informar si la entrada es correcta
if (parser.syntaxErrorsCount === 0) {
    console.log("Entrada válida.");
} else {
    console.log(`Entrada con errores: se encontraron ${parser.syntaxErrorsCount} errores.`);
}

// Punto 3 de la tarea: Mostrar el árbol de análisis sintáctico en texto
console.log("Árbol de derivación: " + tree.toStringTree(parser.ruleNames));

// Punto 4 de la tarea: Interpretación (Traducción)
const visitor = new CustomCronVisitor();
const resultado = visitor.visit(tree);

console.log("\nResultado (Traducción):");
console.log(resultado);