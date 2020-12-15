const checkValidLastName = (lastName) => {
    if(lastName.length < 3 ){
      return {
        valid:false,
        msg:"SobreNome invalido!"
      }
    } else {
      return{
        valid: true,
        msg:""
      }
    }
}
export {checkValidLastName}
