import React,{useState} from "react"

//Material-ui
import { Button } from "@material-ui/core";

//Components Form
import Name from "./Name"
import Cpf from "./Cpf"
import LastName from "./LastName"
import SwitchNews from "./SwitchNews";
import SwitchPromo from "./SwitchPromo";


const PersonalDataForm = ({sendDataForNextStep, validCpf}) => {
  const[name, setName] = useState("")
  const[lastName,setLastName] = useState("")
  const [cpf,setCpf] = useState("")
  const [news,setNews] = useState(true)
  const [promo,setPromo] = useState(false)


  const [cpfError, setCpfError] = useState({
    valid:true, 
    msg:""
  })

  
  

 

  

  const handleCpfError = (e) => {
    const itValid = validCpf(e.target.value) //Estado do `cpf`
    setCpfError(itValid)
  }

  const handleDataOnSubmit = (e) => {
    e.preventDefault()
    sendDataForNextStep({name, lastName, cpf, promo, news })
  }
  

  return (
    <>
      <form onSubmit={handleDataOnSubmit}>
        <Name 
          value={name}
          onChange={(e) => setName(e.target.value)}
          
          
          
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
