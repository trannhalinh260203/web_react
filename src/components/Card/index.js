import ".\card.css"
import React from 'react'

const index = ({className, title,childen}) => {
  return (
    <div className={`card${className}`}>
      <div> [title]</div>
      <div>[children]</div>
    </div>
  )
}

export default index
