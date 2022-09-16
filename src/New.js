import React from 'react'
import img from './img/imgs.jpg'

const New = () => {

  return (
    <div>
    
        <main id='home' className="mt-8 grid gap-10 lg:grid-cols-2">
                
                <img src={img} alt="img1" className=" item-center sm:mx-5 md:ml-5 w-full  h-48 sm:h-80 object-cover " />
                <div className='p-8 mt-5'>
                    <span >
                        
                        <h1 className='text-xl'>Header</h1>
                        
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate eaque doloribus enim molestias! Ea officia labore, architecto explicabo minima incidunt in ullam error delectus earum sint dicta veritatis consectetur tenetur nostrum minus, nisi ipsa aspernatur? Minima consequuntur, voluptas id aut cum nihil, animi voluptatem cupiditate odio atque perspiciatis! Qui, sed.</span>
                    <div className=" btn mt-2 w-28 bg-secondary-100 text-secondary-200 hover:text-black ">Load more</div>
                </div>
                
            </main>

        <br />

        

    </div>
  )
  
}

export default New