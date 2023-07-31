import React from 'react'

type containerStyle = {
    style:React.CSSProperties
}
const Container = (props:containerStyle) => {
  return (
    <div style={props.style} >
        <p>This is a styled container</p>
    </div>
  )
}

export default Container