/*
Fuente: http://codigofuente-de.blogspot.com/
Unete a https://www.facebook.com/pages/Código-Fuente-de-Diseño-y-Programaciòn/876534622374945

y sigue visistane nuestra web:
http://codigofuente-de.blogspot.com/
*/

function cargar(){       
            var elDiv = document.getElementById("mostrardatos"); //se define la variable "elDiv" igual a nuestro div
            elDiv.style.display='block'; 
            var url="procesar_busqueda.php"
            var user= document.getElementById("nombre").value
           
            $.ajax({
                type: "POST",
                url:url,
                data:{nombre:user},
                success: function(datos){
                    $('#mostrardatos').html(datos);
                }
            });
} 

function limpiar_campos(){

    document.f1.nombre.value="";
    //document.getElementById("nombre").value = "";
    var elDiv = document.getElementById("mostrardatos"); //se define la variable "elDiv" igual a nuestro div
    elDiv.style.display='none';
    document.f1.nombre.focus();
}

function mouse(){
     document.f1.nombre.focus();
}
/*
Fuente: http://codigofuente-de.blogspot.com/
Unete a https://www.facebook.com/pages/Código-Fuente-de-Diseño-y-Programaciòn/876534622374945

y sigue visistane nuestra web:
http://codigofuente-de.blogspot.com/
*/