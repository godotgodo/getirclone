import React from 'react'

function ThreeSpoiler() {
    return (
        <div className='md:w-5/6 w-full h-full mx-auto mt-12 maxmd:mt-4 p-4'>
            <ul className='flex justify-around maxmd:flex-col'>
                <li className='min-h-[254px] bg-white w-1/3 p-4 flex flex-col justify-center items-center h-full mx-2 rounded-md shadow-md maxmd:w-full maxmd:mt-2'>
                    <img src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" alt="" width={'150px'} height={'150px'} />
                    <h3 className='text-xl text-getirpurple font-medium'>Her siparişinize bir kampanya</h3>
                    <p className='text-getirtextgray text-center'>Getir'de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.</p>
                </li>
                <li className='min-h-[254px] bg-white w-1/3 p-4 flex flex-col justify-center items-center h-full mx-2 rounded-md shadow-md maxmd:w-full maxmd:mt-2'>
                    <img src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg" alt="" width={'150px'} height={'150px'} />
                    <h3 className='text-xl text-getirpurple font-medium'>Dakikalar içinde kapınızda</h3>
                    <p className='text-getirtextgray text-center'>Getir’le siparişiniz dakikalar içinde kapınıza gelir.</p>
                </li>
                <li className='min-h-[254px] bg-white w-1/3 p-4 flex flex-col justify-center items-center h-full mx-2 rounded-md shadow-md maxmd:w-full maxmd:mt-2'>
                    <img src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" alt="" width={'150px'} height={'150px'} />
                    <h3 className='text-xl text-getirpurple font-medium'>Binlerce Çeşit Mutluluk</h3>
                    <p className='text-getirtextgray text-center'>Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.</p>
                </li>
            </ul>
        </div>
    )
}

export default ThreeSpoiler