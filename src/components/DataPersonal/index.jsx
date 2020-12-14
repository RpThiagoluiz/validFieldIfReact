import React,{useState} from "react"

//Material-ui
import { Button } from "@material-ui/core";

//Components Form
import Name from "./Name"
import Cpf from "./Cpf"
import LastName from "./LastName"
import SwitchNews from "./SwitchNews";
import SwitchPromo from "./SwitchPromo";


const PersonalDataForm = ({onSubmit, validCpf,validName,validLastName}) => {
  const[name, setName] = useState("")
  const[lastName,setLastName] = useState("")
  const [cpf,setCpf] = useState("")
  const [news,setNews] = useState(true)
  const [promo,setPromo] = useState(false)

  //Errors - Somente quando sair do Campo de Digitacao
  const [nameError,setNameError] = useState({
    valid:true,
    msg:""
  })

  const [lastNameError,setLastNameError] = useState({
    valid:true,
    msg:""
  })

  const [cpfError, setCpfError] = useState({
    valid:true, 
    msg:""
  })

  
  const handleName = (e) => {
      setName(e.target.value) 
      //Aqui que vai a verificacao.
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleNameError = (e) => {
    const itValid = validName(e.target.value) //Substiudo pelo estado do Name = validName(name)
    setNameError(itValid)
  }

  const handleLastNameError = (e) => {
    const itValid = validLastName(e.target.value) //Substiudo pelo estado do Name = validName(name)
    setLastNameError(itValid)
  }

  const handleCpfError = (e) => {
    const itValid = validCpf(e.target.value) //Estado do `cpf`
    setCpfError(itValid)
  }

  const handleDataOnSubmit = (e) => {
    e.preventDefault()
    onSubmit({name, lastName, cpf, promo, news })
  }
  

  return (
    <>
      <form onSubmit={handleDataOnSubmit}>
        <Name 
          value={name}
          onChange={handleName}
          //Error Name
          error={!nameError.valid}
          helperText={nameError.msg}
          onBlur={handleNameError}
          
        />

        <LastName 
          value={lastName}
          onChange={handleLastName}
          //Error Name
          error={!lastNameError.valid}
          helperText={lastNameError.msg}
          onBlur={handleLastNameError}
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
          Cadastrar
        </Button>
      </form>
    </>
  );
};

export default PersonalDataForm;
