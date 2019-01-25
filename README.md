# Proyecto Hackaton Películas

  

## Movie Gamer WebApp.
![
](https://lh3.googleusercontent.com/o0IUkqdjZiXhhQwSj37mT8jq305KfCcK99cB9gbHHIvY_I-ZZzFs30Bob5KRsI4AlVq36VlUTQFQ "imagen")
 
## Contexto

  

  

  

  

El inicio de este trabajo se desarrolla en el contexto del Bootcamp de [Laboratoria](https://www.laboratoria.la/). Desafío Hackaton final del Common Core.


****Cuándo:**** La duración para el desarrollo del proyecto fue de 4 días, con fecha de entrega el Viernes 25 de enero del 2019.


****Problema/meta general:**** Construir una página web pa

****Equipo:**** Este proyecto se basa en el trabajo en equipos conformados por duplas.


****Herramientas utilizadas:****


<p  align="center">

<img  src='http://subirimagen.me/uploads/20190108122651.png'  />

</p>

  

  

****Resultados y entregas:****

  

  

  

- Un reporte con las conclusiones clave respecto al trabajo con los usuarios y los patrones de interacción.

 

- Una página web que permita al usuario encontrar información sobre películas relaiconadas con videojuegos.

  
****Status:**** Finalizado.



## Etapa 1 - Definición del usuario.

#### El problema

Cuando alguien quiere buscar información o ver una película del videojuego favorito, es muy difícil buscar, ya que se encuentra dentro de otras categorías, ya sea en categoría infantil, familiar, ciencia ficción, provocando que encontrar esta información sea complicado especialmente para los niños que están aprendiendo a leer.

Por el motivo anterior es que quisimos desarrollar un sitio web que fuera enfocado a estos niños, y que les permitiera obtener información en un solo sitio sobre películas de videojuegos

*****_Definición del usuario_*****
> Niños y niñas entre 5 y 10 años, que jueguen juegos en linea y de consola que quiera tener información de películas de videojuegos.

******
 
Comenzamos con una búsqueda online para conocer las aplicaciones disponibles que den información dirigida a niños.  Revisamos sitios como Discovery Kids, Nickelodeon y Disney Junior (ver imagen).

![enter image description here](https://lh3.googleusercontent.com/wzvI3xGeUF5TdxnBYTJ5SaPNuiqFIvDbSegud5w6mqWwYVUFsA4V-WScydwKaJoeUc0GvOz4sZJP "Inspiration board")
  
A partir de esta revisión y literatura del tema (Ver [link](http://www.torresburriel.com/weblog/2016/08/18/diseno-de-interfaces-para-ninos/)) encontramos información necesaria para tomar decisiones de diseño:

**Diseño Visual:** linea gráfica simple, sin mucho texto, con botones accesibles.
**Color:** la paleta de colores de las páginas para niños utilizan colores fuertes y llamativos. 


### Testeo a usuarios
Posteriormente realizamos una encuesta online mediante [SurveyMonkey](https://es.surveymonkey.com/r/3MF6J3D) a niños de entre 5 y 13 años, consultando lo siguiente:

 1. Indica 3 películas que se basen en videojuego que más te gusten. 
 2. Que información te gustaría tener de esos videojuegos (imagen, personaje favorito, etc). 
 3. ¿Qué información de los personajes les gustaría que tuviera la aplicación?

Recibimos 7 encuestas:

 - Películas más mencionadas: Ralph, Star wars, Angry birds, Pokemon, Minecraft, Resident evil varias versiones, Lara croft, Pixeles, Assasin Creed.
 - Información relevante: buenas imágenes del juego, fecha de estreno de la película, personajes y resumen, información sobre personajes favoritos, del juego como pasar etapas.
   datos curiosos del personaje.

A partir de los decidimos acotar el grupo de 5 a 10, debido a que uno de nuestras encuestas fue respondida por un niños de 13 y no fue de interés para él.  Lo cual es consistente con la etapa del desarrollo en que a partir de los 11 años comienzan la preadolescencia, lo que los llevaría a una búsqueda de nuevas páginas con las que se sientan identificados, más cercana a esta nueva etapa que están viviendo.

********

USER PERSONA



## Historias de Usuario

### Definitions of done
  

Aqui desarrollamos las historias de usuario de nuestro producto, acompañadas de sus criterios de aceptación.

**1.** Como usuario necesito información de mis películas favoritas de videojuego para conocer sus personajes.  

Criterios de Aceptación:

- [ ] Quiero ver información organizada por temáticas.
- [ ] Al dar click en una película que salga información de esa película: personajes, resumen de la película, trailer, datos curiosos.
- [ ] Quiero que la página sea visible en el móvil y tablet.


**2.**  Como usuario necesito información de mis películas favoritas de videojuego para saber si hay nuevas secuelas.  

 Criterios de Aceptación:

- [ ] Quiero poder encontrar las películas mediante un buscador si escribo su nombre.
- [ ] Quiero que las películas más recientes o próximas a estrenarse estén disponibles en una sección independiente.
- [ ] Quiero ver la fecha de estreno de las próximas películas.

 
**3.** Como usuario necesito información de mis películas favoritas de videojuego para saber dónde verlas o descargarlas.

Criterios de Aceptación:
- [ ] Al seleccionar la película elegida indique información adicional a otros recursos, como trailers para visualizar, fotografías, o imágenes para colorear.

  
#### User Flowchart

Luego de definir nuestro usuario, realizamos el flujo que realizaría el usuario al utilizar la aplicación. Así creamos un prototipo del flujo básico del usuario, búsqueda de películas, selección de un personaje, visitar los últimos estrenos y visitar vínculos externos. 

  
Flujo de Usuario

  
## Stage 2 - Prototipados
  

### Wireframes

Realizamos el prototipado de baja definición, aquí comenzamos ideando e iterando sobre cómo debería verse la aplicación, y qué elementos debería contener para llegar a nuestro usuario.

Prototipo de baja fidelidad utilizando Figma.

<iframe style="border: none;" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fgcx6ag7IPJTE54cNkbucIMNL%2FHackaton%3Fnode-id%3D1%253A406" allowfullscreen></iframe>


Este prototipo fue iterado en el mismo equipo previo al trabajo en el prototipo de alta definición para saber los componentes, tamaños, estilos y ubicaciones.  A partir del paso previo se realizó el trabajo sobre el prototipo de alta fidelidad utilizando Figma.

<iframe style="border: none;" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fgcx6ag7IPJTE54cNkbucIMNL%2FHackaton%3Fnode-id%3D1%253A1043" allowfullscreen></iframe>


Este prototipo fue presentado frente a una comisión para presentar la idea y la solución planteada para resolver la misma.  Donde se realizaron las siguientes propuestas a incluir o modificar a la propuesta:

 - Se nos planteó la posibilidad de incluir un título o información adicional sobre el header para explicitar su uso.
 - Que la tipografia utilizada no sean más de dos en todo el sitio.
 - Asegurarnos que la aplicación sea responsive especialmente para tablet y celular, debido al grupo al que va dirigida la App.
 - En términos de presentación que sea una historia completa y tenga un cierre.
 - Ver la posibilidad de que en vez de botones para moverse hacia los lados, que esto sea touch, ya que la pagina sería utilizada principalmente desde dispositivos tablet y celulares.


Versión Celular Android
<iframe style="border: none;" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fgcx6ag7IPJTE54cNkbucIMNL%2FHackaton%3Fnode-id%3D63%253A2" allowfullscreen></iframe> 

Versión Tablet
<iframe style="border: none;" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fgcx6ag7IPJTE54cNkbucIMNL%2FHackaton%3Fnode-id%3D63%253A0" allowfullscreen></iframe>


## Planificación


Realizamos una planificación al comienzo del proyecto y volvimos a él cada dos o tres días. Utilizamos algunas herramientas digitales de ayuda como [Trello](https://trello.com/b/arOhcfuJ/planicficaci%C3%B3n-22-01-24-01).

Y analógicamente en el tablero proporcionado en Laboratoria.


## Stage 3 - Testeos con usuarios


**Evaluación Heurística de Usabilidad**

Describimos los parámetros que analizamos al realizar una evaluación heurística para identificar problemas de usabilidad en nuestra plataforma digital (Leer más sobre el tema [aquí](https://blog.ida.cl/experiencia-de-usuario/que-es-evaluacion-heuristica/)) en especial considerando el grupo de edad al que va dirigida la aplicación web (Leer más sobre el tema [aquí](https://www.nngroup.com/articles/childrens-websites-usability-issues/)).

A partir de este test


****User Testing****

 Se realizó 1 entrevista con usuario para testear el demo de la aplicación. Se les indicó una tarea a realizar interactuando con el prototipo y luego una pequeña entrevista para recopilar información.


La tarea otorgada al usuario fue la siguiente:

> Imagina que Necesitas conocer las características de cierto Pokémon de la Región de Kanto. Sabes que el Pokémon es de tipo Grass y su


 

****Entrevistas****

Finalmente, se les hicieron algunas preguntas acerca de su satisfacción, usabilidad y utilidad (cómo fue la experiencia, que cambiarían, sacarían, mejorarían).

  
Estas fueron algunas de las respuestas que usamos para ir mejorando el prototipo:

  

- Usuarios Camila y Manuel: Pude Encontrar el Pokémon, pero no me había dado cuenta que uno podía bajar y ver un listado de Pokémon, es tan grande la imagen del inicio que solo se ve ella y el menú de filtrar.


A partir del testeo previo se decidieron realizar algunas modificaciones al prototipo inicial:

  
1. Creación de una portada personalizada para la aplicación.


2. Reducción del tamaño de la portada y así hacer entender al usuario que abajo hay mas información y que no solo se trata de una portada y un menú de filtrado.


A la imagen de fondo se le aplico un mayor desenfoque para que la mirada del usuario se centre en el logo. Se creó la imagen de "KANTO" simulando el logo principal y añadimos un Pokémon para llamar la atención y una imagen de césped para simular que el Pokémon y el logo estuvieran en un plano principal.

 

4. Sacamos el botón "Ver listado Completo" y así se muestra todos los Pokemones de la Región automáticamente para luego filtrar sin problema.


5. Aumentamos la cantidad de Pokemones visibles de 3 a 6 por fila en el tamaño de escritorio.

  

### Storyboard  —  Usando la App



Creamos un storyboard para describir la experiencia de un usuario de la aplicación Movie Gamer. Mediante esta estrategia se puede explorar el producto en un contexto amplio, como si fuera parte de una narrativa mayor. Es una forma económica y efectiva de capturar, relacionar y explorar la aplicación en el mundo real.

insertar aqui storyboard

  

  

  

### Paleta de Colores

Se utilizó la herramienta de [Adobe](https://color.adobe.com/es/cloud/aHR0cHM6Ly9jYy1hcGktYXNzZXRzLmFkb2JlLmlv/library/3778c78b-ceda-4452-8f90-e0402fcdc1cf/theme/9683b2e8-16be-4ddd-8977-fa488eb76792/) para crear una triada con la paleta de colores para la página, considerando los lineamientos aprendidos en la etapa de investigación.

![enter image description here](https://lh3.googleusercontent.com/ITDops7gAr8leaM9wV9KwzvkoOPmdED1OZbqMyYffnQgzVkF-WxD91xD47nYU_wYYxKq99SPOXcB "paleta de colores")

### Tipografía

  Se utilizó tipografía [Roboto.](https://fonts.google.com/specimen/Roboto) *Sans-serif* que corresponde a un estilo moderno, debido a que la página que está orientada principalmente a un público jóven.


### Iconos & Ilustraciones

  Icono: se utilizó [Crack Man Font Family.](https://www.dafont.com/crackman.font)

  ![font logo](https://lh3.googleusercontent.com/HIXp8nU6UCWXa7szydilZwvUrtABqVCtZiBf3A2tgMB8CVHnWNka006NZ8ggvHGlDeLmGGdKGnF8 "font logo")

### Nombre

Movie Gamer

![enter image description here](https://lh3.googleusercontent.com/7RxNUDMgL_WZJyE2xteC4FU6zJ-4p35qNFYlDZ7VZycio03sGxi4Fw-WiYpluks0DlZ8Uppo1R8x "Logo")
## Etapa 5 - El Diseño final

  
La meta del la aplicación web es crear un proceso rápido de resolución de búsqueda de un pokemon. La versión final esta disponible en versión Demo.



Para realizar el diseño final, usamos el programa [Zeplin](https://app.zeplin.io/project/5c4884e635c1a337cdb26f84/dashboard) pasar los elementos del prototipado a código HTML, CSS y JS.

