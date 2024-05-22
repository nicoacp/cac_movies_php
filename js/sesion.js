let inputUsuario = document.getElementById("email")
let inputPassword = document.getElementById("password")
let boton= document.getElementById("botonIs")




boton.addEventListener("click",(e)=>{
    e.preventDefault()
    
if(inputUsuario.value==="" || inputPassword.value===""){
    Swal.fire({
        title: '¡Atención!',
        text: '¡Por favor complete todos los campos!',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
}else{
    Swal.fire({
        title: '',
        text: 'inicio de sesión correcto',
        icon: 'success',
        confirmButtonText:'<a href="../index.html">OK</a>'
      })
} } )