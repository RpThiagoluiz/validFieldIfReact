import React,{useState,useEffect} from "react"
//Components
import DataPersonal from "../DataPersonal"
import DataUser from "../DataUser"
import DataDelivery from './../DataDelivery/index'
//Material-ui
import { StepLabel, Step, Stepper, Typography } from '@material-ui/core';
//Validation
import {checkValidCPF} from '../../models/validation/cpfValidation'
import {checkValidName} from '../../models/validation/nameValidation'
import {checkValidLastName} from '../../models/validation/lastNameValidation'


const FormSingIn = ({formData}) => {

  const[currentStep,setCurrentStep] = useState(0)
  const[regiData,setRegiData] = useState({})

  //se fez necessario pois o useState `e async.
  useEffect(()=> {
    //passei um condicional pra so enviar os dados do registro depois q for concluido o formulario.
    if(currentStep === formsSteps.length - 1){
      formData(regiData)

    }
  })
 


  //Armazenar os dados coletados - 
   const nextStep = (registrationData) => {
      setRegiData({...regiData,...registrationData})
      setCurrentStep(currentStep + 1)
   }

   const formsSteps = [
        <DataUser  sendDataForNextStep={nextStep}/>,
        <DataPersonal sendDataForNextStep={nextStep} validName={checkValidName} validLastName={checkValidLastName} validCpf={checkValidCPF}/>,
        <DataDelivery sendDataForNextStep={nextStep}/>,
        <Typography variant="h4" align="center"> Cadastro realizado com Sucesso!</Typography>
   ]

  return (
    <>
    <Stepper activeStep={currentStep}>
      <Step>
        <StepLabel>Login</StepLabel>
      </Step>

      <Step>
        <StepLabel>Dados Pessoais</StepLabel>
      </Step>

      <Step>
        <StepLabel>Endereco</StepLabel>
      </Step>

      <Step>
        <StepLabel>Finalizacao</StepLabel>
      </Step>

    </Stepper>
      {formsSteps[currentStep]}
      
    </> 
  )
}

export default FormSingIn