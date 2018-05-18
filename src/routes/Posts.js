import React from 'react';

export default class Posts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            price:'',
            imageLink:''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
    }

    onClickButton(event){
        fetch('http://localhost:8080/product', {
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
    
    handleNameChange(event) {
        this.setState({
        name: event.target.value,
        price: this.state.price,
        imageLink: this.state.imageLink
        });
      }
    handlePriceChange(event) {
        this.setState({
        name: this.state.name,
        price: event.target.value,
        imageLink: this.state.imageLink
        });
    }
    handleImageChange(event) {
        this.setState({
        name: this.state.name,
        price: this.state.price,
        imageLink: event.target.value
        });
    }

    render() {
        return (
                <div>
                 <form>
                    <div class="form-group">
                    <label for="exampleInputEmail1">Product Name</label>
                    <input 
                        name="name" type="text" class="form-control"
                        placeholder="Product Name" value={this.state.name} onChange={this.handleNameChange}/>
                    </div>
                    <div class="form-group">
                    <label for="exampleInputPassword1">Price</label>
                    <input 
                        name="price" type="number" class="form-control"
                        placeholder="Price" value={this.state.price} onChange={this.handlePriceChange}/>
                    </div>
                    <div class="form-group">
                    <label for="exampleInputPassword1">Image Link</label>
                    <input  
                        name="imageLink" type="text" class="form-control" 
                        placeholder="Image Link" value={this.state.imageLink} onChange={this.handleImageChange}/>
                    </div>
                    <div>
                    <button type="submit" class="btn btn-primary" onClick={this.onClickButton}>Submit</button>
                    </div>
                </form> 
                </div>
            )
        }
}