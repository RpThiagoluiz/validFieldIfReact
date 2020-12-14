import React from 'react' 
//Components
import DataEmail from './email'
import DataPass from './Pass'
//Material-ui
import { Button } from '@material-ui/core'

const DataUser = () => {
    return(
        <>
            <DataEmail />
            <DataPass />
            <Button 
            variant="contained"
            color="primary"
            type="submit"
            margin="normal"
            
            >Cadastrar</Button>
        </>
    )
}

export default DataUser