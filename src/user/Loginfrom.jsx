import React from 'react';


function Login  ()  {


    return (

        <React.Fragment>
            
            <style>
{`
  .p-4 {
    background-color: #F3A847;
    text-align: center;
     height:350px;
    width:465px;
    text-allin:center;
    gap:100px
    margin-left: "80px"
    
    
  }
`}
</style>
             
  

            <section className='p-4' style={{marginLeft:"430px",marginTop:"89px"}}>

                <div className='contener'>
                    <div className='col-md-5 m-0 '>
                          <p className='h4' style={{fontSize:"35px",color:"#ffffff", width:"420px", padding:"10px", background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",}}>Login</p> <div className='crad-header '>
                         

                        </div>
                        <div className='crad-body card-body d-flex flex-column gap-3' style={{fontSize:"17px",marginBottom:"20px", width:"420px",marginTop:"20px"}}>
                            
                            <input type="email"placeholder="Email" />
                            <input type="password"placeholder="password" />
                           
                             <div className='crad-body' style={{fontSize:"20px",color:"red",marginLeft:"25x"}}>
                            <button style={{backgroundColor:"#131921",color:"#F3A847"}}>Login</button>

                        </div>
                      <div
  style={{
    background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
    padding: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",  
    paddingBottom:"6px",
    paddingTop:"6px",
    position:"relative",
    marginRight:"-21px",
    marginLeft:"-24px",
    marginTop:"46px"
    

  
    
    
  }}
>
  <div
    style={{
      border: "2px solid #ffffff",
      padding: "8px 20px",
      color: "#ffffff",
      fontWeight: "700",
      letterSpacing: "2px",
      fontSize: "20px"
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
export default Login;