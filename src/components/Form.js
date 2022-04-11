import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
export default function Form() {
  return (
    <div className='col-6'>
      <h1 className='text-start'>Kayıt</h1>
      <Formik     
      initialValues={{
          name: 'İsmini gir',
          lastName: '',
          email: '',
          userName: '',
          password: '',
          repeatPassword: '',
          agree: false,
        }}
        validationSchema={
          Yup.object({
            name: Yup.string().required('İsim alanı boş bırakılamaz'),
            lastName: Yup.string().required('Soyisim alanı boş bırakılamaz'),
            userName: Yup.string().required('Kullanıcı adı boş bırakılamaz'),
            password: Yup.string().required('Şifre boş bırakılamaz'),
            repeatPassword: Yup.string().required('Şifrenizi tekrar girin'),
            agree: Yup.boolean().required('Koşulları kabul etmelisiniz')
          })
        }
        >
          { ({values, errors, handleReset, handleSubmit, dirty, isSubmitting}) => (
           <form onSubmit={e => e.preventDefault}>
             <div className='d-flex'>
              <div>
                <label htmlFor="name">İSİM</label>
                <input id='name' type="text" placeholder={values.name}/>
              </div>
              <div> 
                <label htmlFor="lastName">SOYİSİM</label>
                <input id='lastName' type="text" placeholder={values.lastName}/>
              </div>
             </div>
             <div>
                <label htmlFor="email">E-POSTA</label>
                <input id='email' type="email" placeholder={values.email} />
             </div>
             <div>
               <label htmlFor="userName">KULLANICI ADI</label>
               <input id='userName' type="text" placeholder={values.userName} />
             </div>
             <div>
               <label htmlFor="password">ŞİFRE</label>
               <input id='password' type="password" placeholder={values.password} />
             </div>
             <div>
               <label htmlFor="repeatPassword">ŞİFRENİ TEKRAR GİR</label>
               <input id='repeatPassword' type="text" placeholder={values.repeatPassword} />
               
             </div>
           </form> 
          )}
    
      </Formik>
    </div>
  )
}
