import React from 'react'

export const Footer = () => {

    const date = new Date();

  return (
    <footer>
        <p>Copyright {date.getFullYear()} | Furkan Soylu</p>
    </footer>
  )
}
