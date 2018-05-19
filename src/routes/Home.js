import React from 'react';


export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {items: [], like:0};

        fetch('http://localhost:8080/product') 
        .then(response => response.json())
        .then(response => {  
          this.setState({items:  response });
                });
    }

    onClickButton(event){
        fetch('http://localhost:8080/product/addLike', {
                method: 'POST',
                // headers: {
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json'
                // },
                body:JSON.stringify(
                    this.state.like
                 )
            }).then((res) => res.json()) 
            .then((data) =>  console.log(data))
    }

    render() {
                return (
                <div>
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class=""></li>
                            <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="2" class=""></li>
                        </ol>
                        <div class="carousel-inner" role="listbox">
                            <div class="item">
                            {/* <img class="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide"> */}
                            <div class="container">
                                <div class="carousel-caption">
                                <h1>Example headline.</h1>
                                <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
                                <p><a class="btn btn-lg btn-primary" href="http://bootstrapk.com/examples/carousel/#" role="button">Sign up today</a></p>
                                </div>
                            </div>
                            </div>
                            <div class="item active">
                            {/* <img class="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide"> */}
                            <div class="container">
                                <div class="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p><a class="btn btn-lg btn-primary" href="http://bootstrapk.com/examples/carousel/#" role="button">Learn more</a></p>
                                </div>
                            </div>
                            </div>
                            <div class="item">
                            {/* <img class="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide"> */}
                            <div class="container">
                                <div class="carousel-caption">
                                <h1>One more for good measure.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p><a class="btn btn-lg btn-primary" href="http://bootstrapk.com/examples/carousel/#" role="button">Browse gallery</a></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <a class="left carousel-control" href="http://bootstrapk.com/examples/carousel/#myCarousel" role="button" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="http://bootstrapk.com/examples/carousel/#myCarousel" role="button" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                <div class="container marketing"> 
                    <div class="row">
                            {this.state.items.map(function(item, i){
                                return(
                                    <div class="col-lg-4">
                                    <div dangerouslySetInnerHTML={{__html: item.imageLink}}></div>
                                    <h2>{item.name}</h2>
                                    <p>{item.price}</p>
                                    <p><a class="btn btn-default" role="button" value={item.name} onClick={() => this.nameLiked(this.state.like)}>Like</a></p>
                                    </div>
                                );
                                } )}
                    </div>
                </div>
            </div>
                    )
            }
}