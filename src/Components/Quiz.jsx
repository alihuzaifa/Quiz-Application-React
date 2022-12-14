import React, { useEffect, useState } from 'react';
import RatingStar from "./RatingStar";
import { Progress } from 'antd'
import { AllQuestion } from "./Question";
import { Link } from 'react-router-dom';

const Quiz = () => {

    let data = AllQuestion;
    localStorage.setItem("total", JSON.stringify(data.length))

    let [questionNumber, setQuestionNumber] = useState(0);
    let [disable, setDisable] = useState(false);
    let [showBtn, setShowBtn] = useState(true);
    let [isSelect, setIsSelect] = useState(true)
    let [inCorrect, setInCorrect] = useState("");
    let [progressCount, setProgressCount] = useState(-5)
    let [question, setQuestion] = useState(data[questionNumber]);
    const [active, setActive] = useState(false);
    let [selectOp, setSelectOpt] = useState("");
    let [score, setScore] = useState(1);
    let [message, setMessage] = useState(true);
    let correctQuestion = data[questionNumber].question;
    const [rating, setRating] = useState(1);


    let questionCategory = question.category
    let starRating = data[questionNumber].difficulty;

    useEffect(() => {
        if (starRating === "hard") {
            console.log("Working 3")
            setRating(3)
        } else if (starRating === "medium") {
            console.log("Working 2")
            setRating(2)
        } else {
            console.log("Working 1")
            setRating(1)
        }
    });
    // console.log(rating)

    let options = data[questionNumber].incorrect_answers;
    let answer = data[questionNumber].correct_answer

    const getTickOption = (e, ele) => {
        setInCorrect(e)
        setSelectOpt(ele.target)
        ele.target.classList.add("selectedOp");
        setDisable(true)
        setShowBtn(false)
        setActive(true);
        if (e === answer) {
            setScore(score + 1)
            localStorage.setItem("score", JSON.stringify(score));
            setMessage(true);
        }
        else {
            setMessage(false)
        }
    }

    const nextQuestion = () => {
        selectOp.classList.remove("selectedOp")
        setIsSelect(false)
        setQuestionNumber(questionNumber + 1);
        setShowBtn(true);
        setDisable(false);
        setProgressCount(progressCount + 5)
    }



    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2 text-start my-5 bg-light shadow">
                            <h2 className='mt-2'>Question {questionNumber + 1} to {data.length}</h2>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col h6">
                                        {questionCategory}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <RatingStar rating={rating}/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col question">
                                        Q{questionNumber + 1}: {correctQuestion}?
                                    </div>
                                </div>

                                <div className="row h6 mt-3">
                                    {
                                        options.map((v, i) => {
                                            return (
                                                <div className="col-10 offset-1 bg-dark text-white my-1 py-2 text-center btn" onClick={!disable ? (e) => getTickOption(v, e) : null} key={i} value={v} >
                                                    {v}
                                                </div>
                                            )

                                        })
                                    }

                                    <div>
                                    </div>
                                </div>

                                {
                                    !showBtn ?
                                        <div>
                                            <div className="row">
                                                <div className="col text-center fs-4 fw-bold">
                                                    {
                                                        message ? "Correct" : "Wrong"
                                                    }
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col text-center mb-3">
                                                    <button className="next" onClick={nextQuestion}>{
                                                        questionNumber === (AllQuestion?.length - 1) ? <Link to={"/result"} style={{ color: "#373B44", textDecoration: "none" }}>Next</Link> : "Next"
                                                    }</button>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        null
                                }
                                <div className="row">
                                    <div className="col fw-bold">
                                        <Progress percent={progressCount + 5} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz
