import {React, useContext} from 'react'
import ThemeContext from '../contexts/ThemeContext.'
export default function Intro() {
  const Theme = useContext(ThemeContext);
  return (
    <div className={`intro-container ${Theme && 'bg-dark-grey'}`}>
      <div className='emblem-wrapper'>
        <img src={require('../images/patika-emblem.png')} alt="" />
      </div>
      <h1 className={`intro-header ${Theme && 'color-white'}`}>YAZILIM PATİKALARI</h1>
      <p className={`intro-p ${Theme && 'color-white'}`}>
      Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir
      eğitim modelidir. Ekibini büyütmek isteyen şirketler bir
      bootcamp'lere sponsor olurlar. Teknik beceriler kazanmaya
      başlamış ancak işe girmeye hazır olmayan kişiler bootcamp'lere
      başvururlar. Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun
      eğitime kabul alırlar. Bootcamp'lerde başarılı olan öğrenciler
      sponsor şirkette ya da sektörde başka şirketlere işe yerleşirler.
      </p>
      <div className='pipe-holder position-relative'>
        <img className='short-pipe' src={`${Theme ? require('../images/short-dark.png') : require('../images/short-blue.png')}`} alt="short-blue-pipe" />
        <img className='long-pipe' src={`${Theme ? require('../images/long-dark.png') : require('../images/long-blue.png')}`} alt="long-blue-pipe" />
      </div>
    </div>
    
  )
}
