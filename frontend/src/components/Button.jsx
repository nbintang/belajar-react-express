import React from 'react'

export const ButtonUI = ({ className, children }) => {
  return (
    <button className={`btn ${className}`}>{children}</button>
  )
}
