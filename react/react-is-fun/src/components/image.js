import React, { useState } from 'react'

export default function Image({ index, image, handleRemove }) {
    const [isHovered, setIsHovered] = useState(-1)
    
    return (
        <div className="w-1/3 my-1 flex justify-center" key={index}>
            <div className="relative">
                <i className={`fas fa-times absolute right-0 cursor-pointer ${isHovered === index ? "opacity-25" : "opacity-0"} hover:opacity-100`} onClick={() => handleRemove(index)} />
                <img src={image} width="auto" onMouseEnter={() => setIsHovered(index)} onMouseLeave={() => setIsHovered(-1)} alt={"Unsplash-image-" + { index }} />
            </div>
        </div>
    )
}