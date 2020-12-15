import React from 'react' 
//Components
import FormSingIn from './components/FormSingIn'

//Material-ui
import {Container, Typography } from "@material-ui/core"



const App = () => {

  function finishJob(registrationData){
    console.log(registrationData);
  }

  return(
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" color="primary">
          Formulario de Cadastro
        </Typography>
      < FormSingIn formData={finishJob}/>
    </Container>
  )
}
export default App