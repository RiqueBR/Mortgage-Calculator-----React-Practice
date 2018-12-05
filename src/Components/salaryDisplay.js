import React from 'react';

class SalaryDisplay extends React.Component{
    constructor(props){
        super(props)
  
    }

    render(){
        return (
            <div className="affordability-display">
               <p>Well Done, you can afford a property of: {this.props.maxValue}</p>
            </div>
        )
    }
}

export default SalaryDisplay