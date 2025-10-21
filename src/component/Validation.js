export const validateInput = (data,type) => {
 const error = {};
if (type === "login ") {
   if (!data.email) {
      error.email = "لطفا ایمیل خود را وارد نمایید"
     } else if (!/^\S+@\S+\.\S+$/.test(data.email)){
      error.email = "آدرس ایمیل اشتباه است"
     } else {
      delete error.email 
     }
    
     if (!data.password) {
      error.password = "پسورد خود را وارد نمایید"
     } else if (data.password.length < 6){
      error.password = "پسورد حداقل باید 6 رقم باشد "
     } else {
      delete error.password
     }
    }
 // ................................................................................
 if (type === "signUp") {
     if (!data.name.trim()) {
      error.name = "لطفا نام خود را وارد کنید "
     } else {
      delete error.name
     }
    
    if (!data.confirmPassword) {
        error.confirmPassword = "پسورد خود را تکرار کنید"
    } else if (data.password !== data.confirmPassword) {
        error.confirmPassword = "پسورد وارد شده منطبق نمی باشد"
    } else {
        delete error.confirmPassword
    }
    
    if (data.isAccepted) {
        delete error.isAccepted
    } else {
        error.isAccepted = "لطفا قوانین را بپذیرید"
    }
    }
    
        return error;
}