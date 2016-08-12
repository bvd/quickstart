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
	  <h1>editor</h1>
	  <div>
	    <div><label>name: </label><input value="{{happymoment.name}}" placeholder="name"></div>
	    <div><label>email: </label><input value="{{happymoment.email}}" placeholder="name"></div>
	    <div><label>title: </label><input value="{{happymoment.title}}" placeholder="name"></div>
	    <div><label>location: </label><input value="{{happymoment.location}}" placeholder="name"></div>
	    <div><label>description: </label><input value="{{happymoment.description}}" placeholder="name"></div>
	    <div><label>image: </label><input value="{{happymoment.image}}" placeholder="name"></div>
	  </div>
	  
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
