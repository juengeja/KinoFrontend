import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import Title from '../components/Title';

import M1 from "../images/Menu (1).jpg";
import M2 from"../images/Menu (2).png";
import M3 from"../images/Menu (3).png";
import M4 from"../images/Menu (4).png";
import M5 from"../images/Menu (5).png";

export default class Gastro extends Component {
    state={
        food:[
            {
              title:'Baconburger',
              description:'150g Rindfleisch, Zwiebeln, Bacon, Baconsauce, Käse, Salat, Tomate, Gurke',
              price: '9,90',
            },
            {
                title:'Pulled Pork Burger',
                description:'Pulled Pork, Salat, Tomate, Gurke, BBQ Sauce, Kartoffelstroh',
                price: '9,90',
              },
              {
                title:'Pommes',
                description:'inkl. Ketchup oder Mayo',
                price: '2,90',
              },
              {
                title:'Käse Ecken',
                description:'mit hausgemachter Panade gebackener Camembert mit Preiselbeeren',
                price: '5.50',
              },
              {
                title:'Schnitzel Wiener Art',
                description:'Schwein oder Hähnchen in selbstgemachter Panade mit Pommes',
                price: '9.90',
              },
        ],
        snacks:[
            {
              title:'Nachos klein',
              price: '5,50',
            },
            {
                title:'Nachos groß',
                price: '6,90',
              },
            {
                title:'Popcorn klein',
                price: '4,50',
              },
              {
                title:'Popcorn mittel',
                price: '5,50',
              },
              {
                title:'Popcorn groß',
                price: '6,50',
              },
        ],

        drinks:[
            {
              title:'Coca Cola, Cola Zero, Fanta, Sprite, Mezzo Mix 0,2l',
              price: '3,50',
            },
            {
                title:'Coca Cola, Cola Zero, Fanta, Sprite, Mezzo Mix 0,5l',
                price: '5,50',
              },
              {
                title:'Coca Cola, Cola Zero, Fanta, Sprite, Mezzo Mix 0,75l',
                price: '6,50',
              },
            {
                title:'Mineralwasser 0,25l',
                price: '2,00',
              },
              {
                title:'Arizona Eistee 0,5l',
                price: '3,50',
              },
              {
                title:'Bier 0,33l',
                price: '4,00',
              },
        ],

        menus:[
            M1,M2,M3,M4,M5
        ]
    };

render(){
    return (
        <>
            <Hero hero="gastroHero">
                <Banner title="Gastronomie" />
            </Hero>

            <section className="home">
                <Title title="Mit unseren Menüs zu einem kulinarischen Kinoerlebnis!" />
                Wir haben für dich unsere beliebtesten Gastronomie-Artikel in einigen Menüs zusammengestellt. So sparst du im Vergleich zum Einzelkauf bis zu 17 %.
                <br />
                <br />
                Selbstverständlich erhältst du durch unsere freundlichen Mitarbeiterinnen und Mitarbeiter in der Gastronomie automatisch die für dich günstigste Kombination! Informiere dich hier über unsere verschiedenen Menü-Angebote.
              </section>

            <section className="gastro">
                <Title title="Getränke" />
                
                <table class="gastro-table">
                    <thead>
                        <tr>
                            <th>Produkt</th>
                            <th>Preis</th>
                        </tr>
                    </thead>   
                    <tbody>
                {this.state.drinks.map((item) => {
                        return (
                            <tr>
                                <td><b>{item.title}</b></td>
                                <td>{item.price}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <br />
                <br />
                <Title title="Snacks" />
                
                <table class="gastro-table">
                    <thead>
                        <tr>
                            <th>Produkt</th>
                            <th>Preis</th>
                        </tr>
                    </thead>   
                    <tbody>
                {this.state.snacks.map((item) => {
                        return (
                            <tr>
                                <td><b>{item.title}</b></td>
                                <td>{item.price}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>

                <br />
                <br />
                <Title title="Mahlzeit" />
                
                <table class="gastro-table">
                    <thead>
                        <tr>
                            <th>Produkt</th>
                            <th>Preis</th>
                        </tr>
                    </thead>   
                    <tbody>
                {this.state.food.map((item) => {
                        return (
                            <tr>
                                <td><b>{item.title}</b><br />{item.description}</td>
                                <td>{item.price}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <br />
                <br />
                <Title title="Menüs" />

                <div className="gastro-menus">
                    {this.state.menus.map(item => {
                        return (
                            <img src={item} />
                        );
                    })}
                </div>
            </section>


        </>
    );
}
}