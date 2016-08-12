import { Component } from '@angular/core';
import { HappyMoment } from './happymoment';

@Component({
    selector: 'my-app',
    template: `
	  <h1>{{title}}</h1>
	  <h2>{{happymoment.title}} details</h2>
	  <div><label>id: </label>{{happymoment.id}}</div>
	  <div><label>name: </label>{{happymoment.name}}</div>
	  <div><label>email: </label>{{happymoment.email}}</div>
	  <div><label>title: </label>{{happymoment.title}}</div>
	  <div><label>location: </label>{{happymoment.location}}</div>
	  <div><label>description: </label>{{happymoment.description}}</div>
	  <div><label>image: </label>{{happymoment.image}}</div>
	`
})
export class AppComponent { 
	title = "Meldpunt Geluksmomenten";
	
	// geluksmoment
	happymoment: HappyMoment = {
		id: 1,
		name: "Henk van Veen",
	    email: "h.veen@gmail.com",
	    title: "de rozenbotteljam",
	    location: "keukenkast",
	    description: "als ik mijn potten met rozenbotteljam zie",
	    image: "f92ndosiw02mvlw9w92pdmsp2840suw0.jpg"
	};
}
