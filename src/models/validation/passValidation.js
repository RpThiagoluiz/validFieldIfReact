const isPasswordKeys = (password) => (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password)
)
 

const checkValidPass = (pass) => {
    if(!isPasswordKeys(pass)){
        return {
            valid:false,
            msg:"Minimo 6 digitos e 1 letras maiscula!"
          } 
    } else {
        return{
            valid:true,
            msg:""
        }
    }
}
export {checkValidPass}