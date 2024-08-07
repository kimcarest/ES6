"use strict";

require("core-js/modules/es.parse-int.js");
var _cliente = require("./cliente.js");
var _impuesto = require("./impuesto.js");
var impuesto1 = new _impuesto.Impuestos(parseInt(10000), parseInt(20000));
var cliente1 = new _cliente.Cliente("Pedro Pascal", impuesto1);
console.log("el impuesto anual de ".concat(cliente1.nombre, " es: $").concat(cliente1.calcularImpuesto()));