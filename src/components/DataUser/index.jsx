import React,{useState} from 'react' 
//Components
import DataEmail from './email'
import DataPass from './Pass'
import DataConfirmPass from './ConfirmPass'

//Material-ui
import { Button } from '@material-ui/core'

//Material-ui MODAL
//import SimpleModal from '../Modal'


const DataUser = ({sendDataForNextStep, validPass}) => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")

    const[errorPass,setErrorPass] = useState({
        valid:true,
        msg:"No minimo: 8 Digitos, 1 Letra Maiuscula e 1 minuscula, 1 numero, 1 Caracter Special(!@#$%^&*)"
    })
    const[errorConfirmPass,setConfirmErrorPass] = useState({
        valid:true,
        msg:""
    })

    
      


    const handlePassError = (e) => {
        const itValid = validPass(e.target.value)
        setErrorPass(itValid)

    }

    const handleConfirmPassError = (e) => {
        const itValid = e.target.value
        setConfirmErrorPass( _ =>  {
            if(itValid !== pass) {
                return {
                    valid:false,
                    msg:"Password nao conferem!"
                }
            } else {
                return{
                    valid:true,
                    msg:""
                }
            }
        })
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const erPass = errorPass.valid
       if(pass !== confirmPass){
            return(
                console.log(`senhas nao conferem`)
            )
       } else if(erPass === false) {
           return (
                console.log(`Senha`)
           )
            
       } else{
            sendDataForNextStep({email,pass,confirmPass})
       }
    }
 
  
    return(
        <form onSubmit={handleSubmit}
        >
            <DataEmail 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <DataPass 
                value={pass} 
                onChange={(e) =>  setPass(e.target.value)}
                error={!errorPass.valid}
                helperText={errorPass.msg}
                onBlur={handlePassError}
                />

            <DataConfirmPass 
                value={confirmPass}
                onChange={(e) =>  setConfirmPass(e.target.value)}
                error={!errorConfirmPass.valid}
                helperText={errorConfirmPass.msg}
                onBlur={handleConfirmPassError}
                
            
            />
            <Button 
            variant="contained"
            color="primary"
            type="submit"
            margin="normal"

            
           
            
            >Proximo</Button>

        
        </form>
    )
}

export default DataUser