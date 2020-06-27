import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from './Title';
export default class Services extends
 Component {
     state={
         services:[
             {
                 icon :<FaCocktail/>,
                 title: "free cocktails",
                 info:"Enjoy free cocktail with music, dance"         
             },
             {
                icon :<FaHiking/>,
                title: "Endless Hiking",
                info:"This place provides you great adventures and explore new things ."
                
            },
            {
                icon :<FaShuttleVan/>,
                title: "free shuttle",
                info:"Shuttle services are provided with no cost from hotel rooms to different beaches near by it. "
                
            },
            {
                icon :<FaBeer/>,
                title: "Strongest Beer",
                info:"Strongest beer makes your journey enjoyable. "
                
            }
         ]
     }
    render() {
        return (
            
                <section className="services">
               <Title title ="services"/>
               <div className ="services-center">
                   {this.state.services.map((item, index) =>{
                       return <article key={index} className="services">
                           <span>{item.icon}</span>
                          <h6>{item.title}</h6>
                          <p>{item.info}</p>
                          </article>
                   } )}
                     
            </div>
            </section>
        )
    }
}

