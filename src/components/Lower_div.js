import { Button, Typography } from '@mui/material'
import React from 'react'
import lower_div from '../css/lower_div.css';
const Lower_div = () => {
    return (
        <>
            <div style={{display:"flex",height: "45px" , width:"655px",marginTop:"11px"}}>
                <img src="/Json/Discover_Lifelong.png" style={{height: "32px" , width:"32px" , marginTop:"7px",marginLeft:"8px"}} ></img>
                <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight: 600,fontSize: "30px",marginLeft:"6px"}}>
                Upcoming Classes </Typography>
            </div>
            <div style={{display:"flex",marginTop:"14px",height:"20px"}}>
                <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"normal",width:"41px",fontSize: "13px",marginLeft:"16px"}}>
                Today </Typography>   
                <hr style={{marginLeft:"7px",width:"579px",height:"0px",border:"1px solid #000000",marginTop:"12px"}} /> 
            </div>
            {/* rectangle 1 */}
            <div style={{display:"flex",width:"635px",height:"128px",marginLeft:"8px",marginTop:"8px",borderRadius:"21px",border:"1.5px solid #FAFAFA"}}>
                 <img src="/Json/courses1.png" style={{height: "111px" , width:"111px",marginLeft:"8px",marginTop:"8px",borderRadius:"13px"}}></img>
                 <div style={{width:"502px",height:"111px",marginLeft:"14px",marginTop:"8px"}}>
                    <div style={{display:"flex",alignItems:"center",height:"38px"}}>
                        <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"500",fontSize: "19.8px",width:"278px"}}>
                        Lorem ipsum sit amet </Typography> 
                        <div style={{marginLeft:"95px",height:"20px",width:"16px",}}>
                            <div className='clockbox' style={{display:"flex"}}>
                                <img src="/Json/Story_Time.png" style={{height: "18px" , width:"18px"}} ></img>
                                <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:700,fontSize: "12.9px"}}>
                                4:00-6:00 PM </Typography> 
                            </div>
                        </div>
                        
                    </div>
                    <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"400",fontSize: "10.9px",height:"53px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. Nec sed malesuada nulla pharetra hash. 
                    </Typography>
                     {/* <Button variant="contained" sx={{width:"108px",height:"25px",borderRadius:"5px",marginLeft:"370px",marginTop:"-2em"}}>join now</Button>  */}
                     <button type="button" class="btn btn-primary" 
                        style={{position:"absolute" , height:"25px",width: "85px" , fontWeight: 600 , fontSize: "13.9px", marginLeft:"393px",marginTop:"-1em",background: "#29A5FF",borderRadius: "5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            Join Now
                    </button>
                 </div>
            </div>

            {/* rectangle 2 */}
            <div style={{display:"flex",width:"635px",height:"128px",marginLeft:"8px",marginTop:"16px",borderRadius:"21px",border:"1.5px solid #FAFAFA"}}>
                 <img src="/Json/crop.png" style={{height: "111px" , width:"111px",marginLeft:"8px",marginTop:"8px",borderRadius:"13px"}}></img>
                 <div style={{width:"502px",height:"111px",marginLeft:"14px",marginTop:"8px"}}>
                    <div style={{display:"flex",alignItems:"center",height:"30px"}}>
                        <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"500",fontSize: "19.8px",width:"278px",height:"38px"}}>
                        Lorem ipsum sit amet </Typography> 
                        <div style={{marginLeft:"95px",height:"20px",width:"16px",}}>
                            <div className='clockbox' style={{display:"flex"}}>
                                <img src="/Json/Story_Time.png" style={{height: "18px" , width:"18px"}} ></img>
                                <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:700,fontSize: "12.9px"}}>
                                8:00-9:00 PM </Typography> 
                            </div>
                        </div>
                    </div>
                    <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"400",fontSize: "10.9px",height:"53px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. Nec sed malesuada nulla pharetra hash. 
                    </Typography>
                    
                     <button type="button" class="btn btn-primary" disabled
                        style={{position:"absolute" , height:"25px",width: "85px" , fontWeight: 600 , fontSize: "13.9px", marginLeft:"393px",marginTop:"-1em",background: "#29A5FF",borderRadius: "5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            Join Now
                    </button>
                 </div>
            </div>

            <div style={{display:"flex",marginTop:"29px",height:"20px"}}>
                <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"400",fontSize: "13px",marginLeft:"16px",width:"53"}}>
                16/09/21 </Typography>   
                <hr style={{marginLeft:"5px",width:"569px",height:"0px",border:"1px solid #000000"}} /> 
            </div>
            {/* rectangle 3*/}
            <div style={{display:"flex",width:"635px",height:"128px",marginLeft:"8px",marginTop:"18px",borderRadius:"21px",border:"1.5px solid #FAFAFA"}}>
                 <img src="/Json/courses1.png" style={{height: "111px" , width:"111px",marginLeft:"8px",marginTop:"8px",borderRadius:"13px"}}></img>
                 <div style={{width:"502px",height:"111px",marginLeft:"14px",marginTop:"8px"}}>
                    <div style={{display:"flex",alignItems:"center",height:"30px"}}>
                        <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"500",fontSize: "19.8px",width:"278px",height:"38px"}}>
                        Lorem ipsum sit amet </Typography> 
                        <div style={{marginLeft:"95px",height:"20px",width:"16px",}}>
                            <div className='clockbox' style={{display:"flex"}}>
                                <img src="/Json/Story_Time.png" style={{height: "18px" , width:"18px"}} ></img>
                                <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:700,fontSize: "12.9px"}}>
                                4:00-6:00 PM </Typography> 
                            </div>
                        </div>
                    </div>
                    <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"400",fontSize: "10.9px",height:"53px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. Nec sed malesuada nulla pharetra hash. 
                    </Typography>
                     {/* <Button variant="contained" sx={{width:"108px",height:"25px",borderRadius:"5px",marginLeft:"370px",marginTop:"-2em"}}>join now</Button>  */}
                     <button type="button" class="btn btn-primary" disabled
                        style={{position:"absolute" , height:"25px",width: "85px" , fontWeight: 600 , fontSize: "13.9px", marginLeft:"393px",marginTop:"-1em",background: "#29A5FF",borderRadius: "5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            Join Now
                    </button>
                 </div>
            </div>

            {/* rectangle 4 */}
            <div style={{display:"flex",width:"635px",height:"128px",marginLeft:"8px",marginTop:"25px",borderRadius:"21px",border:"1.5px solid #FAFAFA"}}>
                 <img src="/Json/crop.png" style={{height: "111px" , width:"111px",marginLeft:"8px",marginTop:"8px",borderRadius:"13px"}}></img>
                 <div style={{width:"502px",height:"111px",marginLeft:"14px",marginTop:"8px"}}>
                    <div style={{display:"flex",alignItems:"center",height:"30px"}}>
                        <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"500",fontSize: "19.8px",width:"278px",height:"38px"}}>
                        Lorem ipsum sit amet </Typography> 
                        <div style={{marginLeft:"95px",height:"20px",width:"16px",}}>
                            <div className='clockbox' style={{display:"flex"}}>
                                <img src="/Json/Story_Time.png" style={{height: "18px" , width:"18px"}} ></img>
                                <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:700,fontSize: "12.9px"}}>
                                8:00-9:00 PM </Typography> 
                            </div>
                        </div>
                    </div>
                    <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"400",fontSize: "10.9px",height:"53px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. Nec sed malesuada nulla pharetra hash. 
                    </Typography>
                    
                     <button type="button" class="btn btn-primary" disabled
                        style={{position:"absolute" , height:"25px",width: "85px" , fontWeight: 600 , fontSize: "13.9px", marginLeft:"393px",marginTop:"-1em",background: "#29A5FF",borderRadius: "5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            Join Now
                    </button>
                 </div>
            </div>
            
            {/* rectangle 5 */}
            <div style={{display:"flex",width:"635px",height:"128px",marginLeft:"8px",marginTop:"25px",borderRadius:"21px",border:"1.5px solid #FAFAFA"}}>
                 <img src="/Json/courses1.png" style={{height: "111px" , width:"111px",marginLeft:"8px",marginTop:"8px",borderRadius:"13px"}}></img>
                 
                 {/* <div className='imagebox' style={{height: "111px" , width:"111px",marginLeft:"8px",marginTop:"8px",borderRadius:"13px"}}></div> */}
                 <div style={{width:"502px",height:"111px",marginLeft:"14px",marginTop:"8px"}}>
                    <div style={{display:"flex",alignItems:"center",height:"30px"}}>
                        <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"500",fontSize: "19.8px",width:"278px",height:"38px"}}>
                        Lorem ipsum sit amet </Typography> 
                        <div style={{marginLeft:"95px",height:"20px",width:"16px",}}>
                            <div className='clockbox' style={{display:"flex"}}>
                                <img src="/Json/Story_Time.png" style={{height: "18px" , width:"18px"}} ></img>
                                <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:700,fontSize: "12.9px"}}>
                                4:00-6:00 PM </Typography> 
                            </div>
                        </div>
                    </div>
                    <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"400",fontSize: "10.9px",height:"53px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. Nec sed malesuada nulla pharetra hash. 
                    </Typography>
                     {/* <Button variant="contained" sx={{width:"108px",height:"25px",borderRadius:"5px",marginLeft:"370px",marginTop:"-2em"}}>join now</Button>  */}
                     <button type="button" class="btn btn-primary" disabled
                        style={{position:"absolute" , height:"25px",width: "85px" , fontWeight: 600 , fontSize: "13.9px", marginLeft:"393px",marginTop:"-1em",background: "#29A5FF",borderRadius: "5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            Join Now
                    </button>
                 </div>
            </div>

            {/* rectangle 6 */}
            <div style={{display:"flex",width:"635px",height:"128px",marginLeft:"8px",marginTop:"25px",marginRight:"13px",borderRadius:"21px",border:"1.5px solid #FAFAFA"}}>
                 <img src="/Json/crop.png" style={{height: "111px" , width:"111px",marginLeft:"8px",marginTop:"8px",borderRadius:"13px"}}></img>
                 <div style={{width:"502px",height:"111px",marginLeft:"14px",marginTop:"8px"}}>
                    <div style={{display:"flex",alignItems:"center",height:"30px"}}>
                        <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"500",fontSize: "19.8px",width:"278px",height:"38px"}}>
                        Lorem ipsum sit amet </Typography> 
                        <div style={{marginLeft:"95px",height:"20px",width:"16px",}}>
                            <div className='clockbox' style={{display:"flex"}}>
                                <img src="/Json/Story_Time.png" style={{height: "18px" , width:"18px"}} ></img>
                                <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:700,fontSize: "12.9px"}}>
                                8:00-9:00 PM </Typography> 
                            </div>
                        </div>
                    </div>
                    <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"400",fontSize: "10.9px",height:"53px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. Nec sed malesuada nulla pharetra hash. 
                    </Typography>
                    
                     <button type="button" class="btn btn-primary" disabled
                        style={{position:"absolute" , height:"25px",width: "85px" , fontWeight: 600 , fontSize: "13.9px", marginLeft:"393px",marginTop:"-1em",background: "#29A5FF",borderRadius: "5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            Join Now
                    </button>
                 </div>
            </div>

        </>
    )
}

export default Lower_div
