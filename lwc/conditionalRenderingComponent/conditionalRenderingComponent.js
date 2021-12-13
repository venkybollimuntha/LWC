import ReminderDateTime from '@salesforce/schema/Task.ReminderDateTime';
import { LightningElement } from 'lwc';

export default class ConditionalRenderingComponent extends LightningElement {

    isVisible= false;

    callMe(event){
        if(event.target.value==="Delete"){
            this.isVisible = true
        }
        else{
            this.isVisible = false;
        }
    }

    handleClick(){

        alert("You have successfully deleted the item")
    }

    get myGettermethod(){
        return this.isVisible;
    }


    
}