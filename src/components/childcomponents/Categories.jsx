import React from 'react'

const categories = [
    {
        name: 'Su & içecek',
        image_url: 'https://market-product-images-cdn.getirapi.com/category/f66f92ea-f680-4dd4-808b-8f8a71709a86.jpeg',
    },
    {
        name: 'Meyve & Sebze',
        image_url: 'https://market-product-images-cdn.getirapi.com/category/d43a0396-b588-4666-ac43-af4b3159fee2.jpeg',
    },
    {
        name: 'Fırından',
        image_url: 'https://market-product-images-cdn.getirapi.com/category/6814548a-24f2-4ba2-9762-7ca3e96a3d40.jpeg',
    },
    {
        name: 'Atıştırmalık',
        image_url: 'https://market-product-images-cdn.getirapi.com/category/8393d053-6478-410a-a234-d1a914185b35.jpeg',
    },
    {
        name: 'Dondurma',
        image_url: 'https://market-product-images-cdn.getirapi.com/category/0f329100-f339-4503-bf56-095ab4c11c98.jpeg',
    },
    {
        name: 'Süt ürünleri',
        image_url: 'https://market-product-images-cdn.getirapi.com/category/afee33f9-93fe-4b87-8094-6e5c7f13c064.jpeg',
    },
    {
        name: 'Kahvaltılık',
        image_url: 'https://market-product-images-cdn.getirapi.com/category/35640646-a603-4b9a-96db-96918025fb61.jpeg',
    },
    {
        name: 'Yiyecek',
        image_url: 'https://market-product-images-cdn.getirapi.com/category/b01619f2-e12e-4777-85a2-5727abb62d51.jpeg',
    },
    {
        name: 'Fit & Form',
        image_url: 'https://market-product-images-cdn.getirapi.com/category/c594be17-998d-475e-91a5-89924798a27d.jpeg',
    },
    {
        name: 'Kişisel Bakım',
        image_url: 'https://market-product-images-cdn.getirapi.com/category/d7b76064-6334-43a4-aafe-ace887ec2da6.jpeg',
    },
    {
        name: 'Ev Bakım',
        image_url: 'https://market-product-images-cdn.getirapi.com/category/29bcb34e-ae77-46f8-b27c-d36e50275709.jpeg',
    },
    {
        name: 'Ev & Yaşam',
        image_url: 'https://market-product-images-cdn.getirapi.com/category/d737c0bd-538c-486c-9485-46aff62856d1.jpeg',
    },
    {
        name: 'Teknoloji',
        image_url: 'https://market-product-images-cdn.getirapi.com/category/d6e1fc47-6dbe-4be0-9e21-8b3a3f9cfecd.jpeg',
    },
    {
        name: 'Evcil Hayvan',
        image_url: 'https://market-product-images-cdn.getirapi.com/category/907cbf21-00b7-4f94-b257-9fd8b104cf02.jpeg',
    },
    {
        name: 'Bebek',
        image_url: 'https://market-product-images-cdn.getirapi.com/category/517efd09-95b6-466a-980e-55db579ebddc.jpeg',
    },
    {
        name: 'Cinsel Sağlık',
        image_url: 'https://market-product-images-cdn.getirapi.com/category/34e1cf54-bf96-498b-ba55-680b960cfcfc.jpeg',
    },

]

function Categories() {
    return (
        <div className='w-full bg-white h-full shadow-sm'>
            <div className='w-5/6 mx-auto'>
                <h1 className='text-lg py-4 px-1'>Kategoriler</h1>
                <ul className='flex flex-wrap'>
                    {
                        categories.map(categorie =>
                            <li className='group p-5 hover:bg-violet-100 cursor-pointer rounded mx-auto lg:mx-1 w-1/4 md:w-1/5 lg:w-[9%]' key={categorie.name}>
                                <img className='w-12 mx-auto' src={categorie.image_url} alt="" />
                                <span className='group-hover:text-getirpurple'>{categorie.name}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Categories