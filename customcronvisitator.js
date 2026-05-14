import cronVisitor from './generated/cronVisitor.js';

export default class CustomCronVisitator extends cronVisitor {
    // Procesa la regla inicial
    visitSchedule(ctx) {
        // Obtenemos los resultados de cada campo temporal y los unimos con un espacio
        const campos = ctx.time_field().map(field => this.visit(field));
        return `Expresión Cron traducida: ${campos.join(' | ')}`;
    }

    visitTime_field(ctx) {
        return this.visitChildren(ctx)[0]; // Retorna el valor del hijo (value, range, etc.)
    }

    visitValue(ctx) {
        return ctx.getText(); // Retorna el número tal cual
    }

    visitWildcard(ctx) {
        return "siempre"; 
    }

    visitRange(ctx) {
        const nums = ctx.getText().split('-');
        return `desde ${nums[0]} hasta ${nums[1]}`;
    }

    visitList(ctx) {
        // Filtra comas y procesa los ítems de la lista
        const items = ctx.item().map(it => this.visit(it));
        return `en (${items.join(', ')})`;
    }

    visitItem(ctx) {
        return this.visitChildren(ctx)[0];
    }
}