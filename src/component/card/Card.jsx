import React from 'react'


export default function Card({element}) {
    return (
        <div className='movie'>
            <div>
                <p>{element.Year}</p>
            </div>
            <div>
                <img src={element.Poster} />
            </div>
            <div>
                <span>{element.Type}</span>
                <h3>{element.Title}</h3>
            </div>
        </div>

    )
}
