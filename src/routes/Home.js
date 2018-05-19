import React from 'react';
import {Redirect} from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [], 
            name:'',
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
            this.setState({name: Data.userData.name})
        } else{
            this.setState({name: "guest"})
        }
   }   

    nameLiked(itemName){
        fetch('http://localhost:8080/product/addLike', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body:"user=" + this.state.name + "&param2=" + itemName
            }).then((res) => res.json()) 
            .then((data) =>  console.log(data))
    }

    // onClickButton(event){
    //     fetch('http://localhost:8080/product/addLike', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded'
    //             },
    //             body:"user=" + value1&param2=value2"
    //         }).then((res) => res.json()) 
    //         .then((data) =>  console.log(data))
    // }

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
                                    <p><a class="btn btn-default" role="button" value={item.name} onClick={() => this.nameLiked(item.name)}>Like</a></p>
                                    </div>
                                );
                                } )}
                    </div>
                </div>
            </div>
                    )
            }
}