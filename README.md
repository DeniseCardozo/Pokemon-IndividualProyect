# Individual Project - Henry Pokemon

<img height="150" src="./pokemon.png" />

Como proyecto individual para el bootcamp de Henry, se realiza la creación de una SPA (Single Page Aplication) en la cual se pueden ver los distintos Pokemon utilizando la api externa [pokeapi](https://pokeapi.co/) y a partir de ella poder, entre otras cosas:

- Buscar pokemons
- Filtrarlos / Ordenarlos
- Crear nuevos pokemons

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.


### Tecnologías utilizadas

- React
- Redux
- Express
- Sequelize - Postgres


### Únicos Endpoints/Flags utilizados/permitidos

- GET <https://pokeapi.co/api/v2/pokemon>
- GET <https://pokeapi.co/api/v2/pokemon/{id}>
- GET <https://pokeapi.co/api/v2/pokemon/{name}>
- GET <https://pokeapi.co/api/v2/type>


## Requerimientos mínimos

A continuación se detallaran los requerimientos mínimos para la aprobación del proyecto individial. En cuanto al diseño visual no hubieron wireframes ni prototipos prefijados sino que se tuvo libertad de hacerlo a gusto pero aplicando los conocimientos de estilos vistos en el curso para que quede agradable a la vista.

_IMPORTANTE_: No se permitió utilizar librerías externas para aplicar estilos a la aplicación. Se utilizó CSS Modules.

## Frontend

Se debía desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

_Pagina inicial_: armar una landing page con

- Alguna imagen de fondo representativa al proyecto
- Botón para ingresar al home (`Ruta principal`)

_Ruta principal_: contiene

- Input de búsqueda para encontrar pokemons por nombre (La búsqueda será exacta, es decir solo encontrará al pokemon si se coloca el nombre completo)
- Área donde se verá el listado de pokemons. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta `GET /pokemons` y deberá mostrar su:
```
  - Imagen
  - Nombre
  - Tipos (Electrico, Fuego, Agua, etc)
```
- Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
- Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por ataque
_IMPORTANTE_: Para las funcionalidades de filtrado y ordenamiento NO se podía utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados sino que debía realizarlo uno mismo. En particular alguno de los ordenamientos o filtrados debe si o si realizarse desde el frontend.
- Paginado para ir buscando y mostrando los siguientes pokemons, 12 pokemons por pagina.

_Ruta de detalle de Pokemon_: contiene

- Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
- Número de Pokemon (id)
- Estadísticas (vida, ataque, defensa, velocidad)
- Altura y peso

_Ruta de creación_: contiene

- Un formulario _controlado con JavaScript_ con los campos mencionados en el detalle del Pokemon
- Posibilidad de seleccionar/agregar más de un tipo de Pokemon
- Botón/Opción para crear un nuevo Pokemon

## Base de datos

El modelo de la base de datos tiene las siguientes entidades (Aquellas propiedades marcadas con asterísco fueron obligatorias):

Pokemon con las siguientes propiedades:
- ID (Número de Pokemon) * : No puede ser un ID de un pokemon ya existente en la API pokeapi
- Nombre *
- Vida
- Ataque
- Defensa
- Velocidad
- Altura
- Peso

Tipo con las siguientes propiedades:
- ID
- Nombre

La relación entre ambas entidades es de muchos a muchos ya que un pokemon puede pertenecer a más de un tipo y, a su vez, un tipo puede incluir a muchos pokemons.

## Backend

Se desarrolló un servidor en Node/Express con las siguientes rutas:

_IMPORTANTE_: No se permitió utilizar los filtrados, ordenamientos y paginados brindados por la API externa, todas estas funcionalidades tenian que ser implementarlas por uno mismo.

_GET /pokemons_:
- Obtener un listado de los pokemons desde pokeapi.
- Devolver solo los datos necesarios para la ruta principal

_GET /pokemons/{idPokemon}_:
- Obtener el detalle de un pokemon en particular
- Traer solo los datos pedidos en la ruta de detalle de pokemon
- Funciona tanto para un id de un pokemon existente en pokeapi o uno creado por el usuario

_GET /pokemons?name="..."_:
- Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por el usuario)
- Si no existe ningún pokemon muestra un mensaje adecuado

_POST /pokemons_:
- Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
- Crea un pokemon en la base de datos relacionado con sus tipos.

_GET /types_:
- Obtener todos los tipos de pokemons posibles
- En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
