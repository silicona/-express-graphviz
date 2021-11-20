"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
// Paquete necesario para conectar a bases de datos MySQL.
const mysql_1 = __importDefault(require("mysql"));
class Client {
    constructor() {
        this.conexion = mysql_1.default.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: 'agenda'
        });
    }
    get() {
        var sql = 'SELECT * FROM luisjordan_category LIMIT 10';
        var resultado;
        // Parámetros de conexión a la base de datos.
        // Funcion que nos permite comprobar la conexión a la base de datos.
        // con.connect(function(err) {
        //   if (err) throw err;
        //   console.log("Connected!");
        // });
        // Funcion que nos devolverá resultados de la base de datos.
        this.conexion.query(sql, function (err, result) {
            if (err)
                throw err;
            resultado = result;
            // Bucle que recore los resultados y pinta en consola.
            /*for (var i: number = 0; i < result.length; i++) {
              console.log("Result: " + result[i].name);
            }*/
        });
        return resultado;
    }
}
exports.Client = Client;
