import React from "react"
import { nanoid } from "nanoid";
import Question from "./Question";

export default function QuestionList(props) {
    const [questionsArray, setQuestionsArray] = React.useState([]);
    let categoryQueryParam = "";
    let difficultyQueryParam = "";
    let typeQueryParam = "";

    async function getQuestions(gameOptions) {
        const { category, difficulty, type } = gameOptions||{};
        if (category) {
            categoryQueryParam = `&category=25`;
        }
        if (difficulty) {
            difficultyQueryParam = `&difficulty=${difficulty}`;
        }
        if (type) {
            typeQueryParam = `&type=${type}`;
        }
        let apiUrl = `https://opentdb.com/api.php?amount=5${categoryQueryParam}${difficultyQueryParam}${typeQueryParam}`;
        const res = await fetch(apiUrl);
        const data = await res.json();
        return data.results;
    }

    React.useEffect(() => {
        getQuestions(props.gameOptions).then(res=>{
            if(res.length===0){
                // handleGameStart();
				// handleNoQuestionsError(true);
                return;
            }else{
                // handleNoQuestionsError(false);
            }
            setQuestionsArray(res.map(question=>{
                return{
                    ...question,
                    id:nanoid(),
                    // selectedAnswer: "",
					// showAnswer: false
                }
            }))
        })
    }, [])

    const questionELements = questionsArray.map(item=>(
        <Question
            id={item.id}
            key={item.id}
            question={item.question}
            correctAnswer={item.correct_answer}
            incorrectAnswers={item.incorrect_answers}
            category={item.category}
            difficulty={item.difficulty}
            type={item.type}

        />
    ))
    console.log(questionELements)
    return (
        <section>
            {questionELements}
        </section>
    )
}