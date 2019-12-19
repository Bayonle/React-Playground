import React from 'react'

class InputAddon extends React.Component{
    render(){
        return (
        <div className="border-gray-300 bg-gray-300 flex items-center justify-center px-3">{this.props.children}</div>
        )
    }
}

export default InputAddon