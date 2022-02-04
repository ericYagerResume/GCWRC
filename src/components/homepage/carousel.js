import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

function Carousel(){
    return(
        <div className="flex flex-wrap justify-center">
            <div className="w-1/12 sm:w-4/12 px-1">
                <StaticImage src={"../../images/gatsby-astronaut.png"} className="shadow rounded-full max-w-full h-auto align-middle border-none" />
            </div>
        </div>
)}

export default Carousel