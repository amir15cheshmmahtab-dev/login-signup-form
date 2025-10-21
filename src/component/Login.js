import {useState, React, useEffect} from 'react';
import { validateInput } from './Validation';
import { Link } from 'react-router-dom';
 import { ToastContainer} from 'react-toastify';
 import { notify } from './Toastify';
import styles from "./SignUp.module.css"


const Login = () => {

    const [data,setData] = useState({
        email: "",
        password: ""
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
            setError(validateInput(data,"login"))
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
        email: true,
        password: true,
    })
    notify("ERROR","Please fill the required blanks")
 }

   }


    return (
<div className={styles.container}>
    <form onSubmit={submitHandler} className={styles.formContainer}>
    <h2 className={styles.header}>Login</h2>
     
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
    
     <div className={styles.formButtons}>
        <Link to='/signup'>SignUp</Link>
        <button type='submit'>Login</button>
    </div>

    </form>
            <ToastContainer />
</div>
    );
};

export default Login;