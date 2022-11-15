import React, { useContext, useState } from 'react'
import { BiEuro } from 'react-icons/bi'
import { RiFacebookLine, RiYoutubeLine, RiInstagramLine, RiTwitterLine, RiFilter3Line, RiCloseLine } from "react-icons/ri";
import { FilterContext } from '../context/filterContext';

export default function Sidebar({ applyFilters }) {
    const { addCategory, addPlatform, addPrices } = useContext(FilterContext);
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            <div className={`z-10 w-full fixed lg:static top-0 ${showSidebar ? "left-0 bg-[#362c29]" : "-left-full"} lg:w-80 h-full overflow-y-hidden text-gray-400 transition-all`}>
                {/* search */}
                <div className="bg-[#362c29]/80 rounded-xl p-4">
                    <h4 className='mt-5 mb-3 text-white text-lg'>Categories</h4>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='horror' onClick={(e) => addCategory(e)} />
                            <label htmlFor='horror'>Horror</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='adventure' onClick={(e) => addCategory(e)} />
                            <label htmlFor='adventure'>Adventure</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='mmo' onClick={(e) => addCategory(e)} />
                            <label htmlFor='mmo'>MMO</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='casual' onClick={(e) => addCategory(e)} />
                            <label htmlFor='casual'>Casual Game</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='strategy' onClick={(e) => addCategory(e)} />
                            <label htmlFor='strategy'>Strategy</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='simulator' onClick={(e) => addCategory(e)} />
                            <label htmlFor='simulator'>Simulator</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='sports' onClick={(e) => addCategory(e)} />
                            <label htmlFor='sports'>Sports Game</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='action' onClick={(e) => addCategory(e)} />
                            <label htmlFor='action'>Action Game</label>
                        </div>
                    </div>
                    <h4 className='mt-5 mb-3 text-white text-lg'>Platforms</h4>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='ps5' onClick={(e) => addPlatform(e)} />
                            <label htmlFor='ps5'>Playstation 5</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='pc' onClick={(e) => addPlatform(e)} />
                            <label htmlFor='pc'>PC</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='xbox' onClick={(e) => addPlatform(e)} />
                            <label htmlFor='xbox'>Xbox Series</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='nintendo' onClick={(e) => addPlatform(e)} />
                            <label htmlFor='nintendo'>Nintendo Switch</label>
                        </div>
                    </div>
                    <h4 className='mt-5 mb-3 text-white text-lg'>Price</h4>
                    <form className='flex flex-col gap-6'>
                        <div className='flex items-center justify-start lg:justify-between gap-2'>
                            <div className='relative'>
                                <p className='px-2'>Min</p>
                                <BiEuro className='absolute left-2 top-2/3 -translate-y-1/2' />
                                <input type="number" id="minp" className='bg-[#181a20] py-2 pl-8 pr-4 rounded-xl outline-none w-full text-right' onChange={(e) => {
                                    addPrices(e.target.id, e.target.value)
                                }} />
                            </div>
                            <span>-</span>
                            <div className='relative'>
                                <p className='px-2'>Max</p>
                                <BiEuro className='absolute left-2 top-2/3 -translate-y-1/2' />
                                <input type="number" id='maxp' className='bg-[#181a20] py-2 pl-8 pr-4 rounded-xl outline-none w-full text-right' onChange={(e) => {
                                    addPrices(e.target.id, e.target.value)
                                }} />
                            </div>
                        </div>
                        <button type='button' className='bg-[#e58d27] font-bold text-black rounded-full w-full my-3 p-2 hover:translate-y-1 transition-all' onClick={applyFilters}>Apply Filter</button>
                    </form>
                </div>
                {/* Social media */}
                <ul className='flex items-center justify-around lg:justify-between p-4'>
                    <li>
                        <a href="https://www.facebook.com/" className='text-2xl' target="_blank"><RiFacebookLine /></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/" className='text-2xl' target="_blank"><RiYoutubeLine /></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/" className='text-2xl' target="_blank"><RiInstagramLine /></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/" className='text-2xl' target="_blank"><RiTwitterLine /></a>
                    </li>
                </ul>
            </div>
            {/* Button Movile */}
            <button className='z-20 fixed bottom-4 right-12 bg-[#e58d27] p-4 text-2xl rounded-full lg:left-full' onClick={() => setShowSidebar(!showSidebar)}>
                {
                    showSidebar ? <RiCloseLine /> : <RiFilter3Line />
                }
            </button>
        </>
    )
}
