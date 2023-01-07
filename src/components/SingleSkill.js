import React from 'react';

const SingleSkill = (props) => {
    const percentage = "width:"+props.rating*10+"%";
  return (
    <div className='container'>
            <div className='row justify-content-between'>
                <p className='col-6 fw-bold text-secondary'>{props.name}</p>
                <p className='col-6 fw-bold text-end text-secondary'>{props.rating}</p>
            </div>
                <div className="progress">
                    <div className="progress-bar bg-warning progress-bar-striped" role="progressbar" Style={percentage} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>   
                <br />
        </div>
  )
}
export default SingleSkill;
