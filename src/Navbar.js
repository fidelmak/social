
import React from 'react'

const Navbar = () => {
    return (
<div>

<nav>

        


    <div className=' bg-sky flex text-white md:justify-center items-center '>
           
                <h1 className='font-bold uppercase p-4 border-b '>Social</h1>

           
                    <ul className='flex '>
                    
                    <li>
                    <a href="/#home" class="block py-2 pr-4 pl-3  hover:text-white  text-gray-100" aria-current="page"> HOME </a>  

                    </li>
                    <li>
                    <a href="#span" class="block py-2 pr-4 pl-3 hover:text-white text-gray-100"> RISKS </a>  

                    </li>
                    <li>
                    <a href="#contact" class="block py-2 pr-4 pl-3 hover:text-white text-gray-100" > CONTACT </a>  

                    </li>
                    
                    


                    </ul>

    </div>

</nav>

</div>
    )
}
export default Navbar 