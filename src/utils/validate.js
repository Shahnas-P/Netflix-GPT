export const checkValidate = (email,password,fullName = null)=>{
    let count ;
    let error;

    
    const isEmailValidate = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValidate =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

//Before calling trim(), we check if fullName exists and has the trim method
if(fullName !== null && fullName !== undefined && fullName.trim && fullName.trim() === ''){
    
    count=1
    error = "Full Name is missing"
    return {count , error}
  }
  if(!isEmailValidate){
    count=2
    error =  "Email is not Valid"
    return {count,error}
}
if(!isPasswordValidate){
    count = 3
    error = "Password is not Valid"
    return{count,error}
}
return null

}