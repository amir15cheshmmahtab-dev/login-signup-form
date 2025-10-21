import {useState, React, useEffect} from 'react';
import { validateInput } from './Validation';
import { Link } from 'react-router-dom';
 import { ToastContainer} from 'react-toastify';
 import { notify } from './Toastify';
import styles from "./SignUp.module.css"
const SignUp = () => {

    const [data,setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    })

    const [error,setError] = useState({})

    const [touched,setTouched] = useState({})


    const changeHandler = (event) => {
       if (event.target.name === "isAccepted") {
        setData({...data, [event.target.name]: event.target.checked})
       } else {
        setData({...data, [event.target.name]: event.target.value})
       }
    }

    useEffect(() => {
            setError(validateInput(data,"signUp"))
    },[data])


    const eventHandler = (event) => {
        setTouched({...touched, [event.target.name] : true})
    }

   const submitHandler = (event) => {
        event.preventDefault()     
 if (!Object.keys(error).length) {
    notify("SUCCESS","Your registration was successfully")
 } else {
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
    })
    notify("ERROR","Please fill the required blanks")
 }

   }


    return (
<div className={styles.container}>
    <form onSubmit={submitHandler} className={styles.formContainer}>
    <h2 className={styles.header}>Sign Up</h2>
        <div className={styles.formField}>
            <label>نام</label>
            <input className={(error.name && touched.name) ? styles.unCompleted : styles.formInput }
            type='text' name='name' onChange={changeHandler} value={data.name} onFocus={eventHandler}/>
            {error.name && touched.name && <span>{error.name}</span>}
        </div>

         <div className={styles.formField}>
            <label>ایمیل</label>
            <input  className={(error.email && touched.email) ? styles.unCompleted : styles.formInput }
            type='email' name='email' onChange={changeHandler} value={data.email} onFocus={eventHandler}/>
            {error.email && touched.email && <span>{error.email}</span>}
        </div>

         <div className={styles.formField}>
            <label>پسورد</label>
            <input className={(error.password && touched.password) ? styles.unCompleted : styles.formInput }
             type='password' name='password' onChange={changeHandler} value={data.password} onFocus={eventHandler}/>
            {error.password && touched.password && <span>{error.password}</span>}
        </div>

         <div className={styles.formField}>
            <label>تایید پسورد</label>
            <input className={(error.confirmPassword && touched.confirmPassword) ? styles.unCompleted : styles.formInput }
             type='confirmPassword' name='confirmPassword' onChange={changeHandler} value={data.confirmPassword} onFocus={eventHandler}/>
            {error.confirmPassword && touched.confirmPassword && <span>{error.confirmPassword}</span>}
        </div>

         <div className={styles.formField}>
            <div className={styles.checkBoxContainer}>
            <label>قوانین را میپذیرم</label>
            <input type='checkbox' name='isAccepted' onChange={changeHandler} value={data.isAccepted} onFocus={eventHandler}/>         
            </div>
            {error.isAccepted && touched.isAccepted && <span>{error.isAccepted}</span>}
        </div>
    
     <div className={styles.formButtons}>
        <Link to='/login'>Login</Link>
        <button type='submit'>SignUp</button>
    </div>

    </form>
            <ToastContainer />
</div>
    );
};

export default SignUp;