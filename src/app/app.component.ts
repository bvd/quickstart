import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><h2>{{gm_title}} details</h2>'
})
export class AppComponent { 
	title = "Meldpunt Geluksmomenten";
	// geluksmoment
	gm_name = "Henk van Veen";
	gm_email = "h.veen@gmail.com";
	gm_title = "mijn rozenbotteljam";
	gm_location = "keukenkast";
	gm_description = "als ik mijn potten met rozenbotteljam zie";
	gm_image = "f92ndosiw02mvlw9w92pdmsp2840suw0.jpg";
}
