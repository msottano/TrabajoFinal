/* fetch("/db/database.son")
    .then(Response => Response.json)
    .then(data => showInfo(data));

function showInfo(data) {
 console.table(data.hamburguesa);   
}
 */

/* FALTA HACER EN HTML */

form.addEventListener("confirmar", e=>{
    e.preventDefault()
    if(nombre.value.length <3){
        alert("Nombre muy corto")
    }
})


