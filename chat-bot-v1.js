import { SoccerWordsDB, RulesWordsDB, TeamWordsDB, PalmeirasWorldwideDB, disposableDB, mostProbablyQuestion, compareQuestion, deductionQuestion} from './can-i-answer.js'


let pergunta = "O Palmeiras tem mundial chatbot ?".toLowerCase().split(" ") 
pergunta = pergunta[pergunta.length -1] === "?" ? pergunta.slice(0, -1) : pergunta

compareQuestion(pergunta)