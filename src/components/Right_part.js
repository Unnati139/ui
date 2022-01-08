import { Rating, Typography } from '@mui/material';
import { color } from '@mui/system'
import React from 'react'
import right_part from '../css/right_part.css';

const Right_part = () => {
    return (
        <>
         {/* <img src="/Json/Group_61.png" style={{height: "135.9px" , width:"67.94px" ,marginLeft:"1246.08px" }}></img>  */}
            <div  style={{height:"904px",width:"397px",marginLeft:"20px"}}>
                <div className='upperdiv' >
                    <div style={{display:"flex",width:"397px",height:"130px"}}>
                        <div style={{width:"208px"}}>
                            <img src="/Json/image_2.png" style={{height: "85px" , width:"85px" , marginTop:"28px",marginLeft:"29px"}} ></img>
                        </div>
                        <div style={{width:"189px"}}>
                            <Typography 
                                style={{width:"164px",height:"30px",fontFamily:"Poppins",fontStyle:"normal",fontWeight:600,fontSize:"18px",color: "#FFFFFF",marginLeft:"4px",marginTop:"26px"}}>
                                Any Any Doubts?
                            </Typography>
                            <div 
                                style={{color:"#fff",
                                    width:"160px",
                                    height:"13px",
                                    fontFamily:"Poppins",
                                    fontStyle:"normal",
                                    fontWeight:"normal",
                                    fontSize:"12px",
                                    }}>
                                <ul>
                                    <li >Talk to our mentors</li>
                                    <li style={{marginTop:"8px"}}>Get expert Guidence</li>
                                    <li  style={{marginTop:"8px"}}>Talk to our mentors</li>
                                </ul>    
                            </div>
                        </div>
                    </div>
                    <div 
                        style={{
                            width:"377px",
                            height:"30px",
                            marginLeft:"10px",
                            border:"1px solid #FFFFFF",
                            // filter: "drop-shadow("0px 5px 9px rgba(0, 0, 0, 0.14))",
                            borderRadius:"3px"}}>
                        <Typography
                            style={{
                                height:"24px",
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: 500,
                                fontSize: "16px",
                                color: "#FFFFFF",
                                marginTop:"3px"}} align='center'>
                            Book Your Free Mentorship Session Now!
                        </Typography>
                    </div>
                </div>

                {/* lower part */}
                <div className='lowerdiv'>

                    <div style={{marginLeft:"11px",marginTop:"8px",display:"flex",height: "38px"}}>
                        <img  alt='course' src="/Json/college_college.png" style={{height: "35px" , width:"19px" ,marginTop:"2px"}}></img>
                        <div>
                            <div className='course' > My Courses</div>
                        </div>   
                    </div>
                    
                    {/* rectangle 1 */}
                    <div style={{width:"109.02px",height:"109.14px",display:"flex",marginTop:"8.15px"}}>
                        <img  alt='course' src="/Json/corses4.png" style={{height: "109.14px" , width:"194.02px",marginLeft:"11px"}}></img>
                        <div style={{height: "109.14px" , width:"194.02px",marginLeft:"9.98px"}}>
                            <Typography 
                                style={{width:"166px",height: "28px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"17.8px",fontWeight:500,display:"flex",justifyContent:"center",alignItems:"center"}}>
                                Lorem ipsum sit a
                            </Typography>

                            <Typography 
                                style={{color:"#666666",width:"171px",height: "33px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"9.9px",fontWeight:400,display:"flex",justifyContent:"center",alignItems:"center",marginTop:"3px"}}>
                                 Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,
                            </Typography>

                            <div style={{marginTop:"18.05px"}}>
                            <Rating name="size-medium" defaultValue={5} style={{color:"#FCEE21"}} />
                            </div>
                        </div>
                    </div>

                    {/* rectangle 2 */}
                    <div style={{width:"109.02px",height:"109.14px",display:"flex",marginTop:"27.99px"}}>
                        <img  alt='course' src="/Json/courses5.png" style={{height: "109.14px" , width:"194.02px",marginLeft:"11px"}}></img>
                        <div style={{height: "109.14px" , width:"194.02px",marginLeft:"9.98px"}}>
                            <Typography 
                                style={{width:"166px",height: "28px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"17.8px",fontWeight:500,display:"flex",justifyContent:"center",alignItems:"center"}}>
                                Lorem ipsum sit a
                            </Typography>

                            <Typography 
                                style={{color:"#666666",width:"171px",height: "33px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"9.9px",fontWeight:400,display:"flex",justifyContent:"center",alignItems:"center",marginTop:"3px"}}>
                                 Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,
                            </Typography>

                            <div style={{marginTop:"18.05px"}}>
                            <Rating name="size-medium" defaultValue={5} style={{color:"#FCEE21"}} />
                            </div>
                        </div>
                    </div>

                    {/* rectangle 3 */}
                    <div style={{width:"109.02px",height:"109.14px",display:"flex",marginTop:"27px"}}>
                        <img  alt='course' src="/Json/EDTCH9_Mimage16.png" style={{height: "109.14px" , width:"194.02px",marginLeft:"11px"}}></img>
                        <div style={{height: "109.14px" , width:"194.02px",marginLeft:"9.98px"}}>
                            <Typography 
                                style={{width:"166px",height: "28px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"17.8px",fontWeight:500,display:"flex",justifyContent:"center",alignItems:"center"}}>
                                Lorem ipsum sit a
                            </Typography>

                            <Typography 
                                style={{color:"#666666",width:"171px",height: "33px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"9.9px",fontWeight:400,display:"flex",justifyContent:"center",alignItems:"center",marginTop:"3px"}}>
                                 Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,
                            </Typography>

                            <div style={{marginTop:"18.05px"}}>
                            <Rating name="size-medium" defaultValue={5} style={{color:"#FCEE21"}} />
                            </div>
                        </div>
                    </div>

                    {/* rectangle 4 */}
                    <div style={{width:"109.02px",height:"108px",display:"flex",marginTop:"30px"}}>
                        <img  alt='course' src="/Json/Rectangle_24.png" style={{height: "109.14px" , width:"194.02px",marginLeft:"11px"}}></img>
                        <div style={{height: "109.14px" , width:"194.02px",marginLeft:"9.98px"}}>
                            <Typography 
                                style={{width:"166px",height: "28px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"17.8px",fontWeight:500,display:"flex",justifyContent:"center",alignItems:"center"}}>
                                Lorem ipsum sit a
                            </Typography>

                            <Typography 
                                style={{color:"#666666",width:"171px",height: "33px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"9.9px",fontWeight:400,display:"flex",justifyContent:"center",alignItems:"center",marginTop:"3px"}}>
                                 Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,
                            </Typography>

                            <div style={{marginTop:"18.05px"}}>
                            <Rating name="size-medium" defaultValue={5} style={{color:"#FCEE21"}} />
                            </div>
                        </div>
                    </div>

                    {/* rectangle 5 */}
                    <div style={{width:"109.02px",height:"109.14px",display:"flex",marginTop:"31px"}}>
                        <img  alt='course' src="/Json/Rectangle_20.png" style={{height: "109.14px" , width:"194.02px",marginLeft:"11px"}}></img>
                        <div style={{height: "109.14px" , width:"194.02px",marginLeft:"9.98px"}}>
                            <Typography 
                                style={{width:"166px",height: "28px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"17.8px",fontWeight:500,display:"flex",justifyContent:"center",alignItems:"center"}}>
                                Lorem ipsum sit a
                            </Typography>

                            <Typography 
                                style={{color:"#666666",width:"171px",height: "33px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"9.9px",fontWeight:400,display:"flex",justifyContent:"center",alignItems:"center",marginTop:"3px"}}>
                                 Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,
                            </Typography>

                            <div style={{marginTop:"18.05px"}}>
                            <Rating name="size-medium" defaultValue={5} style={{color:"#FCEE21"}} />
                            </div>
                        </div>
                    </div>

                </div>

            </div> 
            
        </>
        
    )
}

export default Right_part;
