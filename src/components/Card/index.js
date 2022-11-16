import React from "react";
import './styles.css'
export function Card({children}){
    return(
        <div className="card"> 
            {children}
        </div>
    )

}
export function CardImage({ src }) {
    return(
        <img src={src} alt='Imagem do Produto' className="card=image" />
    )
}

export function CardTitle ({children}){
    return (
        <h1 className='card-title'>
            {children}
        </h1>
    )
}

export function CardActions ({children}){
    return (
        <div className='card-actions'>
            {children}
        </div>
    )
}