import CronListener from "./generated/CronListener.js";

export default class CustomCronListener extends CronListener {

    enterSchedule(ctx) {
        console.log("-> Inicio del schedule");
    }

    exitSchedule(ctx) {
        console.log("-> Fin del schedule");
    }

    enterTime_field(ctx) {
        console.log("Campo temporal:", ctx.getText());
    }

    enterRange(ctx) {
        console.log("Rango detectado:", ctx.getText());
    }

    enterStep(ctx) {
        console.log("Step detectado:", ctx.getText());
    }

    enterWildcard(ctx) {
        console.log("Wildcard detectado:", ctx.getText());
    }

    enterList(ctx) {
        console.log("Lista detectada:", ctx.getText());
    }

    enterPredefined(ctx) {
        console.log("Expresión predefinida:", ctx.getText());
    }
}