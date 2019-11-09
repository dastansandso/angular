import React from 'react';
import Moment from 'react-moment';

const Experiences = (props) => {
      
    
    if(props.info.Endpoint==='present'){
        return(
    
            <div className="col-md-3 ">
                <div className="card  h-100 bg-transparent shadow-sm sidebar my-2 p-2">
                <h4>{props.info.companyName}</h4>
                <hr/>
                <h6>{props.info.Role}</h6>
                <p>(Since <Moment duration={props.info.Startpoint}
                    durationFromNow></Moment>)</p>
                <small className="text-capitalize">{props.info.Startpoint} - {props.info.Endpoint}</small>        
            </div>
            </div>
        ); 
    }else{
        return(
    
            <div className="col-md-3">
                <div className="card  h-100 bg-transparent shadow-sm sidebar my-2 p-2">
                <h4>{props.info.companyName}</h4>
                <hr/>
                <h6>{props.info.Role}</h6>
                <p>(For <Moment duration={props.info.Startpoint}
                    date={props.info.Endpoint}></Moment>)</p>
                <small className="text-capitalize">{props.info.Startpoint} - {props.info.Endpoint}</small>        
            </div>
            </div>
        ); 
                
    }
    // console.log(props.info[0].Endpoint);

}

export default Experiences;