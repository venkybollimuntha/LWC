import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDOM extends LightningElement {

    names = ['john','venky','rakesh','hello']

    fetchDetails(){

        const ele = this.template.querySelector('p')
        console.log(ele)
        const nodeList= this.template.querySelectorAll('.name')
        Array.from(nodeList).forEach(item=>{
            console.log(item.innerText)
        })

        // lwc.dom = 'manual'
        const childElement = this.template.querySelector('.child')
        childElement.innerHTML = "<p> Hey this is Child tag </p>"
    }
}
