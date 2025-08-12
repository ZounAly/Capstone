import React from 'react'
import Dishicon from '../../assets/icons/Dishicon.svg'
import Dish1 from '../../assets/images/bruchetta.png'
import Dish2 from '../../assets/images/greeksalad.jpg'
import Dish3 from '../../assets/images/lemondessert.jpg'

export const Cta = () => (
    <div className='grid md:grid-cols-2 items-center mb-[clamp(25px,13.1579px+3.6842vw,50px)]'>
        <h2 className='title text-black'>This weeks specials!</h2>
        <a href="#" className='button leadText inline-block justify-self-start md:justify-self-end'>Online Menu</a>
    </div>
);

export const Card = (props) => (
    <div className='dish-card'>
        <img src={props.imageURL}/>
        <div className='card-content'>
            <h4 className='cardTitle'>{props.dishName} <span className='text text-secondary'>{props.dishPrice}</span></h4>
            <p className='leadText text-secondary4'>{props.desc}</p>
            <a className='leadText' href="#">Order a delivery <img className="px-2.5" src= {Dishicon}/></a>
        </div>
    </div>
);

const WeeksSpecials = () => {
  return (
    <section className='weeks-special pt-4 pb-8'>
        <div className='container mx-auto'>
            <Cta/>
            <div className='grid md:grid-cols-3 gap-5'>
                <Card 
                    imageURL={Dish1}
                    dishName="Bruchetta"
                    dishPrice="$12.99"
                    desc="Little lemon description goes here. This is just a placeholder content.This is just a placeholder content."
                />
                <Card 
                    imageURL={Dish2}
                    dishName="Greek Salad"
                    dishPrice="$12.99"
                    desc="Little lemon description goes here. This is just a placeholder content.This is just a placeholder content."
                />
                <Card 
                    imageURL={Dish3}
                    dishName="Lemon Dessert"
                    dishPrice="$12.99"
                    desc="Little lemon description goes here. This is just a placeholder content.This is just a placeholder content."
                />
            </div>
        </div>
    </section>
  )
}

export default WeeksSpecials