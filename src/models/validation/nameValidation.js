const inputName = (name) => /^[A-Za-z]+$/.test(name)

const checkName = (name) => {
    if(!inputName(name)){
        return {
            valid:false,
            msg:"Nome deve conter apenas Letras!"
        }
    } else if (name.length < 3) {
        return {
            valid:false,
            msg:"Nome menor que 3 letras"
        }
    } else {
        return {
            valid:true,
            msg: ""
        }
    }
}
export {checkName}