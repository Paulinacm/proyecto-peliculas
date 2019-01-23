function find(){
    let titleMovie = document.getElementById("movie").value;
    searchMovie(titleMovie);
}
let infoMovie;
//angry birds
document.getElementById("pictureAngry").addEventListener("click",function(){
    searchMovie("Angry birds");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/nsYuDG0_MU4' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
});
//resident evil
document.getElementById("pictureResident").addEventListener("click",function(){
    searchMovie("Resident evil");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/wJbhS_mHo7Q' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
                                                
});
//MInecraft
document.getElementById("pictureMinecraft").addEventListener("click",function(){
    searchMovie("Minecraft");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/z2nb_zAElJI' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";                                            
});
//Sonic
document.getElementById("pictureSonic").addEventListener("click",function(){
    searchMovie("Sonic");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/N8kIxM6b0hM' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
});       
//Digimon
document.getElementById("pictureDigimon").addEventListener("click",function(){
    searchMovie("Digimon");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/seBn8D5Og_k' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
});                                     
//Pokemon
document.getElementById("picturePokemon").addEventListener("click",function(){
    searchMovie("Pokemon");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/sSLuNZFa_3k' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
}); 
//Pixels
document.getElementById("picturePixels").addEventListener("click",function(){
    searchMovie("Pixels");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/FNDFd6GrK-A' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
});
//Mario
document.getElementById("pictureMario").addEventListener("click",function(){
    searchMovie("De-Pixelated: Super Smash Bros. Brawl");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/-H8EKuJAWa0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
});
//Tom Raider
document.getElementById("pictureLara").addEventListener("click",function(){
    searchMovie("Lara Croft");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/-H8EKuJAWa0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
});



