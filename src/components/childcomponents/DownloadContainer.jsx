import React from 'react'

function DownloadContainer() {
    return (
        <div className='w-full h-full mt-2'>
            <div className='bg-getirpurple w-[1232px] h-[312px] maxmd:w-auto min-h-[312px] mx-auto rounded-md flex' style={{ backgroundImage: 'url("https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png")' }}>
                <div className='h-full ml-12 flex flex-col justify-center'>
                    <h2 className='text-white text-4xl font-semibold'>Getir'i indirin</h2>
                    <p className='text-white text-lg mt-2'>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
                    <ul className='flex mt-6'>
                        <li className='mx-1'>
                            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                        </li>
                        <li className='mx-1'>
                            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                        </li>
                        <li className='mx-1'>
                            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                        </li>
                    </ul>
                </div>
                <img className='ml-auto maxmd:hidden' src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" alt="" />
            </div>
        </div>
    )
}

export default DownloadContainer