const cpfDigit = (cpfString) => cpfString.replace(/\D+/g, '')

const checkValidCPF = (cpf) => {
  
  let soma = 0
  let digito = 0
  let i
  let j

  if(!cpfDigit(cpf)) return false
  if (cpf.length !== 11) return false

  //primeiro digito
  j = 0
  for (i = 10; i > 1; i--) {
    soma = soma + (parseInt(cpf[j]) * i)
    j++
  }

  digito = (soma % 11)

  if (digito === 10 || digito === 11) digito = 0

  digito = 11 - digito

  if (digito !== parseInt(cpf[9])) return false
  

  //segundo digito
  soma = 0
  j = 0
  for (i = 11; i > 1; i--) {
    soma = soma + (parseInt(cpf[j]) * i)
    j++
  }
  digito = (soma % 11)

  if (digito === 10 || digito === 11) digito = 0

  digito = 11 - digito

  if (digito !== parseInt(cpf[10])) return false

}

const returnCheckCPF = (cpf) => {
  if(checkValidCPF(cpf)) {
    return{     
      valid:true,
      msg:""
    }
  } else {
    return {
      valid:false,
      msg:"Cpf invalido"
    }
  }
}

export {returnCheckCPF}



