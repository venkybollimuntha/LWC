import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

isSubmited = false;
selectedAnswer = {} // user selected options are stored here
correctAnswer = 0 // to count the number of correct answers.

questionList = [

    {
        id:'Q1',
        question:'What is Venky favorite curry?',
        answers:{
            a: "Chicken",
            b: "Mutton",
            c: "Fish",
            d: "Pure veg"
        },
        correctAns:"d"
    },
    {
        id:'Q2',
        question:'Who is Venky Favorite lyricist?',
        answers:{
            a: "Sirivennela",
            b: "Ramajogayya",
            c: "Chandrabose",
            d: "Veturi"
        },
        correctAns:"a"
    },
    {
        id:'Q3',
        question:'Who is Venky favorite Actor?',
        answers:{
            a: "Pawan Kalyan",
            b: "Chiranjeevi",
            c: "Bramhanandam",
            d: "Allu Arjun"
        },
        correctAns:"c"
    }
]

//it's called everytime when we select/change the each option.
changeHandler(event){
let {name,value} = event.target
this.selectedAnswer = {...this.selectedAnswer,[name]:value}
console.log("Selected anser is",this.selectedAnswer)
}

// checking whether every question is selected or not and enable the submit button
get isAllSelected(){

    return !(Object.keys(this.selectedAnswer).length === this.questionList.length)
}

// to submit the form
submitHandleClick(event){
    event.preventDefault() // submit always refresh the page, to prevent default refresh we will use this
    let correct = this.questionList.filter(eachquestion=>this.selectedAnswer[eachquestion.id] ===eachquestion.correctAns)
    this.correctAnswer = correct.length 
    this.isSubmited = true
    console.log(this.correctAnswer)
}

//to reset the form
resetHandleClick(){
    this.selectedAnswer = {}
    this.correctAnswer =0
    this.isSubmited = false
}

// for applying dynamic CSS class to the HTML template
get isScoredFull(){

    return `slds-text-heading_large ${this.questionList.length===this.correctAnswer?
        `slds-text-color_success`: `slds-text-color_error`}`
}


}