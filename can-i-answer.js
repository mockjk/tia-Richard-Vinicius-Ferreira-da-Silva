export const SoccerWordsDB = {
    probablyWords: ["sobre", "entende", "falar", "fale", "explique", "sabia", "sabe", "diga", "dizer", "compreender", "explicar"],
    matched: 0,
}

export const RulesWordsDB = {
    probablyWords: ["quais", "são", "funcionam", "funcionamento", "explicação", "regras", "regra"],
    matched: 0,
}

export const TeamWordsDB = {
    probablyWords: ["clube", "coração", "do", "gosta", "mais", "preferido", "qual", "que", "time", "torce", "vc", "você"],
    matched: 0,
}

export const  PalmeirasWorldwideDB= {
    probablyWords: ["venceu", "ganhou", "conquistou", "possui", "detém", "obteve"],
    matched: 0,
}

export const disposableDB = {
    probablyWords: ["cumprimento", "saudação", "interação", "conversa", "conhecimento", "informação"],
    matched: 0,
}

function showAnswer(index) {
    switch (index) {
        case 0:
            return "O futebol é o esporte coletivo mais praticado do mundo. É disputado por duas equipes."
        break;

        case 1:
            return "Temos algumas regras como: 2 tempos de 45 minutos, jogo supervisado por um árbitro, é proibido usar as mãos para manusear a bola etc..."
        break;

        case 2:
            return "Eu sou Mengão!!!"
        break;

        case 3:
            return "O palmeiras não tem mundial, mas os porcos vão falar que sim"
        break;

        default:
            return "Falo apenas de Futebol, assunto incoerente"
    }
}

export function deductionQuestion(question){
    compareQuestionInDB(question)
}

export function compareQuestion(DB, wordsQuestion){
        for(let i = 0; i < DB.probablyWords.length ; ++i){
            wordsQuestion.forEach((element) => {
                    if(DB.probablyWords[i] === element){
                        DB.matched++
                    }
            });
    }
} 

export function mostProbablyQuestion() {
    let matches = [
        SoccerWordsDB.matched, 
        RulesWordsDB.matched, 
        TeamWordsDB.matched,
        PalmeirasWorldwideDB.matched, 
        disposableDB.matched
    ]

    // Vê quantas palavras de cada pergunta foi usada
    return showAnswer(matches.indexOf(Math.max(...matches)))
}

export function compareQuestionInDB(wordsQuestion){
    compareQuestion(SoccerWordsDB, wordsQuestion)
    compareQuestion(RulesWordsDB, wordsQuestion)
    compareQuestion(PalmeirasWorldwideDB, wordsQuestion)
    compareQuestion(TeamWordsDB, wordsQuestion)
    compareQuestion(disposableDB, wordsQuestion)
    mostProbablyQuestion()
}

