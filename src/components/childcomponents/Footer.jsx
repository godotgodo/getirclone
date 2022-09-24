import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';

function Footer() {
    return (
        <div className='w-full h-80 bg-white mt-10'>
            <div className='w-5/6 mx-auto h-min flex'>
                <div className='w-[22%] flex flex-col justify-evenly'>
                    <h4 className='text-getirpurple text-lg ml-2 mt-4'>Getiri İndirin!</h4>
                    <ul>
                        <li className='mt-4 ml-2'>
                            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                        </li>
                        <li className='mt-4 ml-2'>
                            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                        </li>
                        <li className='mt-4 ml-2'>
                            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                        </li>
                    </ul>
                </div>
                <div className='w-[22%] text-sm'>
                    <h4 className='text-getirpurple text-lg ml-2 mt-4'>Getiri Keşfedin</h4>
                    <ul>
                        <li className='mt-4 ml-2'>
                            Hakkımızda
                        </li>
                        <li className='mt-4 ml-2'>
                            Kariyer
                        </li>
                        <li className='mt-4 ml-2'>
                            Teknoloji Kariyerleri
                        </li>
                        <li className='mt-4 ml-2'>
                            İletişim
                        </li>
                        <li className='mt-4 ml-2'>
                            Sosyal Sorumluluk Projeleri
                        </li>
                    </ul>
                </div>
                <div className='w-[22%] text-sm'>
                    <h4 className='text-getirpurple text-lg ml-2 mt-4'>Yardıma mı ihtiyacınız var?</h4>
                    <ul>
                        <li className='mt-4 ml-2'>
                            Sıkça Sorulan Sorular
                        </li>
                        <li className='mt-4 ml-2'>
                            Kişisel Verilerin Korunması
                        </li>
                        <li className='mt-4 ml-2'>
                            Gizlilik Politikası
                        </li>
                        <li className='mt-4 ml-2'>
                            Kullanım Koşulları
                        </li>
                        <li className='mt-4 ml-2'>
                            Çerez Politikası
                        </li>
                    </ul>
                </div>
                <div className='w-[22%] text-sm'>
                    <h4 className='text-getirpurple text-lg ml-2 mt-4'>İş Ortağımız Olun</h4>
                    <ul>
                        <li className='mt-4 ml-2'>
                            Bayimiz Olun
                        </li>
                        <li className='mt-4 ml-2'>
                            Deponuzu Kiralayın
                        </li>
                        <li className='mt-4 ml-2'>
                            GetirYemek restoranı olun
                        </li>
                        <li className='mt-4 ml-2'>
                            GetirÇarşı işletmesi olun
                        </li>
                        <li className='mt-4 ml-2'>
                            Zincir Restoranlar
                        </li>
                    </ul>
                </div>
                <div className='ml-auto mt-4'>
                    <img src="https://picsum.photos/80/80" alt="" width={'80px'} height={'80px'} />
                </div>
            </div>
            <hr className='w-5/6 mt-4 mx-auto' />
            <div className='w-5/6 mx-auto h-16 flex justify-between items-center'>
                <div>
                    &copy; 2022 Getir Bilgi Toplumu Hizmetleri
                </div>
                <div>
                    <FacebookIcon sx={{fontSize:'1.5rem',}} className="mx-2 opacity-60" />
                    <TwitterIcon sx={{fontSize:'1.5rem',}} className="mx-2 opacity-60" />
                    <InstagramIcon sx={{fontSize:'1.5rem',}} className="mx-2 opacity-60"/> 
                    <LanguageIcon sx={{ fontSize: '1.3rem' }} className="opacity-60"/>
                    <span className='ml-2 lg:inline-block hidden'>
                        Türkçe TR
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer