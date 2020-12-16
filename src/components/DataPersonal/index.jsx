import React,{useState} from "react"

//Material-ui
import { Button } from "@material-ui/core";

//Components Form
import Name from "./Name"
import Cpf from "./Cpf"
import LastName from "./LastName"
import SwitchNews from "./SwitchNews";
import SwitchPromo from "./SwitchPromo";


const PersonalDataForm = ({sendDataForNextStep, validCpf,validName}) => {
  const[name, setName] = useState("")
  const[lastName,setLastName] = useState("")
  const [cpf,setCpf] = useState("")
  const [news,setNews] = useState(true)
  const [promo,setPromo] = useState(false)

  const [nameError, setNameError] = useState({
    valid:true,
    msg:""
  })

  const [cpfError, setCpfError] = useState({
    valid:true, 
    msg:""
  })


  const handleNameError = (e) => {
    const itValid = validName(e.target.value)
    setNameError(itValid)
  }

  const handleCpfError = (e) => {
    const itValid = validCpf(e.target.value) //Estado do `cpf`
    setCpfError(itValid)
  }

  // sendDataForNextStep({name, lastName, cpf, promo, news })

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const erName = nameError.valid
    const erCpf = cpfError.valid

    if(erName === false) {
      return (
        console.log(`Erro no campo Nome!`)
      )
    } else if (erCpf === false){
      return (
        console.log(`Erro no campo CPF`)
      )
    } else {
      sendDataForNextStep({name,lastName,cpf})
    }

    
  }

  
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <Name 
          value={name}
          onChange={(e) => setName(e.target.value)}
          
          //ErrorName
          error={!nameError.valid}
          helperText={nameError.msg}
          onBlur={handleNameError}
          
          
        />

        <LastName 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          
        />

        <Cpf 
          value={cpf}
          onChange={e =>  {
            setCpf(e.target.value)
          }}
          //Error CPF
          error={!cpfError.valid} //sem o `!` eu flo que o cpf true, e nao retorna error
          helperText={cpfError.msg}
          onBlur={handleCpfError}
        />

        <SwitchPromo onChange={e => setPromo(e.target.checked)} checked={promo} />
        <SwitchNews onChange={e => setNews(e.target.checked)} checked={news}/>

         <Button
          variant="contained"
          color="primary"
          type="submit"
          margin="normal"
        >
          Proximo
        </Button>
      </form>
    </>
  );
};

export default PersonalDataForm;
