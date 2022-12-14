import React from 'react';
let score = localStorage.getItem("score");
let total = localStorage.getItem("total");

const Result = () => {
    return (
        <>
            <div className="container">
                <div className="row mx-auto mt-5">
                    <div className="col mt-5 pt-4">
                        <div className="card mt-5" style={{width: '18rem',margin: "0px auto"}}>
                            <div className="card-body">
                                <p className="card-text text-center fw-bold fs-4">Your Total Score Is:</p>
                                <p className='card-text text-center fw-bold fs-4'>{score} Out Of {total}.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result
