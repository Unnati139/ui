import React from 'react'
import { Button, Paper, Typography } from '@mui/material'
import left_part from '../css/left_part.css';
import Lower_div from './Lower_div';
const Left_part = () => {
    return (
        <>
        <img src="/Json/Group_62.png" style={{position:"absolute" , height: "60px" , width:"60px" , top:"383px" , left:"27px" , marginRight:"18px"}}></img>
        <img src="/Json/Group6.png" style={{position:"absolute" , height: "113.76px" , width:"56.88px" , top:"1379px" , left:"27px" , marginRight:"18px"}}></img>
                <div  style={{ borderRadius:"7px",height:"1327px",width:"655px",marginLeft:"105px"}}>
                    <div style={{height:"285px",width:"655px",background:"#fff",borderRadius:"7px",display:"flex",justifyContent:"center"}} >
                        <div style={{background:"#fff",height:"285px",width:"247px",borderTopLeftRadius:"7px",borderBottomLeftRadius:"7px"}}>
                            <img src="/Json/Group_55.png" style={{position:"absolute",height: "158px" , width:"158px" , marginTop:"26px" ,marginLeft:"32px" }}></img>
                            <img src="/Json/Rectangle_35.png" style={{position:"relative",height: "138px" , width:"136px" , marginTop:"37px",marginLeft:"42px" }}></img>
                            <div  style={{display:"flex",height:"16px",marginTop:"34px"}}>
                                <img alt='twitter' src="/Json/Twitter_Squared.png" style={{height:"16px",width:"16px",marginLeft:"70px"}} ></img>
                                <img alt='facebook' src="/Json/Facebook_logo.png" style={{height:"16px",width:"16px",marginLeft:"17px"}} ></img>
                                <img alt='instagram' src="/Json/Instagram _logo.png" style={{height:"16px",width:"16px",marginLeft:"18px"}} ></img>
                                
                            </div>
                        </div>
                        <div style={{background:"#fff",height:"285px",width:"408px",borderTopRightRadius:"7px",borderBottomRightRadius:"7px"}}>
                            <div style={{background:"#fff",display:"flex",marginTop:5,height:"45px"}}>
                                <Typography 
                                style={{fontSize:"30px",fontFamily:"'Poppins', sans-serif",fontWeight:550,marginRight:75}} 
                                align='left'>
                                Remus Lupin
                                </Typography>
                                <button type="button" class="btn btn-outline-dark" 
                                    style={{position:"absolute" , height:"23.55px",width: "83px" , fontWeight: 400 , fontSize: "12px", marginLeft: "306px",top: "132px",border: "0.5px solid #000000",boxSizing: "border-box",borderRadius: "4px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    Edit Profile
                                </button>
                             </div>
                            <Typography 
                                style={{fontSize:"13px",fontFamily:"'Poppins', sans-serif",fontWeight:"normal"}}>
                                JEE Aspirant
                            </Typography>
                            <div className='flex_style' style={{marginTop:"2%"}}>
                                 <div className='smallbox'style={{width: "32.04px"}}> Jee</div> 
                                 <div className='smallbox'style={{marginLeft:"4em",width: "51.97px"}}> Calculus</div>
                                 <div className='smallbox'style={{marginLeft:"10.5em",width: "62.03px"}}> Mechanics</div> 
                                 <div className='smallbox'style={{marginLeft:"18em",width: "53.4px"}}> Organic</div> 
                                 <div className='smallbox'style={{marginLeft:"24.5em",width: "42px"}}> B.Tech</div> 
                                 <div className='smallbox'style={{marginLeft:"30em",width: "91px"}}> Thermodynamics</div>  
                                {/* <div  style={{position:"absolute",width:"32.04px",height: "20.65px",
                                border:"0.5px solid #4C4E73",borderRadius:"23px",textAlign:"center",fontSize:"9px"}}> Jee</div> */}
                            </div>
                            <div className='flex_style' style={{marginTop:"2em"}}>
                                 <div className='smallbox'style={{width: "51.97px"}}> Calculus</div>
                                 <div className='smallbox'style={{marginLeft:"6.5em",width: "62.03px"}}> Mechanics</div> 
                                 <div className='smallbox'style={{marginLeft:"14em",width: "30px"}}> CSE</div> 
                                 <div className='smallbox'style={{marginLeft:"18em",width: "53.4px"}}> Organic</div> 
                                 <div className='smallbox'style={{marginLeft:"24.5em",width: "32.04px"}}> Jee</div> 
                                 <div className='smallbox'style={{marginLeft:"29em",width: "42px"}}> B.Tech</div>  
                            </div>
                            <div className='flex_style' style={{marginTop:"3.5em"}}>
                                 <div className='smallbox'style={{width: "91px"}}> Thermodynamics</div>
                                 <div className='smallbox'style={{marginLeft:"11em",width: "42px"}}> B.Tech</div>
                                 <div className='smallbox'style={{marginLeft:"16.5em",width: "51.97px"}}> Calculus</div>
                                 <div className='smallbox'style={{marginLeft:"23em",width: "53.4px"}}> Organic</div>                                    
                            </div>
                            <div style={{marginTop:"25%"}}>
                            <hr style={{width:"389px",height:"0px",border:"1px solid #000000"}} />
                            </div> 
                            <div style={{width:"380px",height: "99px",fontFamily:"Poppins",fontSize:"12px",fontWeight:400,marginTop:"4%"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, turpis cras in pellentesque at blandit velit. Magna at lobortis lacus, ultricies in vel morbi adipiscing. Nibh purus a sollicitudin scelerisque. Integer eget dui orci, dis tellus
                            </div>
                            
                        </div>
                    </div>
                     <div style={{marginTop:"19px",width:"655px",height:"1032px",borderRadius:"7px",background:"#fff"}}>
                        <Lower_div />
                    </div> 
                    
               </div>
        </>
        
    )
}

export default Left_part;
