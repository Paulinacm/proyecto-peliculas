function searchMovie(title){
    let key = "e23f5eb4";
    let url = "http://www.omdbapi.com";
    let urlFetch = url+"/?apikey=" +key+"&t="+ title+"&type=movie";//url que se encuentra en OMDb, key que es la clave de acceso, $s+title que sera parametro de busqueda
    
    fetch(urlFetch)//fetch dice donde está el archivo
    .then(res => res.json() )//promesa en res, implementa el JSON
    .then(data => {//promesa si se cumple escribe contenido de JSON
        printMovie(data);
    });
}
function printMovie(data){
    document.getElementById("modalMovie").innerHTML = "";
    document.getElementById("modalMovie").innerHTML +="Actores : "+data.Actors+"</p>";
    document.getElementById("modalMovie").innerHTML +="Sitio Web : "+"<a href='"+data.Website+"'>"+data.Website+"</a></p>";
    
    
    console.log(data);

} 
