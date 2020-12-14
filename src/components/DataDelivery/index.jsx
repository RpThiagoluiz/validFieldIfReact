import React from 'react'
//Components
import Adress from './Adress'
import AdressNumber from './AdressNumber'
import DeliveryCEP from './Cep'
import DeliveryCity from './City';
import DeliveryUf from './Uf';

//Material-ui
import { Button } from '@material-ui/core'


const DataDelivery = () => (
    <>
        <Adress />
        <AdressNumber />
        <DeliveryCEP />
        <DeliveryUf />
        <DeliveryCity />

        <Button 
            variant="contained"
            color="primary"
            type="submit"
            margin="normal"
            fullWidth  
        >
            Finalizar Cadastro
        </Button>
    </>
)
    

export default DataDelivery