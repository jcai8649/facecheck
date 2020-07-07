import React from 'react';
import './FaceChecker.css'

const FaceChecker = ({imageUrl, box}) => {
    return (
        <div className='center ma'>
            <div className="absolute mt2">
            <img id="inputImage" alt="" src={imageUrl} width='500px' height='auto'/>
            {
                (box.length > 0) &&
                    box.map((facebox,index) => {
                        return <div className="bounding-box" key= {index} style={{top: facebox.topRow, right: facebox.rightCol, left: facebox.leftCol, bottom: facebox.bottowRow}}></div>
                    })
            }
            </div>
        </div>
    )
}

export default FaceChecker