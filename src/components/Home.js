import  React from 'react';

const Home = () => {
    return(
        <div>
            <div className='add-to-cart'>
                <img src = 'shopping-cart_400086.png' alt = ''/>
            </div>
            <h1>Home component</h1>
            <div className='cart-wrapper'>
                <div className = 'img-wrapper item'>
                 <img src = 'https://images.hindustantimes.com/tech/htmobile4/P38205/heroimage/152800-v1-apple-iphone-15-ultra-mobile-phone-large-1.jpg?impolicy=new-ht-20210112&width=500&height=500' alt = '' />
                 </div>
                 <div className = 'text-wrapper item'>
                    <span>Iphone</span>
                    <span>Price: $1000.00</span>
                 </div>
                 <div className = 'btn-wrapper item'>
                    <button> Add to Cart </button>
                 </div>
            </div>
        </div> 
    )
}
    
export default Home;