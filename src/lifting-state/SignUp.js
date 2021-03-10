import {Component} from "react";
import Password from "./Password";

class SignUp extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            password: "",
            confirmPassword : "" 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTwo = this.handleChangeTwo.bind(this);
    }

    handleChange(e)
    {
        
        this.setState({ password: e.currentTarget.value});
    }

    handleChangeTwo(e)
    {
        this.setState({confirmPassword: e.currentTarget.value});
    }

    isEqual()
    {
        const {password, confirmPassword} = this.state;   
        const {minimumLength} = this.props;
        return ((password === confirmPassword) && (password.length > minimumLength));
    }
    render() 
    {
        return (
        <div>
            <Password 
                label="Password" 
                onPasswordChange={this.handleChange} 
                success={this.isEqual()}
            />
            
            <Password 
                label="Confirm Password" 
                onPasswordChange={this.handleChangeTwo} 
                success={this.isEqual()}
            />
        </div>
        )   
    }
}

export default SignUp;

