Analizador de Expresiones Cron con ANTLR

Este proyecto es un analizador sintáctico diseñado para validar y procesar expresiones Cron. Utiliza ANTLR4 para definir la gramática y generar los lexers y parsers necesarios para interpretar los cinco (o seis) campos típicos de una tarea programada.

📂 Estructura del Proyecto

cron-parser-project/
├── antlr/
│   └── Cron.g4             # Gramática principal del proyecto
├── generated/              # Archivos creados automáticamente por ANTLR
│   ├── CronLexer.java
│   ├── CronParser.java
│   └── CronListener.java
└── module/                 # Lógica principal de la aplicación
    ├── src/
    │   └── App.java        # Punto de entrada
    └── pom.xml             # Configuración de dependencias


🚀 Instalación y Requisitos

Requisitos: Tener instalado Java JDK 11 o superior y ANTLR4.

Clonar el repositorio:

git clone https://github.com/juancito-01/cron-analizador.git


📝 Sintaxis Soportada

El analizador valida expresiones con el siguiente formato:

[MINUTO] [HORA] [DÍA_DEL_MES] [MES] [DÍA_DE_LA_SEMANA]

Ejemplos de prueba:

* * * * * : Se ejecuta cada minuto.

0 12 * * 1-5 : Se ejecuta a las 12:00 PM de lunes a viernes.

*/15 0 1,15 * * : Se ejecuta cada 15 minutos a la medianoche los días 1 y 15 de cada mes.

🧪 Casos de Prueba Incluidos

En el repositorio encontrarás archivos de ejemplo para testear el analizador:

input_correcto_1.txt: Expresiones estándar válidas.

input_correcto_2.txt: Expresiones con rangos (-) e intervalos (/).

input_incorrecto_1.txt: Valores fuera de rango (ej. minuto 65).

input_incorrecto_2.txt: Formatos con caracteres no permitidos.
<img width="1388" height="261" alt="image" src="https://github.com/user-attachments/assets/5bff8924-e001-4b39-86b6-ad4c5d2e1667" />

