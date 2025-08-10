import React from 'react'
import bannerImage from '../../assets/images/restauranfood.jpg';

export default function Banner() {
  return (
    <section className='banner relative py-8' id='banner'>
        <div className='bg-section bg-primary absolute -z-10 inset-0 md:bottom-[90px]'></div>
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2'>
                <div className='content'>
                    <h1 className='title text-primary2 leading-[clamp(32px,23.5789px+2.6316vw,64px)]'>Little Lemon</h1>
                    <h2 className='subtite leading-[clamp(24px,19.7895px+1.3158vw,40px)] text-white'>Chicago</h2>
                    <p className='leadText text-white sm:w-96'>Little lemon description goes here. This is just a placeholder content.This is just a placeholder content.</p>
                    <a href="#" className='button leadText mt-[clamp(20px,12.6316px+2.3026vw,40px)]'>Reserve a table</a>
                </div>
                <div className='hidden md:block image'>
                    <img src={bannerImage} className='md:h-[400px] w-100 ml-auto rounded-[20px] object-cover' />
                </div>
            </div>
        </div>
    </section>
  ) 
}
