import React from 'react'

class InputGroup extends React.Component{
    render(){
        return (
            <div className="flex items-stretch">
                {this.props.children}
            </div>
        )
    }
}

export default InputGroup