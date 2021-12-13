import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {

    percent = 10

    changeHandler(event){
        this.percent = event.target.value

    }
    get getPercent(){
        console.log('get percent called');
        return `background-color:red;width:${this.percent}%`
    }
}