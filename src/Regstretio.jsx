import React from 'react';
import Navbar from "./component/Navbar";

function Registration() {


  return (

    <React.Fragment>

      <style>
        {`
  .p-4 {
    background-color: #F3A847;
    text-align: center;
     height:400px;
    width:470px;
    text-allin:center;
    gap:1px
    margin-left: "80px"
    
  }
`}
      </style>



      <section className='p-4' style={{ marginLeft: "400px", marginTop: "115px" }}>

        <div className='contener'>
          <div className='col-md-5 m-0 ' style={{ paddingTop: "10px", paddingRight: "300px", }}>
            <p className='h4' style={{
              fontSize: "30px", background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
              width: "420px",
              paddingBottom: "6px",
              position: "relative",
              right: "0px",
              color: "#cda97a",
             

            }}>Regstretion</p> <div className='crad-header '>


            </div>
            <div className='crad-body card-body d-flex flex-column gap-3' style={{ fontSize: "15px", marginBottom: "20px", width: "420px", marginTop: "20px" }}>
              <input type="name" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="password" />
              <input type="password" placeholder="confrom password" />
              <div className='crad-body' style={{ fontSize: "20px", color: "red", marginLeft: "25x" }}>
                <button style={{ backgroundColor: "#131921", color: "#cda97a" }}>Registre</button>

              </div>
              <div
                style={{
                  background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",

                  padding: "0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: "6px",
                  position: "relative",
                  right: "0px",
                  marginTop: "19px",
                  right: "0",
                  marginLeft: "-24px",
                  marginRight: "-26px",





                }}
              >
                <div
                  style={{
                    border: "2px solid #ffffff",
                    padding: "8px 20px",
                    color: "#ffffff",
                    fontWeight: "700",
                    letterSpacing: "2px",
                    fontSize: "20px",
                    marginTop: "7px",

                  }}
                >
                  BRAINSKART
                </div>
              </div>

            </div>



          </div>

        </div>
      </section>

    </React.Fragment >

  )
};
export default Registration;