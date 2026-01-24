import React from "react";
import Navbar from "../component/Navbar";
import "./Product.css"
function Kidscollection() {
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
                <h1>Kids Collection</h1>
            </section>

            <div className='crad'>
                <div className="card m-5">
                    <img
                        src="https://i.pinimg.com/1200x/cf/77/00/cf77005498fc8cbc37229e7f81b21250.jpg"
                        className="card-img-top"
                        alt="Men Suit"
                        style={{ height: "230px" }} />

                    <div className="card-body text-center">
                        <h5 className="card-title">Kids's Suit</h5>
                        <p className="card-text">₹20,000</p>
                        <button className="btn btn-dark">ADD TO CART</button>
                    </div>
                </div>
            </div>

              <div className='crad-2'>
                <div className="card m-5">
                    <img
                        src="https://i.pinimg.com/736x/cd/2a/14/cd2a141349726e81c2ad2a7e10f234e8.jpg"
                        className="card-img-top"
                        alt="Men Suit"
                        style={{ height: "230px" }} />

                    <div className="card-body text-center">
                        <h5 className="card-title">Kids's Suit</h5>
                        <p className="card-text">₹20,000</p>
                        <button className="btn btn-dark">ADD TO CART</button>
                    </div>
                </div>
            </div>

              <div className='crad-3'>
                <div className="card m-5">
                    <img
                        src="https://i.pinimg.com/1200x/c5/a1/9b/c5a19b1bc7853057ddad1566e5bcd0fc.jpg"
                        className="card-img-top"
                        alt="Men Suit"
                        style={{ height: "230px" }} />

                    <div className="card-body text-center">
                        <h5 className="card-title">Kids's Suit</h5>
                        <p className="card-text">₹20,000</p>
                        <button className="btn btn-dark">ADD TO CART</button>
                    </div>
                </div>
            </div>



        </>
    );
}

export default Kidscollection;