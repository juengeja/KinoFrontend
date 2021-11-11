import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ShoppingCartEntries from '../components/ShoppingCartEntries'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import ScrollButton from '../components/ScrollButton';

class ShoppingCart extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    showRecipe(){
        return(
            <div className="container">
                    <div className="checkout">
                        <Link to='/booking' className="btn-primary">Zur Kasse</Link>
                    </div>
            </div>
        )
    }

    render() {

        let showRecipe = this.props.items.length && this.props.items[this.props.items.length - 1].reservations.length ? 
            <>
            <h6>Gesamtsumme: {this.props.items[this.props.items.length - 1].totalPrice}€</h6>
            {this.showRecipe()}
            </> 
        : null

        return (
            <>
                <Hero hero='cartHero'>
                    <Banner title="Warenkorb"></Banner>
                </Hero>
                <section class="movielist">
                    <div class="cart-entry-container">
                        <ShoppingCartEntries/>
                        <div class="recipe">     
                            {showRecipe}
                        </div>
                    </div>
                </section>
                <ScrollButton />
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
    }
}

export default connect(mapStateToProps)(ShoppingCart)