addEventListener(`DOMContentLoaded`, (e)=>{
    console.log(" ¿Que expectativas tienes sobre el diplomado?");
    console.warn("R:Aprender los fundamentos basicos de javascript y despues seguir profundizando en el desarrollo web ");
    console.log(" ¿Que metas a corto plazo tiene?");
    console.trace("R:Terminar mi carrera universitaria ")
    console.log(" ¿Que metas a largo plazo tiene?");
    console.error("R:Trabajar para grandes empresas desarrollando paginas web")
    console.table(["Sergio Portilla","25 Años", "Pasatiempo: videojuegos"])

    alert("¡BIENVENIDOS! esta es mi Pagina Web");
    alert("Mi nombre es Sergio Portilla");
    alert("y les mostrare algo de informacion sobre mi");
    // prompt(`Usuario ingrese su nombre`, "Ejemplo 'Pepito perez'");
    // confirm("Usuario estas entendien JavaScript?");
    document.querySelector("body").innerHTML = "<h1>Presentacion</h1> <br> Mi nombre es Sergio Portilla <br> <br> Tengo 25 años <br> <br> Tengo experiencia basica en programacion <br> <br> Si quieres saber mas presiona <b> F12 </b> para ver la informacion en la consola";
})