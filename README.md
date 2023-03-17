# RatherLabsServer
Server


Este es el servidor de una aplicación web que permite a los usuarios depositar activos en el protocolo Aave utilizando su billetera Web3.
El servidor está construido utilizando los siguientes frameworks y librerías:

Express.js como framework de servidor para crear los endpoints de la API
Node.js como entorno de ejecución para JavaScript
Sequelize como ORM para interactuar con la base de datos PostgreSQL
PostgreSQL como base de datos relacional para almacenar los depósitos registrados
La API proporciona endpoints para registrar los depósitos en el pool de Aave, obtener un historial de los depósitos, 
obtener la lista de pools disponibles y realizar el procesamiento de datos.

Se necesita de un archivo .env con los siguientes datos:
  PORT= //puerto http 
  URL=  //url de la base de datos
  
  Cuenta con los siguientes EndPoints:
  /users            //devuelve los usuarios que accedieron con su llave publica
  /deposits/:id      // devuelve los depositos relacionados a estos usuarios
  
  
  Analizando el proyecto del servidor hay oportunidad de mejoras en la captura de errores y la validacion de datos en los EndPoints. 
  Con esta base de datos es escalable  y hay una posibilidad de registrar tambien los retiros y crear un balance de la cuenta.
  
