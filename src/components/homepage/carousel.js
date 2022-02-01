import React from 'react'
import homepageImage from '../../images/homepageImage.jpg'

function Carousel(){
    return(
        <div class="flex flex-wrap justify-center">
            <div className="w-1/12 sm:w-4/12 px-1">
                <img src={homepageImage} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
            </div>
        </div>
    )
}

export default Carousel