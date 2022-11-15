import React from 'react'

export default function Card(props) {
    const { img, title, platform, price } = props;

    return (
        <>
            <div className='bg-[#362c29]/50 rounded-xl flex flex-col gap-2'>
                <img src={img} alt={title} className='w-100 lg:h-52 h-80 object-cover' />
                <div className='p-6'>
                    <h1 className='text-xl text-white my-4'>{title}</h1>
                    <span className='text-gray-500 uppercase'>{platform}</span>
                    <div className='flex items-center gap-3'>
                        <h5 className='text-3xl text-[#e58d27]'>{price}€</h5>
                        <button type='submit' className='bg-[#e58d27] font-bold text-black rounded-full w-full my-3 p-2 hover:translate-y-1 transition-all'>Buy</button>
                    </div>
                </div>
            </div>
        </>
    )
}
