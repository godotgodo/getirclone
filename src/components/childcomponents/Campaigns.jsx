import React from 'react'

const campaigns = [{
    name: '',
    image_url: 'https://cdn.getir.com/misc/62a0ca37c43b9c36436ef4f4_banner_tr_1654704721813.png',
}]

function Campaigns({className}) {
    return (
        <div className={`w-5/6 mx-auto p-4 h-full ${className}`}>
            <h1 className='text-lg py-4 px-1 maxmd:hidden'>Kampanyalar</h1>
            <div className='flex flex-wrap mt-2'>
                {
                    campaigns.map(campaign =>
                        <img src={campaign.image_url} alt="" className="rounded-lg md:w-[400px] md:h-[200px]" />
                    )
                }
            </div>
        </div>
    )
}

export default Campaigns