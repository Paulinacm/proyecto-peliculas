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


