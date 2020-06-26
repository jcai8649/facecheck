import React from 'react';

const FaceChecker = ({imageUrl}) => {
    return (
        <div className='center'>
            <img alt="" src={imageUrl}/>
        </div>
    )
}

export default FaceChecker