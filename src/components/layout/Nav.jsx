import React from 'react'

export const Nav = (props) => {
  const navItems = [
    { text: 'Home', href: '#:' },
    { text: 'About', href: '#:' },
    { text: 'Menu', href: '#:' },
    { text: 'Reservations', href: '#:' },
    { text: 'Order online', href: '#:' },
    { text: 'Login', href: '#:' },
  ];
  return (
    <nav className={props.className}>
      <ul className='flex'>
        {navItems.map((item)=>(
          <li key={item.text} className='md:pl-[30px] lg:pl-[40px] xl:pl-[60px]'><a className='hover:text-primary leadText' href={item.href}>{item.text}</a></li>
        ))}
      </ul>
    </nav>
  )
}
