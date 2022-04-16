import {React, useContext} from 'react'
import { Formik} from 'formik';
import * as Yup from 'yup';
import ThemeContext from '../contexts/ThemeContext.';
function Signup({setTheme}) {
  const Theme = useContext(ThemeContext);

  const placeholders = {
    name: 'İsmini gir',
    lastName: 'Soyismini gir',
    email: 'E-posta adresini gir',
    userName: 'Kullanıcı adını gir',
    password: 'Şifreni gir',
    repeatPassword: 'Şifreni doğrula',
  }
  function isStar(error) {
    if(error){
     return <span className='error-star'>*</span>
    }
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
          }}
          >
            { ({values, errors, handleReset, handleSubmit, dirty, isSubmitting, handleChange}) => (
            <form className={` w-70 ${Theme && 'color-white'}`} onSubmit={handleSubmit}>
              <div>
                <h1 className={`header as-start ${Theme && 'color-white'}`}>Kayıt</h1>
                <hr className={`header-line ${Theme && 'header-line-dark'}`} />
              </div>
              <div className='d-flex'>
                <div className='input-wrapper'>
                  <label htmlFor="name">İSİM
                    {isStar(errors.name)}
                  </label>
                  <input id='name' type="text" value={values.name} onChange={handleChange} placeholder={placeholders.name} 
                  className={`${Theme && 'input-dark'}`}
                  />
                  <p className='error-p'> {errors.name}</p>
                </div>
                <div className='divider'> 

                </div>
                <div> 
                  <label htmlFor="lastName">SOYİSİM
                    {isStar(errors.lastName)}
                  </label>
                  <input id='lastName' type="text" value={values.lastName} onChange={handleChange} placeholder={placeholders.lastName}
                  className={`${Theme && 'input-dark'}`}/>
                  <p> {errors.lastName}</p>
                </div>
              </div>
              <div>
                  <label htmlFor="email">E-POSTA 
                    {isStar(errors.email)}
                  </label>
                  <input id='email' type="email" value={values.email} onChange={handleChange} placeholder={placeholders.email} 
                  className={`${Theme && 'input-dark'}`}/>
                  <p> {errors.email}</p>
              </div>
              <div>
                <label htmlFor="userName">KULLANICI ADI
                  {isStar(errors.userName)}
                </label>
                <input id='userName' type="text" value={values.userName} onChange={handleChange} placeholder={placeholders.userName} 
                className={`${Theme && 'input-dark'}`}/>
                <p> {errors.userName}</p>
              </div>
              <div>
                <label htmlFor="password">ŞİFRE
                  {isStar(errors.password)}
                </label>
                <input id='password' type="password" value={values.password} onChange={handleChange} placeholder={placeholders.password}
                className={`${Theme && 'input-dark'}`}/>
                <p> {errors.password}</p>
              </div>
              <div>
                <label htmlFor="repeatPassword">ŞİFRENİ   TEKRAR GİR {isStar(errors.repeatPassword)}
                </label>
                <input id='repeatPassword' type="password" value={values.repeatPassword} onChange={handleChange} placeholder={placeholders.repeatPassword} className={`${Theme && 'input-dark'}`}/>
                <p> {errors.repeatPassword}</p>
              </div>
              <div className='d-flex checkbox-wrapper'>
                <input id='agree' type="checkbox" value={values.agree} onChange={handleChange}  className={`w-5 ${Theme && 'checkbox'}`}/>
                <label className={`as-end agree-text ${Theme && 'dark-checkbox'}`}
                htmlFor="agree">Sözleşmeyi kabul ediyorum
                  {isStar(errors.agree)}
                </label>
                <p className='mt-1 ml-1'>{errors.agree}</p>
              </div>
              <button className={`submit-btn ${Theme && 'bg-yellow'}`} type='submit' disabled={!dirty}>KAYIT OL</button>
            </form> 
            )}
      
        </Formik>
      </div>
    </div>
  )
}

export default Signup;