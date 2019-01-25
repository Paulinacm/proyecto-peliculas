//busca información
function find(){
    //trae el titulo(lo que escribió usuario)
    let titleMovie = document.getElementById("movie").value;
    //va a la api yle pasa el nombre de pelicula de usuario y el 1
    searchMovie(titleMovie,1);
}
//angry birds
document.getElementById("pictureAngry").addEventListener("click",function(){
    searchMovie("Angry birds");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/nsYuDG0_MU4' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
    document.getElementById("exampleModalLabel").innerHTML ="Angry Birds";
});
//resident evil
document.getElementById("pictureResident").addEventListener("click",function(){
    searchMovie("Resident evil");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/wJbhS_mHo7Q' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
    document.getElementById("exampleModalLabel").innerHTML ="Resident Evil";                                            
});
//MInecraft
document.getElementById("pictureMinecraft").addEventListener("click",function(){
    searchMovie("Minecraft");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/z2nb_zAElJI' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";                                            
    document.getElementById("exampleModalLabel").innerHTML ="Minecraft";
});
//Sonic
document.getElementById("pictureSonic").addEventListener("click",function(){
    searchMovie("Sonic");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/N8kIxM6b0hM' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
    document.getElementById("exampleModalLabel").innerHTML ="Sonic";
});       
//Digimon
document.getElementById("pictureDigimon").addEventListener("click",function(){
    searchMovie("Digimon");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/seBn8D5Og_k' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
    document.getElementById("exampleModalLabel").innerHTML ="Digimon";
});                                     
//Pokemon
document.getElementById("picturePokemon").addEventListener("click",function(){
    searchMovie("Pokemon");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/sSLuNZFa_3k' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
    document.getElementById("exampleModalLabel").innerHTML ="Pokemon";
}); 
//Pixels
document.getElementById("picturePixels").addEventListener("click",function(){
    searchMovie("Pixels");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/FNDFd6GrK-A' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
    document.getElementById("exampleModalLabel").innerHTML ="Pixels";
});
//Mario
document.getElementById("pictureMario").addEventListener("click",function(){
    searchMovie("De-Pixelated: Super Smash Bros. Brawl");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/-H8EKuJAWa0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
    document.getElementById("exampleModalLabel").innerHTML ="Super Smash Bros. Brawl";
});
//Tom Raider
document.getElementById("pictureLara").addEventListener("click",function(){
    searchMovie("Lara Croft");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/phsWSladwOI' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
    document.getElementById("exampleModalLabel").innerHTML ="Lara Croft";
});
//Assassin's Creed
document.getElementById("pictureAssasin").addEventListener("click",function(){
    searchMovie("Assassin's");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/uNOnq5YaNxg' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
    document.getElementById("exampleModalLabel").innerHTML ="Assassin's Creed";
});

//Wifi ralph modal
document.getElementById("wifiRalph").addEventListener("click",function(){
document.getElementById("repoGalery").innerHTML ="<img src='Imagenes/ralph/ralph1.jpeg'>";
document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/ralph/ralph2.jpeg'>";
document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/ralph/ralph3.jpg'>";
document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/ralph/ralph4.jpg'>";
document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/ralph/ralph5.jpg'>";
document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/ralph/ralph6.jpg'>";
document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/ralph/ralph7.jpg'>";
document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/ralph/ralph8.jpg'>";
document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/ralph/ralph9.jpeg'>";
document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/ralph/ralph10.jpg'>";
document.getElementById("pictureGaleryLabel").innerHTML="Ralph,escenas Película";
});
//Assassin's Creed modal galeria imagenes
document.getElementById("assasinCreed").addEventListener("click",function(){ 
document.getElementById("repoGalery").innerHTML ="<img src='Imagenes/assasin/assasin3.jpg'>";
document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/assasin/assasin6.jpg'>";
document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/assasin/assasin1.jpeg'>";
document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/assasin/assasin4.jpg'>";
document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/assasin/assasin5.jpg'>";
document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/assasin/assasin2.jpg'>";
document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/assasin/assasin7.jpg'>";
document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/assasin/assasin8.jpg'>";
document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/assasin/assasin9.jpg'>";
document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/assasin/assasin10.jpg'>";
document.getElementById("pictureGaleryLabel").innerHTML="Assassin's Creed,escenas Película";
});
//Batman modal galeria imagenes
document.getElementById("batmanModal").addEventListener("click",function(){     
    document.getElementById("repoGalery").innerHTML ="<img src='Imagenes/batman/batman2.jpg'>";    
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/batman/batman3.jpg'>";
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/batman/batman4.jpg'>";
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/batman/batman5.jpg'>";
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/batman/batman6.jpg'>";
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/batman/batman7.jpg'>";
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/batman/batman8.jpg'>";
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/batman/batman9.jpg'>";
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/batman/batman10.jpg'>";
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/batman/batman11.jpg'>";
    document.getElementById("pictureGaleryLabel").innerHTML="Batman,escenas Película";
    });
//Mortal kombat modal galeria imagenes
document.getElementById("mortalModal").addEventListener("click",function(){     
    document.getElementById("repoGalery").innerHTML ="<img src='Imagenes/mortal/mortal2.jpg'>";  
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/mortal/mortal3.jpg'>";  
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/mortal/mortal4.jpeg'>";  
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/mortal/mortal5.jpeg'>";  
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/mortal/mortal6.jpg'>";  
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/mortal/mortal7.jpg'>";  
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/mortal/mortal8.png'>";  
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/mortal/mortal9.jpeg'>";  
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/mortal/mortal10.jpeg'>";  
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/mortal/mortal11.jpeg'>";  
    document.getElementById("repoGalery").innerHTML +="<img src='Imagenes/mortal/personajes.jpg'>";  
    document.getElementById("pictureGaleryLabel").innerHTML="Mortal Kombat,escenas Película";
});

/* Cambios Paulina 
replicar modificando container para nuevo container de slider
*/
var slider = tns({
    container: '.slider',
    items: 2,
        edgePadding: 20,
        gutter: 20,
        controlsText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right">'],
        nav:false,
        loop:false,
    responsive: {
        640: {
            items: 3
        },
        700: {
            items: 4
        },
        900: {
            items: 6
        }
    }
});

/* Cambios Paulina */