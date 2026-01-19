import React from 'react';
import "../component/home.css";

function Mencollection() {
    return (
        <>
        <style>
            
            
        </style>    

            <div className="Home">

                {/* HEADER */}
                <header className="navbar">
                    <h2>BRAINSHART</h2>

                    <nav>
                        <button onClick={() => console.log("Men")}>Men's</button>
                        <button onClick={() => console.log("Women")}>Women's</button>
                        <button onClick={() => console.log("Kids")}>Kids Wear</button>
                    </nav>

                    <div className="right">
                        <i className="fa-solid fa-cart-arrow-down"></i>

                        <span>
                            <i className="fa-solid fa-right-to-bracket"></i> Login
                        </span>

                        <span>
                            <i className="fa-solid fa-circle-user"></i> Register
                        </span>
                    </div>
                </header>

                {/* SECTION */}
                <section className="product">
                    <h2 style={{ width: '100%', marginTop: '80px' }}>
                        Men's Collection
                    </h2>
                </section>

                {/* CARD */}
                <div className="col-md-4">
                    <div className="card border-0 shadow-sm h-100">
                        <img
                            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                            className="card-img-top"
                            alt="Mountains"
                        />

                        <div className="card-body">
                            <h5 className="card-title">Mountain Retreat</h5>
                            <p className="card-text text-muted">
                                Peaceful trekking trails.
                            </p>

                            <h5>THIS PACKAGE ONLY $3000</h5>
                            <button className="btn btn-danger">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Mencollection;
