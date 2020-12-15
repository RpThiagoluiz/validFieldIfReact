const checkValidCPF = (cpf) => {
    if(cpf.length !== 11) {
      return {
        valid:false,
        msg:"Cpf invalido"
      }
    } else{
      return{
        valid:true,
        msg:""
      }
    }
    
  }

export {checkValidCPF}