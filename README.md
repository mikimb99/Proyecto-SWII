# Proyecto-SWII
### Miembros del grupo: 
* Diego Herrero
* Miguel Melero
### Instrucciones de ejecución:

#### MongoDB:

Iniciar una base de datos MongoDB utilizando los parámetros en el fichero de environment. 

mongoimport --db animales --collection animales --file ProyectoSW2\Proyecto-SWII\animales.json --type json

mongoimport --db animales --collection especies --file ProyectoSW2\Proyecto-SWII\especies.json --type json 

mongoimport --db animales --collection lugares --file ProyectoSW2\Proyecto-SWII\lugares.json --type json 

#### Instalación de dependecias:

Las dependencias se instalarán usando el comando npm ci, tanto en la carpeta /Proyecto-SWII como en la carpeta /front

#### Arranque de los servicios: 

Iniciar el servicio web con npm start, tanto en /Proyecto-SWII (servidor
) como en /front (cliente).

Se ejecutarán en http://localhost:3000 y http://localhost:5174 respectivamente

#### Realizar peticiones:

Acceder a http://localhost:5174 con el servidor arrancado previamente, para realizar las peticiones desde el front-end.


