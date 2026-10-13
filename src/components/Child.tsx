import React, { memo } from 'react'

const Child = () => {
   console.log("me alos re render child")
  return (
    <div>Child</div>
  )
}

export default memo(Child)