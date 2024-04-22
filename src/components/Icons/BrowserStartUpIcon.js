import React from 'react'

const BrowserStartUpIcon = ({isHovered}) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill={isHovered?"#439CFF":"#E5E7EA"}
      d="M8 18.98l-.708-.713 3.095-3.094H3v-1h7.386L7.293 11.08 8 10.365l4.308 4.308L8 18.981zm8-5.365l-4.308-4.307L16 5l.708.713-3.094 3.095H21v1h-7.386l3.094 3.094-.708.713z"
    ></path>
  </svg>
  )
}

export default BrowserStartUpIcon