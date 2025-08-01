'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Bio = () => {

  const [showAll , setShowAll] = useState(false) ;
  const workHistory = [
    {
      title: 'Designer',
      company: 'Google',
      date: '2020-2021'
    },
    {
      title: 'Developer',
      company: 'Microsoft',
      date: '2020-2021'
    },
    {
      title: 'Developer',
      company: 'Apple',
      date: '2020-2021'
    },
  ]
  return (
    <section className='w-full mb-10 flex flex-col items-center justify-center mt-10 gap-4'
    style={{ 
      borderTopStyle: 'dashed', 
      borderBottomStyle: 'dashed',
      borderTopWidth: '2px', 
      borderBottomWidth: '2px',
      borderTopColor: '#d1d5db',
      borderBottomColor: '#d1d5db',
      borderImage: 'repeating-linear-gradient(to right, #d1d5db 0, #d1d5db 12px, transparent 12px, transparent 24px) 1'
    }}
    >
        <div className='flex items-start justify-start flex-col p-2 px-4 sm:px-8 lg:px-12 w-full gap-4 mt-16'>
            <div className='text-start w-full text-6xl font-switzer font-medium tracking-tight text-black'>
            <span className=' text-[#828282] '>I design with purpose &</span><br/> build with precision
            </div>
        </div>

        <div className='flex  items-start justify-start w-full p-2 px-4 sm:px-8 lg:px-12 '>

          <div className='flex flex-col items-center justify-start w-full gap-10'>
          <div className='flex flex-col items-start justify-start w-full gap-6'>
            <div className='relative h-[400px] w-[380px] rounded-xl aspect-[5/3.5]'>
                <Image src='/images/profile-cartoon.png' fill alt='jnj' className='object-cover rounded-2xl'/>
            </div>
            <div className='text-start text-2xl font-switzer font-medium tracking-tighter text-black flex flex-col items-start justify-start w-full'>
              <p className='text-start text-[22px] font-switzer font-medium tracking-tighter text-black'> Shashi ala</p>
              <p className='text-start text-sm font-switzer font-medium tracking-tight text-[#545454]'>Designer & Developer</p>
            </div>
          </div>

          <div className='flex flex-col items-start justify-center w-full gap-4 text-start text-[18px] font-switzer font-medium tracking-tighter text-black leading-relaxed'>
        <p>My work history</p>
        <div className='relative w-[70%] min-h-[60px] flex flex-col justify-start items-center'>
          {workHistory.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col items-start p-3 px-4 border border-gray-300 rounded-2xl bg-white shadow-sm transition-all duration-500 ease-in-out ${
                !showAll && index > 0 ? 'absolute top-0' : 'relative'
              }`}
              style={{
                width: !showAll ? `${100 - (index * 8)}%` : '100%',
                transform: !showAll && index > 0 ? `translateY(${index * 12}px)` : 'translateY(0)',
                opacity: !showAll && index > 0 ? `${100 - (index * 25)}%` : '100%',
                zIndex: 10 - index,
                marginBottom: showAll ? '8px' : '0',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className='text-[14px] text-start text-black font-switzer font-medium tracking-normal'>
                {item.company}
              </div>
              <div className='text-[14px] text-start text-[#545454] font-switzer font-medium tracking-normal flex items-center justify-between w-full'>
                <p>{item.title}</p>
                <p className='text-[12px]'>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
        
        {workHistory.length > 1 && (
          <button 
            onClick={() => setShowAll(!showAll)}
            className='mt-4 text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200 flex items-center gap-2'
          >
            <span>{showAll ? 'Hide' : `Show all (${workHistory.length})`}</span>
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>

          </div>

          
          <div className='flex flex-col items-start justify-start w-full gap-4 text-start text-[22px] font-switzer font-medium tracking-tighter text-[#545454] leading-relaxed'>
            <p>
              <span className='text-black'>Over the years</span>, I&apos;ve realized that great digital products come from a balance between how they look and how they function. I approach every project by thinking like both a designer and a developer.


            </p>
            <p>
            <span className='text-black'>I&apos;m especially drawn to the kind of work</span> where form and function come together naturally. Whether it&apos;s refining micro-interactions or choosing the right type scale, I care about the moments that most people don&apos;t notice—but definitely feel. 

            </p>
            <p>
            <span className='text-black'>What keeps me going is the challenge of solving real problems with design and code.</span> I believe the best products are the ones that respect a user&apos;s time and attention, and I try to build with that mindset.

            </p>
          </div>
          </div>
            
    </section>
  )
}

export default Bio