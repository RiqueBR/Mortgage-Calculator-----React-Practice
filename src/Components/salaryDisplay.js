import React from 'react';


class SalaryDisplay extends React.Component{
    constructor(props){
        super(props)
  
    }

    render(){
        return (
            <div className="affordability-display">
                    <br/>
                        <h4>Well Done! You can afford a property in the value of £{this.props.maxValue}</h4>
                    <br/>
            </div>
        )
    }
}

export default SalaryDisplay