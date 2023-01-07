import React from 'react';

const ProjectCard = (props) => {
  return (
    <div className='container p-2'>
        <div className="card">
            <div className="row card-body">
                <img className="col-sm-5" src={props.imgURL} alt="projectImg"></img>
                <div className="col-sm-7">
                    <h5 className="card-title card-header">{props.title}</h5>
                    <p className="card-text text-start">{props.desc}</p>
                </div>
            </div>
            <div className="card-footer text-center text-muted">{props.duration}</div>
        </div>
    </div>
  )
};
export default ProjectCard;
