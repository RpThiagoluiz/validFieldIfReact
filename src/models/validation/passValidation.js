const isPasswordKeys = (password) => (
    /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(password)
    
)
 

const checkValidPass = (pass) => {
    if(!isPasswordKeys(pass)){
        return {
            valid:false,
            msg:"No minimo: 8 Digitos, 1 Letra Maiuscula e 1 minuscula, 1 numero, 1 Caracter Special(!@#$%^&*)"
          } 
    } else {
        return{
            valid:true,
            msg:""
        }
    }
}
export {checkValidPass}

// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password)