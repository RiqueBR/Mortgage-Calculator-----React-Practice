import React from 'react'
import { TextField, Button, Grid } from '@material-ui/core';

class SalaryForm extends React.Component{
    constructor(props){
        super(props)

          this.state = {
              salary1: 0,
              salary2: 0
          }
        this.handleSalary1Change = this.handleSalary1Change.bind(this)
        this.handleSalary2Change = this.handleSalary2Change.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSalary1Change(event){
        event.preventDefault();
        this.setState({salary1: event.target.value})
    }

    handleSalary2Change(event){
        event.preventDefault();
        this.setState({salary2: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        const salary1 = this.state.salary1;
        const salary2 = this.state.salary2;
        
        if(!salary1 || !salary2) return 
        this.props.onSalarySubmit({salary1: salary1, salary2: salary2})
    }



    render(){
        return(

            <form className="salary-form" onSubmit={this.handleSubmit}>
                <Grid
                container
                direction = "column"
                justify = "space-around"
                alignItems = "center">
                <TextField value={this.state.salary1}
                    name="title" 
                    label="Salary" 
                    margin="normal"
                    onChange={this.handleSalary1Change}/>
                <TextField 
                    value={this.state.salary2} 
                    name="title" 
                    label="Salary" 
                    onChange={this.handleSalary2Change}/>
                    
                <Button type="submit" 
                    value="Submit" 
                    color="primary" 
                    variant="contained">Submit</Button>
                </Grid>
            </form>
           
        )
    }

}

export default SalaryForm

