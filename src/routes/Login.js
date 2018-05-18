import React from 'react';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            userid:'',
            password:''
        };

        this.handleIDChange = this.handleIDChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
    }

    onClickButton(event){
        fetch('http://localhost:8080/member/' + this.state.userid + '/' + this.state.password) 
        .then(response => response.json())
        .then(response => {  
          this.setState({items:  response });
                });
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
                    <div>
                    <button type="submit" class="btn btn-primary" onClick={this.onClickButton}>Submit</button>
                    </div>
                </form> 
                </div>
            )
        }
}