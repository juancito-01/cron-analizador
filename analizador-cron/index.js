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
const tree = parser.schedule(); // 'schedule' es tu regla inicial

// --- SALIDA POR CONSOLA ---

// CORRECCIÓN AQUÍ: Usamos 'numberOfSyntaxErrors' de ANTLR
if (parser.numberOfSyntaxErrors === 0) {
    
    console.log("Entrada válida.");
    
    // Punto 3 de la tarea: Mostrar el árbol de análisis sintáctico en texto
    console.log("Árbol de derivación: " + tree.toStringTree(parser.ruleNames));

    // Punto 4 de la tarea: Interpretación (Traducción)
    const visitor = new CustomCronVisitor();
    const resultado = visitor.visit(tree);

    console.log("\nResultado (Traducción):");
    console.log(resultado);

} else {
    // Si entra acá, ANTLR ya habrá escupido los "token recognition error" automáticamente arriba
    console.log(`\nEntrada INCORRECTA: se encontraron ${parser.numberOfSyntaxErrors} errores sintácticos.`);
}