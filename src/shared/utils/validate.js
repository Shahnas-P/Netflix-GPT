 export const checkValidData = (email,password)=>{
    const isEmailVerified = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordVerified = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isEmailVerified) return "Email is not valid"
    if(!isPasswordVerified) return "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
    return null
}