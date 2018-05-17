import React from 'react';


export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {items: []};

        fetch('http://localhost:8080/book') 
        .then(response => response.json())
        .then(response => {  
          this.setState({items:  response });
                });
    }

    render() {
                return (
                <div class="row">
                        {this.state.items.map(function(item, i){
                            return(
                    <div class="col-lg-4">
                    <div dangerouslySetInnerHTML={{__html: item.imageLink}}></div>
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    <p><a class="btn btn-default" href="http://bootstrapk.com/examples/carousel/#" role="button">View details</a></p>
                    </div>
                            );
                            } )}
                </div>
                    )
            }
}