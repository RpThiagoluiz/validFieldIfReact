import React from "react"
//Components
import DataPersonal from "../DataPersonal"
import DataUser from "../DataUser"
import DataDelivery from './../DataDelivery/index'

const FormSingIn = () => {
 
  //Validar cpf
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
  
  //Validar Nome

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

  //Validar SobreNome

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

   //FunctionExtrair o dados de cadastrado, por enquando eles estao aparecendo no Console.
   const formData = (info) => {
     //Check campos Vazios - para isso tenho q transformar form, em um componente e passar props para ele
     return(console.log(info))
   }

  return (
    <>
      <DataPersonal onSubmit={formData} validName={checkValidName} validLastName={checkValidLastName} validCpf={checkValidCPF}/>
      <DataUser />
      <DataDelivery />
    </>
  );
};

export default FormSingIn;
