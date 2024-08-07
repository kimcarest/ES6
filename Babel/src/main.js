import { Cliente } from "./cliente.js";
import { Impuestos } from "./impuesto.js";

const impuesto1 = new Impuestos(parseInt(10000), parseInt (20000));
const cliente1 = new Cliente(`Pedro Pascal`, impuesto1);

console.log(`el impuesto anual de ${cliente1.nombre} es: $${cliente1.calcularImpuesto()}`);