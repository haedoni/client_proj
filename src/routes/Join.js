import React from 'react';

export default class Join extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userid:'',
            password:'',
            name:'',
            email:''
        };

        this.handleIDChange = this.handleIDChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
    }

    onClickButton(event){
        fetch('http://localhost:8080/member', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(
                    this.state
                 )
            }).then((res) => res.json()) 
            .then((data) =>  console.log(data))
    }

    handleIDChange(event) {
        this.setState({
        userid: event.target.value,
        name: this.state.name,
        password: this.state.password,
        email: this.state.email
        });
    }
    handlePasswordChange(event) {
        this.setState({
        userid: this.state.userid,
        name: this.state.name,
        password: event.target.value,
        email: this.state.email
        });
    }
    handleNameChange(event) {
        this.setState({
        userid: this.state.userid,
        name: event.target.value,
        password: this.state.password,
        email: this.state.email
        });
    }
    
    handleEmailChange(event) {
        this.setState({
        userid: this.state.userid,
        name: this.state.name,
        password: this.state.password,
        email: event.target.value
        });
    }

    render() {
        return (
                <div>
                 <form>
                    <div class="form-group">
                    <label for="exampleInputEmail1">ID</label>
                    <input 
                        name="userid" type="text" class="form-control"
                        placeholder="ID" value={this.state.name} onChange={this.handleIDChange}/>
                    </div>
                    <div class="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input 
                        name="password" type="text" class="form-control"
                        placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </div>
                    <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input 
                        name="name" type="text" class="form-control"
                        placeholder="Name" value={this.state.name} onChange={this.handleNameChange}/>
                    </div>
                    <div class="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input  
                        name="email" type="text" class="form-control" 
                        placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
                    </div>
                    <div>
                    <button type="submit" class="btn btn-primary" onClick={this.onClickButton}>Submit</button>
                    </div>
                </form> 
                </div>
            )
        }
}