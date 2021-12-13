import { LightningElement,track } from 'lwc';

export default class HelloWorldByVenky extends LightningElement {
    fullname = "Venky Bollimuntha";
    title = "LWC"
    changeHandler(event){
        this.title = event.target.value
    }

    @track data={
        city:"potumeraka",
        pincode: "522264",

    }

    changeAddress(event){
        this.data.city = event.target.value;
    }
}