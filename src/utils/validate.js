export const checkValidData = (email,password,name,confirmPassword) =>{

    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";
    if(name==='' || name===null) return "Please enter name";
    if(confirmPassword==='' || confirmPassword===null) return "Please enter confirm password";
    if(confirmPassword !== undefined && password!==confirmPassword) return "Confirm password doesnot match";

    if(name===undefined && confirmPassword === undefined) return null;

    return null;
}