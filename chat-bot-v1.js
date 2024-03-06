import {wordDB, mostProbablyQuestion} from './can-i-answer.js'


let question = "O Palmeiras tem mundial chatbot ?".toLowerCase().split(" ") 
question = question[question.length -1] === "?" ? question.slice(0, -1) : question

for (let i = 0; i < question.length; ++i) {
    for (let j = 0; j < wordDB.length; ++j) {
        if (wordDB[j].probablyWords.indexOf(question[i]) !== -1) {
            wordDB[j].matched++
        }
    }
}


console.log(mostProbablyQuestion())
