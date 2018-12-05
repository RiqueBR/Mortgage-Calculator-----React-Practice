import React from 'react'
import SalaryForm from '../Components/salaryForm';
import SalaryDisplay from '../Components/salaryDisplay';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

class SalaryWrapper extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            maxValue: 0
        }

        this.handleSalarySubmitted = this.handleSalarySubmitted.bind(this);
    }

    mortgageCalculation(salary1, salary2) {
        let combinedSalary = parseInt(salary1) + parseInt(salary2);
        return combinedSalary * 3;
    }

    handleSalarySubmitted(submittedSalary){
        let maxValue = this.mortgageCalculation(submittedSalary.salary1, submittedSalary.salary2);
        this.setState({maxValue: maxValue})
    }

    render(){
        return(
           <Grid
           container
           direction = "column"
           justify = "center"
           alignItems = "center">
            <Typography variant = 'display1'
            align = 'center'
            gutterBottom>{this.props.title}</Typography>
            <SalaryForm onSalarySubmit={this.handleSalarySubmitted}/>
            <SalaryDisplay maxValue={this.state.maxValue}/>
            </Grid>
        )
    }
}

export default SalaryWrapper