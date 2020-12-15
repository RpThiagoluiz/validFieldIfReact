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

//it will use in hardcode on DataUser/index.js