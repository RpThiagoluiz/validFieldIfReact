import React,{useState} from 'react' 
//Components
import DataEmail from './email'
import DataPass from './Pass'

//Material-ui
import { Button } from '@material-ui/core'


const DataUser = ({sendDataForNextStep}) => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    


   



  

    return(
        <form onSubmit={e => {
                e.preventDefault()
                sendDataForNextStep({email,pass})
            }}
        >
            <DataEmail value={email} onChange={(e) => setEmail(e.target.value)}/>
            <DataPass value={pass} onChange={(e) =>  setPass(e.target.value)} />
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