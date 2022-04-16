import {React, useContext} from 'react'
import { Formik} from 'formik';
import * as Yup from 'yup';
import ThemeContext from '../contexts/ThemeContext.';
function Signup({setTheme}) {
  const Theme = useContext(ThemeContext);

  const inputHeaders = {
    name: 'İSİM',
    lastName: 'SOYİSİM',
    email: 'E-POSTA',
    userName: 'KULLANICI ADI',
    password: 'ŞİFRE',
    repeatPassword: 'ŞİFRENİ TEKRAR GİR',
    agree: 'Sözleşmeyi kabul ediyorum'
  }
  const placeholders = {
    name: 'İsmini gir',
    lastName: 'Soyismini gir',
    email: 'E-posta adresini gir',
    userName: 'Kullanıcı adını gir',
    password: 'Şifreni gir',
    repeatPassword: 'Şifreni doğrula',
  }
  function checkType(value){ 
    if(value === 'repeatPassword'){
      return 'password'
    }
    else if(value === 'password'){
      return 'password'
    }
    else if(value === 'email'){
      return 'email'
    }
    else{
      return 'text'
    }
  }
  function isStar(error) {
    if(error){
     return <span className='error-star'>*</span>
    }
  }
  function renderInputDiv(value, error, handleChange, valueName){
    return(
      <div className='input-wrapper'>
        <label htmlFor={valueName}> 
          {inputHeaders[valueName]}
          {isStar(error)}
        </label>
        <input id={valueName} type={checkType(valueName)} value={value} onChange={handleChange} placeholder={placeholders[valueName]} 
        className={`${Theme && 'input-dark'}`}/>
        <p className='error-p'>{error}</p>
      </div>
    )
  }
  function renderCheckboxDiv(value, error, handleChange){
    return(
      <div className='checkbox-wrapper'>
        <input id='agree' type="checkbox" value={value} onChange={handleChange}  className={`w-5 ${Theme && 'checkbox'}`}/>
        <label className={`as-end agree-text ${Theme && 'dark-checkbox'}`}
        htmlFor="agree">Sözleşmeyi kabul ediyorum
          {isStar(error)}
        </label>
        <p className={`checkbox-error-p ${Theme && 'checkbox-error-p-dark'}`}>{error}</p>
      </div>  
    )
  }
  return (
    <div className={`form-container ${Theme && 'bg-dark'}`}>
      <img onClick={()=> setTheme(!Theme)} className='theme-switcher' src={`${Theme ? require('../images/theme-switcher-light.png') : (require('../images/theme-switcher.png'))  }`} alt="" />
      <div className="form-wrapper d-flex flex-col align-center ">
        <Formik 
        initialValues={{
            name: '',
            lastName: '',
            email: '',
            userName: '',
            password: '',
            repeatPassword: '',
            agree: false,
          }}
          validationSchema={
            Yup.object({
              name: (Yup.string().required('İsim alanı boş bırakılamaz')),
              lastName: (Yup.string().required('Soyisim alanı boş bırakılamaz')),
              email: Yup.string().required('E-posta alanı boş bırakılamaz'),
              userName: Yup.string().required('Kullanıcı adı boş bırakılamaz'),
              password: Yup.string().min(8, 'Şifreniz en az 8 karakterden oluşmalı').required('Şifre boş bırakılamaz'),
              repeatPassword: Yup.string().when('password', {
                is: val => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf([Yup.ref('password')], 'Şifreler aynı olmak zorunda').required('Şifrenizi tekrar giriniz')
              }),
              agree: Yup.bool().oneOf([true], 'Koşulları kabul etmelisiniz')
            })
          }
          onSubmit={(values, {resetForm, setSubmitting}) =>{
            console.log(values);
            resetForm();
          }}
          >
            { ({values, errors, handleReset, handleSubmit, dirty, isSubmitting, handleChange}) => (
            <form className={` w-70 ${Theme && 'color-white'}`} onSubmit={handleSubmit}>
              <div>
                <h1 className={`header as-start ${Theme && 'color-white'}`}>Kayıt</h1>
                <hr className={`header-line ${Theme && 'header-line-dark'}`} />
              </div>
              <div className='d-flex'>
                {renderInputDiv(values.name, errors.name, handleChange, 'name')}
                <div className='divider'></div>
                {renderInputDiv(values.lastName, errors.lastName, handleChange, 'lastName')}
              </div>
              {renderInputDiv(values.email, errors.email, handleChange, 'email')}
              {renderInputDiv(values.userName, errors.userName, handleChange, 'userName')}
              {renderInputDiv(values.password, errors.password, handleChange, 'password')}
              {renderInputDiv(values.repeatPassword, errors.repeatPassword, handleChange, 'repeatPassword')}
              {renderCheckboxDiv(values.agree, errors.agree, handleChange)}
              <button className={`submit-btn ${Theme && 'bg-yellow'}`} type='submit' disabled={!dirty}>KAYIT OL</button>
            </form> 
            )}
        </Formik>
      </div>
    </div>
  )
}

export default Signup;