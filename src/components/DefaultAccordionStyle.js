import React, { useState } from 'react'

export default function DefaultAccordionStyle() {
    const [sidebar, setSidebar] = useState(false);
    // eslint disabled next line 
    const [checked, disabled] = useState('Style 1');
    const radioBox = ['Style 1', 'Style 2', 'Style 3', 'Style 4']
    return (
        <>

            <div className="text-center">
                <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 fixed top-[88px] right-2" type="button" onClick={() => { setSidebar(true) }}>
                    <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13" r="4" stroke="#fff" strokeWidth="2" />
                        <path d="M11.2844 2.86293C12.061 1.56696 13.939 1.56696 14.7156 2.86293L15.4213 4.0407C15.8742 4.79649 16.7684 5.16686 17.6231 4.95268L18.9549 4.61892C20.4204 4.25166 21.7483 5.57958 21.3811 7.0451L21.0473 8.37695C20.8331 9.23162 21.2035 10.1258 21.9593 10.5787L23.1371 11.2844C24.433 12.061 24.433 13.939 23.1371 14.7156L21.9593 15.4213C21.2035 15.8742 20.8331 16.7684 21.0473 17.6231L21.3811 18.9549C21.7483 20.4204 20.4204 21.7483 18.9549 21.3811L17.6231 21.0473C16.7684 20.8331 15.8742 21.2035 15.4213 21.9593L14.7156 23.1371C13.939 24.433 12.061 24.433 11.2844 23.1371L10.5787 21.9593C10.1258 21.2035 9.23162 20.8331 8.37695 21.0473L7.04509 21.3811C5.57958 21.7483 4.25166 20.4204 4.61892 18.9549L4.95268 17.6231C5.16686 16.7684 4.79649 15.8742 4.04069 15.4213L2.86293 14.7156C1.56696 13.939 1.56696 12.061 2.86293 11.2844L4.0407 10.5787C4.79649 10.1258 5.16686 9.23162 4.95268 8.37695L4.61892 7.04509C4.25166 5.57958 5.57958 4.25166 7.0451 4.61892L8.37695 4.95268C9.23162 5.16686 10.1258 4.79649 10.5787 4.04069L11.2844 2.86293Z" stroke="#fff" strokeWidth="2" />
                    </svg>

                </button>
            </div>
            <div className={`${sidebar ? 'visible' : 'invisible delay-75'} px-4`}>
                <div className={`fixed top-1/2  left-0 box-border -translate-y-1/2 z-30 px-4 py-6 ml-4 rounded-lg bg-white ease-in duration-200  ${sidebar ? ' opacity-100' : '-translate-x-14 opacity-0'}`} style={{width : 'calc(100% - 256px)'}}>
                    <div className="main relative w-full border-b-2 border-[#E5E7EB]">
                        <div className="flex items-center justify-between py-4 px-5 bg-[#F9FAFB] mb-1">
                            <div className="flex justify-center items-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.77216 3.77216C0.40928 6.13503 0.409282 9.96602 2.77216 12.3289L11.937 21.4937L12 21.4307L12.0631 21.4938L21.2279 12.329C23.5908 9.96609 23.5908 6.13511 21.2279 3.77223C18.865 1.40936 15.034 1.40936 12.6712 3.77224L12.3536 4.08978C12.1584 4.28505 11.8418 4.28505 11.6465 4.08978L11.3289 3.77216C8.96601 1.40928 5.13503 1.40928 2.77216 3.77216Z" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h1 className='ml-3'>Label</h1>
                            </div>
                            <div className="collapse-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.9263 10L11.9631 16.9632L4.99993 10" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="main relative w-full border-b-2 border-[#E5E7EB] mt-6">
                        <div className="flex items-center justify-between py-4 px-5 bg-[#F9FAFB] mb-1">
                            <div className="flex justify-center items-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.77216 3.77216C0.40928 6.13503 0.409282 9.96602 2.77216 12.3289L11.937 21.4937L12 21.4307L12.0631 21.4938L21.2279 12.329C23.5908 9.96609 23.5908 6.13511 21.2279 3.77223C18.865 1.40936 15.034 1.40936 12.6712 3.77224L12.3536 4.08978C12.1584 4.28505 11.8418 4.28505 11.6465 4.08978L11.3289 3.77216C8.96601 1.40928 5.13503 1.40928 2.77216 3.77216Z" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h1 className='ml-3'>Label</h1>
                            </div>
                            <div className="collapse-btn rotate-180">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.9263 10L11.9631 16.9632L4.99993 10" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="accordion-body">
                            <div className="px-2 pb-2">
                                <p className='text-sm pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, exercitationem.</p>
                                <p className='text-sm pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, exercitationem.</p>
                                <p className='text-sm pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, exercitationem.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`w-screen h-screen bg-black fixed z-10 top-0 right-0 opacity-20 transition-opacity ${sidebar ? 'opacity-0, visible' : 'opacity-100, invisible'} `} onClick={() => { setSidebar(false) }}></div>
               

                <div id="drawer-right" className={`fixed z-40 p-4 overflow-y-auto bg-white w-52 h-[276px] dark:bg-gray-800 transition-transform right-4 top-1/2 -translate-y-1/2 rounded-lg ${sidebar ? '' : 'translate-x-full'}`}>
                    <h3 id="drawer-right-label" className="inline-flex text-2xl items-center mb-4 font-semibold text-gray-500 dark:text-gray-400">Default Styles</h3>
                    
                        {radioBox.map(result => {return <div className='flex mt-3' key={Math.random()}>
                                <input type="radio" name="style" value={result} checked={result === checked} onChange={(e) => {disabled(e.target.value) }} className='accent-slate-500 cursor-pointer' id={result} />
                                <label className='ml-3 text-sm cursor-pointer' htmlFor={result}>Accordion {result}</label>
                            </div>
                        })}                        
                    
                    <div className='flex mt-5'>
                        <button
                            type="button"
                            className="inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
                        >Apply Style</button>
                    </div>
                </div>

            </div>
        </>
    )
}
