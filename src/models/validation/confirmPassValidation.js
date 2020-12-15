const matchValuePass = ({pass,confirmPass}) => {
    if(pass !== confirmPass) {
        return{
            valid:false,
            msg:"Password nao conferem!"
        }
    } else {
        return{
            valid:true,
            msg:""
        }
    }
}

export {matchValuePass}