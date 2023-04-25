import React from 'react'

const currentDate = new Date();
const currentYear = currentDate.getFullYear();


const Footer = () => {
  return (
<footer>
    <p>
        Copyright @ {currentYear}
    </p>
</footer>
  )
}

export default Footer