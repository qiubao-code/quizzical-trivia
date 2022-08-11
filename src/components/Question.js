import React from "react";
import { nanoid } from "nanoid";
import { decode } from 'html-entities';

export default function Question(props){
    const incorrectAnswers=props.incorrectAnswers.map(answer=>{

    })
    console.log(props);
    return (
        <article>
            <h3>
                {decode(props.question)}
            </h3>
        </article>
    )
}