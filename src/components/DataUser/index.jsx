import React,{useState} from 'react' 
//Components
import DataEmail from './email'
import DataPass from './Pass'
import DataConfirmPass from './ConfirmPass'

//Material-ui
import { Button } from '@material-ui/core'




const DataUser = ({sendDataForNextStep, validPass}) => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")

    const[errorConfirmPass,setConfirmErrorPass] = useState({valid:true,msg:""})
    const[errorPass,setErrorPass] = useState({
        valid:true,
        msg:"Deve conter min 6 Digitos, 1 letras maiscula"
    })

   // const[errorConfirmPass,setConfirmErrorPass] = useState({valid:true,msg:""}) - props {,validConfirmPass} - component
    


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
    
    // const validateAll = _ =>  {
    //     if((errorPass.valid = true) && (errorConfirmPass.valid = true)) {
    // FAZER SO IR PRA FRENTE SE AQUELA ETAPA TIVER CONCLUIDA
    //     }

    
  
    return(
        <form onSubmit={e => {
                e.preventDefault()
                sendDataForNextStep({email,pass,confirmPass})
            }}
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