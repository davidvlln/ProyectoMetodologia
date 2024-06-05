
function cambiar() {
    let registro = document.getElementById('Registro');
    let login =  document.getElementById('Login'); 

    if (registro.style.display === 'none' || registro.style.display === '') {
        registro.style.display = 'flex'; 
        login.style.display="none";
        registro.style.transition ="100s";

    } else {
        registro.style.display = 'none'; 
        login.style.display="flex";
        login.style.transition ="100s";
    }
}