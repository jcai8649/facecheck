import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className= 'f3'>
                {'Facecheck will check for faces in your pictures. Give it a try'}
            </p>
            <div className='center'>
                <div className=' center form pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link br2 b--solid b--white bg-light-purple white' onClick={onButtonSubmit}>check</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;