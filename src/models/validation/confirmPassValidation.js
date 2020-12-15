const matchValuePass = (pass,confirmpass) => {
    if(pass !== confirmpass) {
        return{
            valid:false,
            msg:"Password nao combinam!"
        }
    } else {
        return{
            valid:true,
            msg:""
        }
    }
}

export {matchValuePass}