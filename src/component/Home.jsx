import React from "react";
import "./home.css";

function Home() {
    return (
        <>
        <style>
            
        </style>
            <header className="navbar" >

                {/* LEFT - Logo */}
                <div className="logo">
                    <h2> BRAINSHART</h2>
                </div>

                {/* CENTER - Menu */}
                <div className="menu">

                    <div className="menu">
                        <button onClick={() => console.log("Men")}>Men's</button>
                        <button onClick={() => console.log("Women")}>Women's</button>
                        <button onClick={() => console.log("Kids")}>Kids Wear</button>
                    </div>

                </div>

                {/* RIGHT - Icons */}
                <div className="right">
                    <div className="cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="count">0</span>
                    </div>

                    <button className="nav-btn">
                        <i className="fa-solid fa-right-to-bracket"></i> Login
                    </button>

                    <button className="nav-btn">
                        <i className="fa-solid fa-circle-user"></i> Register
                    </button>
                </div>
            </header>
            <section className="body" >
                <div className="hero">
                    <h1>WELCOME TO BRAINSHART</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Hic perspiciatis, inventore maiores porro nam eaque.
                    </p>
                    <button className="shop-btn">SHOP NOW</button>
                </div>
            </section>
        </>

    );
}

export default Home;
