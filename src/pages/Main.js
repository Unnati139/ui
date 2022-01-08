import { SportsRugbySharp } from '@mui/icons-material'
import { Button, Paper, Typography } from '@mui/material'
import React from 'react'
import Left_part from '../components/Left_part'
import Right_part from '../components/Right_part'

const Main = () => {
    return (
        <>        
            <div  style={{display:"flex"}}>
                <div>
                    <div style={{display:"flex",marginTop:"54.32px"}}>
                    <Left_part />
                    <div>
                        <Right_part /> 
                        <div>
                        <img src="/Json/Group_63.png" style={{height: "31px" , width:"31px" ,marginLeft:"20px",marginTop:"17px" }}></img>
                        </div> 
                    </div>
                    
                    </div>
                </div>
                <img src="/Json/Group_61.png" style={{height: "135.9px" , width:"67.94px" ,marginLeft:"19px" }}></img>
            </div>
            
            
        </>
    )
}

export default Main
