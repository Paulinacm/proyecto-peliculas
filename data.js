function searchMovie(title,modal){// (title,1)se ocupa en
    let key = "e23f5eb4";
    let url = "https://www.omdbapi.com";
    let urlFetch = url+"/?apikey=" +key+"&t="+ title+"&type=movie";//url que se encuentra en OMDb, key que es la clave de acceso, $s+title que sera parametro de busqueda
    fetch(urlFetch)//fetch dice donde está el archivo
    .then(res => res.json() )//promesa en res, implementa el JSON
    .then(data => {//promesa si se cumple escribe contenido de JSON
        if(modal===1)
        {
            printMovieOther(data);
        }
        else
        {
            printMovie(data);//llama a la función que llena el modal
        }  
    });
}
//funcion que muestra información del modal de top 10
function printMovie(data){
    document.getElementById("modalMovie").innerHTML = "";
    document.getElementById("modalMovie").innerHTML +="Actores : "+data.Actors+"</p>";
    document.getElementById("modalMovie").innerHTML +="Sitio Web : "+"<a href='"+data.Website+"' target='_blank'>"+data.Website+"</a></p>";
    console.log(data);
} 
function printMovieOther(data){
    document.getElementById("footerModalFind").innerHTML = "";
    document.getElementById("footerModalFind").innerHTML +="Actores : "+data.Actors+"</p>";
    document.getElementById("footerModalFind").innerHTML +="Sitio Web : "+"<a href='"+data.Website+"' target='_blank'>"+data.Website+"</a></p>";
    document.getElementById("modalFindLabel").innerHTML =data.Title; 
    console.log(data);
}
