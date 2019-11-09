import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Experiences from './experience';

const Highlight = (props) => {

const ExperiencesInfo =[
    {
        companyName:'Viztar Infotech(Internation)',
        Startpoint:'Aug 2018',
        Endpoint:'present',
        Role:'Senior UI/UX Developer',
    },
    {
        companyName:'Bindura Digital Pvt. Ltd',
        Startpoint:'sep 2017',
        Endpoint:'jul 2018',
        Role:'Sr. Ex. Web Developer',
    },
    {
        companyName:'Digillence Rolson  LLP',
        Startpoint:'mar 2016',
        Endpoint:'sept 2017',
        Role:'Senior Web Developer',
    },
    {
        companyName:'TechMerch Innovations Pvt Ltd',
        Startpoint:'jun 2013',
        Endpoint:'feb 2016',
        Role:'Web Developer & Quality Analyst',
    }
]

    return (
        <div className="">
            <div className="card bg-transparent shadow-sm sidebar  my-2 p-2">
                <p className="d-flex justify-content-between align-items-center">
                    <span className=" display-4 logo ">{props.aboutinfo[0].username} </span>
                    <span className="h3  ">{props.aboutinfo[0].role}</span>
                </p>
            </div>
            <div className="card bg-tra bg-transparent shadow-sm sidebar my-2 p-2 py-3">
                <div className="row no-gutters d-flex justify-content-between align-items-start">

                    <div className="col-4">
                        <strong>Email Id</strong> : {props.aboutinfo[0].emailId}
                    </div>
                    <div className="col-4">
                        <strong>Contact Number</strong> : {props.aboutinfo[0].contactnumber}
                    </div>
                    <div className="col-4">
                        <strong>Location</strong> : {props.aboutinfo[0].Address}
                    </div>
                </div>
            </div>
            <div className="card bg-tra bg-transparent shadow-sm sidebar my-2 p-2 py-3">

                <div className="row  d-flex justify-content-between align-items-start text-center">
                    <div className="col-md-2 col-6">
                        <CircularProgressbar value={props.skellset[0].myskills[0].Wordpress} text={props.skellset[0].myskills[0].Wordpress}  />
                        <p>Wordpress</p>
                    </div>
                    <div className="col-md-2 col-6">

                        <CircularProgressbar value={props.skellset[0].myskills[0].HTML5} text={props.skellset[0].myskills[0].HTML5} />
                        <p>HTML5 & CSS3</p>
                    </div>
                    <div className="col-md-2 col-6">

                        <CircularProgressbar value={props.skellset[0].myskills[0].jQuery} text={props.skellset[0].myskills[0].jQuery} />
                        <p>jQuery</p>

                    </div>
                    <div className="col-md-2 col-6">

                        <CircularProgressbar value={props.skellset[0].myskills[0].Ionic} text={props.skellset[0].myskills[0].Ionic} />
                        <p>Ionic</p>

                    </div>
                    <div className="col-md-2 col-6">

                        <CircularProgressbar value={props.skellset[0].myskills[0].Angular} text={props.skellset[0].myskills[0].Angular} />
                        <p>Angular</p>

                    </div>
                    <div className="col-md-2 col-6">
                        <CircularProgressbar value={props.skellset[0].myskills[0].React} text={props.skellset[0].myskills[0].React} />
                        <p>React</p>
                    </div>
                </div>
            </div>


            
                <div className="row row-eq-height ">
                    <Experiences info={ExperiencesInfo[0]}/>
                    <Experiences info={ExperiencesInfo[1]}/>
                    <Experiences info={ExperiencesInfo[2]}/>
                    <Experiences info={ExperiencesInfo[3]}/>
                </div>
        </div>
    );

}

export default Highlight;