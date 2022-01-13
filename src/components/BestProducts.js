import React from 'react';
function BestProducts() {
    const Brands=[
    {name:"Abc", Category: "DryFruit"},
    {name:"Tuwar1000", Category: "DryFruit"},
    {name:"MSM", Category: "DryFruit"},
]
    return (
        <div className='col-md-3 text-secondary mx-auto'>
            <div className= "card w-100 h-100 mb-2 mx-auto">
            <div className='card-body border border-secondary'>
                Best Selling Products
                {/*select button*/}
            </div>
            {Brands.map(Brand =>{
            return(<div className='card-body border border-secondary'>
                <p><span className='text-primary'>{Brand.name}</span><br/>
                <span className='mr-auto'>Dry Fruit</span></p>

            </div> )})}
            <div className='card-body rounded-circle border border-secondary ml-auto'>
 
            <i class="fas fa-comment-alt"></i>
            </div>
            
            </div>
        </div>
    )
}

export default BestProducts
