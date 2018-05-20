import React from 'react';
import {Redirect} from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [], 
            name:'',
            email:'',
            redirect: false,
        };

        fetch('http://localhost:8080/product') 
        .then(response => response.json())
        .then(response => {  
          this.setState({items:  response });
                });
    }

    componentDidMount() {
        let Data = null;
        Data = JSON.parse(sessionStorage.getItem('userData'));
        console.log(Data);
        if(Data !== null){
            this.setState({name: Data.name})
            this.setState({email: Data.email})
        } else{
            this.setState({name: "guest"})
        }
   }   

    handleClick (name){
        alert(this.state.name);
        fetch('http://localhost:8080/product/addLike', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body:"user=" + this.state.email + "&product=" + name
            }).then((res) => res.json()) 
            .then((data) =>  console.log(data))
    }

    render() {
                return (
                <div>
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner" role="listbox">
                            <div class="item active">
                            <div class="container">
                                <div class="carousel-caption">
                                <h1>Hello, {this.state.name}</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p><a class="btn btn-lg btn-primary" role="button">Learn more</a></p>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                <div class="container marketing"> 
                    <div class="row">
                            {this.state.items.map(function(item, i){
                                return(
                                    <div class="col-lg-4">
                                    <div dangerouslySetInnerHTML={{__html: item.imageLink}}></div>
                                    <h2>{item.name}</h2>
                                    <p>{item.price}</p>
                                    <p><a class="btn btn-default" role="button" value={item.name} onClick={() => this.handleClick(item.name)}>Like</a></p>
                                    </div>
                                );
                                },this )}
                    </div>
                </div>
            </div>
                    )
            }
}