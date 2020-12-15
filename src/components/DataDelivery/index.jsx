import React, {useState} from 'react'
//Components
import Adress from './Adress'
import AdressNumber from './AdressNumber'
import DeliveryCEP from './Cep'
import DeliveryCity from './City';
import DeliveryUf from './Uf';

//Material-ui
import { Button } from '@material-ui/core'


const DataDelivery = ({sendDataForNextStep}) => {
    const[adr,setAdr] = useState("")
    const[adrNumber,setAdrNumber] = useState("")
    const[delivCEP,setDelivCEP] = useState("")
    const[delivUf,setDelivUf] = useState("")
    const[delivCity, setDelivCity] = useState("")

 
    return (
        <form onSubmit={e => {
            e.preventDefault()
            sendDataForNextStep({adr, adrNumber, delivCEP, delivUf, delivCity})
        }}>
            <Adress value={adr} onChange={e => setAdr(e.target.value)}/>
            <AdressNumber value={adrNumber} onChange={e => setAdrNumber(e.target.value)}/>
            <DeliveryCEP value={delivCEP} onChange={e => setDelivCEP(e.target.value)}/>
            <DeliveryUf value={delivUf} onChange={e => setDelivUf(e.target.value)}/>
            <DeliveryCity value={delivCity} onChange={e => setDelivCity(e.target.value)}/>
    
            <Button 
                variant="contained"
                color="primary"
                type="submit"
                margin="normal"
                fullWidth
            >
                Finalizar Cadastro
            </Button>
        </form>
    )
}

    //AQUI TEM Q TER UM BIBLIOTECA CONJUNTA COM O SISTEMA DOS CORREIOS.

export default DataDelivery