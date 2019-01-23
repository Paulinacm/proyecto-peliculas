function find(){
    let titleMovie = document.getElementById("movie").value;
    searchMovie(titleMovie);
}
let infoMovie;

document.getElementById("pictureAngry").addEventListener("click",function(){
    searchMovie("Angry birds");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/nsYuDG0_MU4' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
});
document.getElementById("pictureResident").addEventListener("click",function(){
    searchMovie("Resident evil");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/wJbhS_mHo7Q' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
                                                
});
document.getElementById("pictureMinecraft").addEventListener("click",function(){
    searchMovie("Minecraft");
    document.getElementById("video").innerHTML ="<iframe src='https://www.youtube.com/embed/z2nb_zAElJI' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";                                            
});

  