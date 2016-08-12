import { Component } from '@angular/core';
import { HappyMoment } from './happymoment';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><h2>{{happymoment.title}} details</h2>'
})
export class AppComponent { 
	title = "Meldpunt Geluksmomenten";
	
	// geluksmoment
	happymoment: HappyMoment = {
		name: "Henk van Veen",
	    email: "h.veen@gmail.com",
	    title: "de rozenbotteljam",
	    location: "keukenkast",
	    description: "als ik mijn potten met rozenbotteljam zie",
	    image: "f92ndosiw02mvlw9w92pdmsp2840suw0.jpg"
	};
}
