function showPassword(){
    const eye = document.querySelector("#eye")
    const eyeSlash = document.querySelector("#eye-slash")
    const fieldPassword = document.querySelector("#field-password")

    if(eye.style.display==="none"){
        eye.style.display="block"
        eyeSlash.style.display="none"
        fieldPassword.type="text"
    }else{
        eye.style.display="none"
        eyeSlash.style.display="block"
        fieldPassword.type="password"
    }
}
