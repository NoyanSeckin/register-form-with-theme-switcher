import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { lazy } from 'react';
function Form() {
  const placeholders = {
    name: 'İsmini gir',
    lastName: 'Soyismini gir',
    email: 'E-posta adresini gir',
    userName: 'Kullanıcı adını gir',
    password: 'Şifreni gir',
    repeatPassword: 'Şifreni doğrula',
  }
  return (
    <div className='col-6 position-relative'>
      <img className='theme-switcher' src={require('../images/theme-switcher.png')} alt="" />
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
              password: Yup.string().required('Şifre boş bırakılamaz'),
              repeatPassword: Yup.string().required('Şifrenizi tekrar girin'),
              agree: Yup.bool().required('Koşulları kabul etmelisiniz')
            })
          }
          onSubmit={(values, {resetForm, setSubmitting}) =>{
            console.log(values);
          }}
          >
            { ({values, errors, handleReset, handleSubmit, dirty, isSubmitting, handleChange}) => (
            <form onSubmit={handleSubmit}>
              <div>
                <h1 className='header as-start'>Kayıt</h1>
                <hr className='header-line' />
              </div>
              <div className='d-flex'>
                <div>
                  <label htmlFor="name">İSİM</label>
                  <input id='name' type="text" value={values.name} onChange={handleChange} placeholder={placeholders.name}/>
                  <p> {errors.name}</p>
                </div>
                <div className='divider'> 

                </div>
                <div> 
                  <label htmlFor="lastName">SOYİSİM</label>
                  <input id='lastName' type="text" value={values.lastName} onChange={handleChange} placeholder={placeholders.lastName}/>
                  <p> {errors.lastName}</p>
                </div>
              </div>
              <div>
                  <label htmlFor="email">E-POSTA</label>
                  <input id='email' type="email" value={values.email} onChange={handleChange} placeholder={placeholders.email} />
                  <p> {errors.email}</p>
              </div>
              <div>
                <label htmlFor="userName">KULLANICI ADI</label>
                <input id='userName' type="text" value={values.userName} onChange={handleChange} placeholder={placeholders.userName} />
                <p> {errors.userName}</p>
              </div>
              <div>
                <label htmlFor="password">ŞİFRE</label>
                <input id='password' type="password" value={values.password} onChange={handleChange} placeholder={placeholders.password}/>
                <p> {errors.password}</p>
              </div>
              <div>
                <label htmlFor="repeatPassword">ŞİFRENİ TEKRAR GİR</label>
                <input id='repeatPassword' type="text" value={values.repeatPassword} onChange={handleChange} placeholder={placeholders.repeatPassword}/>
                <p> {errors.repeatPassword}</p>
              </div>
              <div className='d-flex'>
                <input id='agree' type="checkbox" value={values.agree} onChange={handleChange} className="w-5"/>
                <label className='agree-text as-end' htmlFor="agree">Sözleşmeyi kabul ediyorum</label>
                <p>{errors.agree}</p>
              </div>
              <button className='submit-btn' type='submit' disabled={!dirty}>KAYIT OL</button>
            </form> 
            )}
      
        </Formik>
      </div>
    </div>
  )
}

export default Form;