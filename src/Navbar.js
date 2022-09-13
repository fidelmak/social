
import React from 'react'

const Navbar = () => {
    return (
<div>

<nav>

        


    <div className=' bg-sky flex text-white md:justify-center items-center '>
           
                <h1 className='font-bold uppercase p-4 border-b '>Social</h1>

           
                    <ul className='flex '>
                    
                    <li>
                    <a href="/" class="block py-2 pr-4 pl-3  hover:text-white  text-gray-100" aria-current="page"> Home </a>  

                    </li>
                    <li>
                    <a href="/" class="block py-2 pr-4 pl-3 hover:text-white text-gray-100"> About </a>  

                    </li>
                    <li>
                    <a href="/" class="block py-2 pr-4 pl-3 hover:text-white text-gray-100" > Contact </a>  

                    </li>
                    
                    


                    </ul>

    </div>

</nav>

</div>
    )
}
export default Navbar 