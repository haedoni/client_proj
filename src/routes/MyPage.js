import React from 'react';

export default class MyPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        };

        fetch('http://localhost:8080/likedProduct') 
        .then(response => response.json())
        .then(response => {  
          this.setState({items:  response });
                });
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