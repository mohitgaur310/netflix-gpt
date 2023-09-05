export const checkEmailValidation=(email)=>{

    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    if(!isEmailValid) return "Please Enter a Valid Email"
    return null
}
export const checkPasswordValidation=(password)=>{

    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!isPasswordValid) return "Please Enter a valid Password"
    return null
}