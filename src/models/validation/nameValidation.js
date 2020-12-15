const checkValidName = (name) => {
    if(name.length < 3 ){
      return {
        valid:false,
        msg:"Nome invalido!"
      }
    } else {
      return{
        valid: true,
        msg:""
      }
    }
  }
export {checkValidName}