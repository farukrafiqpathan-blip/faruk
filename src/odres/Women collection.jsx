import React from "react";
import Navbar from "../component/Navbar";
import "./Product.css"

function Womencollection() {
    return (
        <>
            <style>
                {`
            .product {
    color: white; 
    margin-top: 74px;
    background:#F3A847;
    width: 100%;          
    position: fixed;
    left: 0;              
    top: 0;
    text-allin:left 
    //  transform: translateX(-50px);
}
    `}
            </style>
            
            <section className="product">
                <h1>Women Collection</h1>
            </section>

            <div className='crad'>
                <div className="card m-5">
                    <img
                        src="https://i.pinimg.com/1200x/b5/3b/1e/b53b1e11c8e6d7effe8130ea679e5722.jpg"
                        className="card-img-top"
                        alt="Men Suit"
                        style={{ height: "230px" }} />

                    <div className="card-body text-center">
                        <h5 className="card-title">Women's Suit</h5>
                        <p className="card-text">₹20,000</p>
                        <button className="btn btn-dark">ADD TO CART</button>
                    </div>
                </div>
            </div>

             <div className='crad-2'>
                <div className="card m-5">
                    <img
                        src="https://i.pinimg.com/736x/f5/a0/4c/f5a04c9dfbcfceb0eebc347d7ffa71b5.jpg"
                        className="card-img-top"
                        alt="Men Suit"
                        style={{ height: "230px" }} />

                    <div className="card-body text-center">
                        <h5 className="card-title">Women's Suit</h5>
                        <p className="card-text">₹20,000</p>
                        <button className="btn btn-dark">ADD TO CART</button>
                    </div>
                </div>
            </div>

             <div className='crad-3'>
                <div className="card m-5">
                    <img
                        src="https://i.pinimg.com/736x/75/fe/d9/75fed935e56483f06f96af2b0da4f45f.jpg"
                        className="card-img-top"
                        alt="Men Suit"
                        style={{ height: "230px" }} />

                    <div className="card-body text-center">
                        <h5 className="card-title">Women's Suit</h5>
                        <p className="card-text">₹20,000</p>
                        <button className="btn btn-dark">ADD TO CART</button>
                    </div>
                </div>
            </div>




        </>
    );
}

export default Womencollection;