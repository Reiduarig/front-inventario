import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/login-register.css';

export const LoginPage = () => {

  const [form, setForm] = useState({
      documento:'34256789X',
      password: 'marywany',
      recuerdame: false
  })

  const onChange = ({ target }) => {

    const { name, value } = target

    setForm({
      ...form,
      [name]: value
    })

  }

  const toggleCheck = () => {

    setForm({
        ...form,
        rememberme: !form.rememberme
    })

}

  const onSubmit = (e) => {
    e.preventDefault()

    const { documento, password } = form
  }

  const habilitarBoton = () => {
    return(form.documento.length > 0 && form.password.length > 0) ? true : false;
}

  return (
    <form 
            className="login100-form validate-form flex-sb flex-w"
            onSubmit={ onSubmit }
            >
            <span className="login100-form-title mb-3">
                Inventario - Ingreso
            </span>
            
            <div className="wrap-input100 validate-input mb-3">
                <input 
                    className="input100" 
                    type="text" 
                    name="documento" 
                    placeholder="Usuario"
                    value={form.documento} 
                    onChange={ onChange }
                />
                <span className="focus-input100"></span>
            </div>
            
            
            <div className="wrap-input100 validate-input mb-3">
                <input 
                    className="input100" 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    value={form.password}
                    onChange={ onChange }
                />
                <span className="focus-input100"></span>
            </div>
            
            <div className="row mb-3">
                <div 
                    className="col"
                    onClick={()=> toggleCheck()}
                >
                    <input 
                        className="input-checkbox100" 
                        id="ckb1" 
                        type="checkbox" 
                        name="remember-me" 
                        checked={form.rememberme}
                        readOnly
                    />
                    <label className="label-checkbox100">
                        Recuérdarme
                    </label>
                </div>

                <div className="col text-right">
                    <Link to="/auth/register" className="txt1">
                        Nueva cuenta?
                    </Link>
                </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button 
                    type='submit'
                    className="login100-form-btn"
                    disabled={ !habilitarBoton() }
                >
                    Ingresar
                </button>
            </div>

        </form>
    )
  
}
