import React from 'react'
import Starfa from '../../assets/icons/star.svg'
import Testi from '../../assets/images/testi.jpg'

export const TestiItem = () => (
  <div className='testi-item bg-[#D9D9D9] p-8'>
    <div className='flex rating'>
      <img src={Starfa} className='w-5'/>
      <img src={Starfa} className='w-5'/>
      <img src={Starfa} className='w-5'/>
      <img src={Starfa} className='w-5'/>
      <img src={Starfa} className='w-5'/>
    </div>
    <div className='t-header flex items-center my-5'>
      <img src={Testi} className='w-20 h-20 object-cover mr-5'/>
      <h4 className='secTitle text-black uppercase'>John Doe</h4>
    </div>  
    <p className='para text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero recusandae, doloremque ducimus facilis quas facere nobis veniam iusto consequuntur modi exercitationem amet sequi, voluptates mollitia, voluptate quos excepturi quibusdam.</p>
  </div>
)

const Testimonial = () => {
  return (
    <section className='testimonials bg-primary py-[clamp(50px,31.3158px+5.8553vw,100px)]' id="testimonials">
      <div className='container mx-auto'>
        <h2 className='title text-white text-center mb-8 leading-[clamp(32px,23.5789px+2.6316vw,64px)]'>Testimonials</h2>
        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-5'>
          <TestiItem/>
          <TestiItem/>
          <TestiItem/>
          <TestiItem/>
        </div>
      </div>
    </section>
  )
}

export default Testimonial