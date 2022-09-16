import React from 'react'
import img from './img/imgs.jpg'

const New = () => {

  return (
    <div>
    
        <main class="mt-8 grid gap-10 lg:grid-cols-2">
                
                <img src={img} alt="img1" class=" item-center sm:mx-5 md:ml-5 w-full h-48 sm:h-80 object-cover" />
                <div>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate eaque doloribus enim molestias! Ea officia labore, architecto explicabo minima incidunt in ullam error delectus earum sint dicta veritatis consectetur tenetur nostrum minus, nisi ipsa aspernatur? Minima consequuntur, voluptas id aut cum nihil, animi voluptatem cupiditate odio atque perspiciatis! Qui, sed.</span>
                    <div class=" btn mt-2 w-32 bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125  hover:text-black transition ease-out duration-300">Load more</div>
                </div>
            </main>



    </div>
  )
  
}

export default New