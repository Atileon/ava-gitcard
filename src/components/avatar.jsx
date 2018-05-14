import React from 'react';

const Avatar = props => (
            <div className='avatar-container'>
                <img src={props.avatar} alt="avatar" className="avatar-img"/>
            </div>
        );


export default Avatar;