import React from 'react'

interface types{
    className ? : string;
    children ? : React.ReactNode; 
}


const Button : React.FC<types> = ({className, children }: types) => {
  return (
    <div>
        <button className={`${className}`}>{children}</button>
    </div>
  )
}

export default Button