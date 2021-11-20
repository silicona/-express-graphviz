// Paquete necesario para conectar a bases de datos MySQL.
import mysql from 'mysql2/promise';

export class Client {

  public constructor() {

  }

  public async get() {
    const conexion = await Client.getconexion()

    var sql = 'SELECT * FROM contactos LIMIT 10';
    var resultado: [rows: any[], fields: mysql.FieldPacket[]]

    resultado = await conexion.execute(sql)
    //console.log(resultado)
    return resultado[0]

  }

  public static async getconexion() {
    return mysql.createConnection({
      host: "localhost",
      port: 8889,
      user: "root",
      password: "root",
      database: 'agenda'
    });
  }
}