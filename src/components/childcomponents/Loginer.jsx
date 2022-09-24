import React from 'react'

function Loginer({className}) {
  return (
    <form action="" className={`w-full h-full ${className}`}>
      <div className='flex flex-wrap h-full p-4'>
        <h3 className='text-getirpurple text-lg w-full text-center my-2 font-medium'>Giriş yap veya kayıt ol</h3>
        <select name="" id="" className='w-1/4 border-[2px] rounded p-2 h-14'>
          <option value="">a</option>
          <option value="">b</option>
          <option value="">c</option>
          <option value="">c</option>
        </select>
        <input type="text" name="" id="" placeholder='Telefon Numarası' className='w-2/3 ml-3 grow border-[2px] rounded-md mx-auto p-2 hover:border-getirpurple' />
        <button className='w-full bg-getiryellow text-getirpurple hover:bg-getirpurple hover:text-getiryellow transition-all rounded-md mt-3 h-12 font-medium'>Telefon numarası ile devam et</button>
      </div>
    </form>
  )
}

export default Loginer