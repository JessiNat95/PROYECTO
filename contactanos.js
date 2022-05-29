
function validacion() 
{
    elemento = document.getElementById("nombre").value;
    valorT = document.getElementById("telefono").value;
    valor = document.getElementById("email").value;
    elemento = document.getElementById("aceptar");

    if( elemento == null ) 
            {
                
                document.getElementById('mensajesError').innerHTML = "Introduzca su nombre";
        
                elemento.value = '';
                elemento.focus();
                return false;
                
            }      
                
    
    if( valorT == null || valorT.length == 0 ) 
    {
        document.getElementById('mensaje0').innerHTML = "Por favor ingrese su numero de telefono";
        elemento.value = '';
        elemento.focus();
        return false;
        

    }
    
    if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(valor)))
    {
        document.getElementById('mensaje1').innerHTML = "No es una direccion de email correcta" ;
        
        elemento = document.getElementById('email');
        elemento.value = '';
        elemento.focus();
        return false;
    
    }
    if( !elemento.checked ) 
    {
        document.getElementById('mensaje').innerHTML = "Debe aceptar los terminos de la Licencia" ;
        return false;
    }
   
    
            
    return true;          
}
