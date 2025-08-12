import React from 'react'
import AboutImg from '../../assets/images/restaurant.jpg'

const About = () => {
  return (
    <section className='about-sec py-[clamp(50px,31.3158px+5.8553vw,100px)]' id="about-sec">
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 items-center'>
                <div className='about-text w-[90%]'>
                    <h2 className='title text-primary'>Little Lemon</h2>
                    <h3 className='subtite text-primary2 mb-5'>Chicago</h3>
                    <p className='leadText text-secondary4 pb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p className='leadText text-secondary4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='about-img'>
                    <img src={AboutImg} className='rounded-lg'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About