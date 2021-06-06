//feature 1
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import data from './data.json'
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';

class Home extends React.Component {
  constructor(){
    super();
    this.state={
      products: data.products,
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")): [], // cartItems persist during refreshing page
      size: "",
      sort: "",
    }
  }
  createOrder = (order) => {
    alert("Need to save order for " + order.name)
  }
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice(); //clone copy cartItems.
    this.setState({cartItems: cartItems.filter((x)=>x._id !== product._id),
     });
     localStorage.setItem(
     "cartItems", 
     JSON.stringify(cartItems.filter((x) => x._id !== product._id)) // cartItems persist during refreshing page
     );
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice(); //clone copy cartItems.
    let alreadyInCart = false;
    cartItems.forEach(item =>{
      if(item._id === product._id){
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart){
      cartItems.push({...product, count: 1})
    }
    this.setState({cartItems});
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // cartItems persist during refreshing page
  }

  sortProducts = (e)=> {
    console.log(e.target.value);
    const sort = e.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) =>(
        sort === "lowest"?
        ((a.price > b.price)? 1:-1):
        sort === "highest"?
        ((a.price < b.price)? 1:-1):
        ((a._id < b._id)? 1:-1)
      ))
    }))

  }

  filterProducts=(e) => {

    console.log(e.target.value);
    if(e.target.value === ""){
      this.setState({size: e.target.value, products: data.products})
    } else {
      this.setState({
        size: e.target.value,
        products: data.products.filter(product => product.availableSizes.indexOf(e.target.value)>=0)
      })
    }

  }

  render(){
    return (
      <div className = "grid-container">
        <header>
          <a href="/">Outfit Ideas</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
              ></Filter>
              <Products products={this.state.products} 
              addToCart={this.addToCart}></Products>
            </div>
            <div className="sidebar">
              <Cart cartItems= {this.state.cartItems}
               removeFromCart={this.removeFromCart}
               createOrder={this.createOrder} />
               </div>
          </div>
        </main>
        <footer>All rights reserved.</footer>
      </div>
      );
    }
}

export default Home;