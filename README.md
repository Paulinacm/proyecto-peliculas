
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

  

  
## Stage 2 - Prototipados
  

### Wireframes

Realizamos el prototipado de baja definición, aquí comenzamos ideando e iterando sobre cómo debería verse la aplicación, y qué elementos debería contener para llegar a nuestro usuario.

Prototipo de baja fidelidad utilizando Figma (Ver [aquí](https://www.figma.com/file/gcx6ag7IPJTE54cNkbucIMNL/Hackaton?node-id=0:1)).


Este prototipo fue iterado en el mismo equipo previo al trabajo en el prototipo de alta definición para saber los componentes, tamaños, estilos y ubicaciones.  A partir del paso previo se realizó el trabajo sobre el prototipo de alta fidelidad utilizando Figma (Ver [aquí)](https://www.figma.com/file/gcx6ag7IPJTE54cNkbucIMNL/Hackaton?node-id=1:1043).

También disponible en su versión Celular Android ([Link](https://www.figma.com/file/gcx6ag7IPJTE54cNkbucIMNL/Hackaton?node-id=1:936)) y Tablet ([Link](https://www.figma.com/file/gcx6ag7IPJTE54cNkbucIMNL/Hackaton?node-id=63:0)).


**Presentación intermedia**
Este prototipo fue presentado frente a una comisión para presentar la idea y la solución planteada para resolver la misma.  Donde se realizaron las siguientes propuestas a incluir o modificar a la propuesta:

 - Se nos planteó la posibilidad de incluir un título o información adicional sobre el header para explicitar su uso.
 - Que la tipografia utilizada no sean más de dos en todo el sitio.
 - Asegurarnos que la aplicación sea responsive especialmente para tablet y celular, debido al grupo al que va dirigida la App.
 - En términos de presentación que sea una historia completa y tenga un cierre.
 - Ver la posibilidad de que en vez de botones para moverse hacia los lados, que esto sea touch, ya que la pagina sería utilizada principalmente desde dispositivos tablet y celulares.




## Planificación


Realizamos una planificación al comienzo del proyecto y volvimos a él cada dos o tres días. Utilizamos algunas herramientas digitales de ayuda como [Trello](https://trello.com/b/arOhcfuJ/planicficaci%C3%B3n-22-01-24-01).
![enter image description here](https://lh3.googleusercontent.com/itivxwdAw05OmnHk3hmi9rYrskMjBAIl6j8kOr5Yrhp96cKN2KmgAuIYfECWg_S7fjjWVzUab7Rg "4")


## Stage 3 - Testeos con usuarios


**Evaluación Heurística de Usabilidad**

Describimos los parámetros que analizamos al realizar una evaluación heurística para identificar problemas de usabilidad en nuestra plataforma digital (Leer más sobre el tema [aquí](https://blog.ida.cl/experiencia-de-usuario/que-es-evaluacion-heuristica/)) en especial considerando el grupo de edad al que va dirigida la aplicación web (Leer más sobre el tema [aquí](https://www.nngroup.com/articles/childrens-websites-usability-issues/)).

A partir de este test es posible identificar:





 



 

4. Sacamos el botón "Ver listado Completo" y así se muestra todos los Pokemones de la Región automáticamente para luego filtrar sin problema.


5. Aumentamos la cantidad de Pokemones visibles de 3 a 6 por fila en el tamaño de escritorio.

  
  

### Paleta de Colores

Se utilizó la herramienta de [Adobe](https://color.adobe.com/es/cloud/aHR0cHM6Ly9jYy1hcGktYXNzZXRzLmFkb2JlLmlv/library/3778c78b-ceda-4452-8f90-e0402fcdc1cf/theme/9683b2e8-16be-4ddd-8977-fa488eb76792/) para crear una triada con la paleta de colores para la página, considerando los lineamientos aprendidos en la etapa de investigación.

![enter image description here](https://lh3.googleusercontent.com/ITDops7gAr8leaM9wV9KwzvkoOPmdED1OZbqMyYffnQgzVkF-WxD91xD47nYU_wYYxKq99SPOXcB "paleta de colores")

### Tipografía

  Se utilizó tipografía [Roboto.](https://fonts.google.com/specimen/Roboto) *Sans-serif* que corresponde a un estilo moderno, debido a que la página que está orientada principalmente a un público jóven.


### Iconos & Ilustraciones

  Icono: se utilizó [Crack Man Font Family.](https://www.dafont.com/crackman.font) debido a que 

  ![font logo](https://lh3.googleusercontent.com/HIXp8nU6UCWXa7szydilZwvUrtABqVCtZiBf3A2tgMB8CVHnWNka006NZ8ggvHGlDeLmGGdKGnF8 "font logo")

### Nombre

Se definió como nombre de la Web App como "Movie Gamer", ya que asocia las dos palabras que definen a nuestro usuario objetivo: una página de información de películas para gamers (jugadores en inglés).  El erizo que acompaña el logo, tiene que ver con ser una mascota de la página, de modo que acompañe a los visitantes durante el recorrido del sitio, aunque en esta etapa solo se implementó en el logo de la marca.

![enter image description here](https://lh3.googleusercontent.com/7RxNUDMgL_WZJyE2xteC4FU6zJ-4p35qNFYlDZ7VZycio03sGxi4Fw-WiYpluks0DlZ8Uppo1R8x "Logo")
## Etapa 5 - El Diseño final

  
La meta del la aplicación web fue que el usuario pudiera tener en un solo lugar información últil acerca de películas relaiconadas con videojuegos. La versión final esta disponible en versión [Demo aquí](https://marcearratia.github.io/proyecto-peliculas/). Para realizar el diseño final, usamos el programa [Zeplin](https://app.zeplin.io/project/5c4884e635c1a337cdb26f84/dashboard) para pasar los elementos del prototipado a código HTML, CSS y JS.


#### Pantalla Principal

![enter image description here](https://lh3.googleusercontent.com/XK7bhQOeIEbtci80ZuDGS0rM5hVV1eyuWOHpufKOiSpUNyEjcdwHw7KEOtFuYWCKQ0sjn5u_J7D- "pantalla ppal")

#### Sección búsqueda
![enter image description here](https://lh3.googleusercontent.com/DrNvS6IWIQvMdpjRHuBOOn7DM2ZeyqlLqXMw0kSeAWDz-D--JjUzahro1GjzZ6j6EBsctEHR1Cf7 "busqueda")
#### Secciones separadas por temas
![enter image description here](https://lh3.googleusercontent.com/jHvX5pSFQ1IPdxI6xU4fEAc09gfheEMfv767SnClrDC0wg8kEM0Q1MHE8G2JQ1wuGRGEQ5OpvcYq "2")
#### Modal
![enter image description here](https://lh3.googleusercontent.com/MV6YwIfqsbcWQfUtLk5PEm-rKN1d7u6c5Uxg5TPUSYg146JalDlHnarSvvaIZ1aTCzbzAtmwl9KC "1")
![enter image description here](https://lh3.googleusercontent.com/bo4hiX5eM8rGf6RH_KIo6A00A_tScCrnwBlmqmQCcmxdus5XqHerKr3ARtawOXIj-s7cyDIz628Z "1")
### AUTORÍA

-   Marcela Arratia: FrontEnd  
-   Blanca Carrasco: FrontEnd
- Paulina Contreras: UX Designer
    

ESTUDIANTES LABORATORIA, 7ma. Generación.  
Santiago de Chile, enero de 2019.