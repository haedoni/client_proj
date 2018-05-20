import React from 'react';

export default class MyPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            name:'',
            email:'',
        };

        let Data = null;
        Data = JSON.parse(sessionStorage.getItem('userData'));
        console.log(Data);
        if(Data !== null){
            alert(Data.email);
            this.setState({name: Data.name})
            this.setState({email: Data.email})

            fetch('http://192.168.35.187:8080/likedProduct', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:"user=" + Data.email
            }) 
            .then(response => response.json())
            .then(response => {  
                this.setState({items: response });
                });
        } else{ 
            this.setState({name: "guest"})
            this.setState({email: "guest"})
        }

    }

    render() {
        return (
            <div>
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                        <div class="container">
                            <div class="carousel-caption">
                            <h1>{this.state.name}</h1>
                            {/* <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            <p><a class="btn btn-lg btn-primary" role="button">Learn more</a></p> */}
                            
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
                                </div>
                            );
                            },this)}
                </div>
            </div>
        </div>
                )
        }
}