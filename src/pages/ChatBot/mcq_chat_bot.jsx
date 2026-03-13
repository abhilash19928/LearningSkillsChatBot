import { useState } from "react";
import Card from "../../components/Card/card";
import QuestionGeneratorFilter from "../../components/Questiongenerate/questionGeneratorFilter";
import { generateQuestions, generateReport } from "../../services/generate_mcq_service";
import MCQReportDisplay from "./mcq_report_display";


export default function MCQTest() {
    
    const [questions, setQuestions] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [questionsAttempt, setQuestionsAttempt] = useState(true); 
    const [isReportVisible,setReportVisibility]=useState(false)
    const [report,setReport]=useState([])
    const handleReportGeneration=async ()=>{
        setLoading(true);
        setReportVisibility(true)
        
          const data = await generateReport(questions);
            if(data.length>0)
            {setLoading(false);
                setReport(data)
            }

    }
    const handleChange=(e,opt)=>{
        const updated=[...questions]
        updated[currentIndex].selectedOption = opt;
        setQuestions(updated)
        const filteredData=questions.filter(x=>x.selectedOption=="")
        if(filteredData.length==0)
        {
            setQuestionsAttempt(false)
        }

    }
    const handleGenerate = async (filter) => {
        try {
            setLoading(true);
            setQuestionsAttempt(true)
            setCurrentIndex(0)
            setReportVisibility(false)
            setQuestions([]);
            
            const request = {
                domain: filter.domain,
                level: filter.level,
                no_of_questions: filter.count,
            };

            const data = await generateQuestions(request);

            if (data && data.length > 0) {
                setQuestions(data);
                setCurrentIndex(0); 
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const totalQuestions = questions.length;

    return (
        <div className="container mt-5">
            <Card>
                <QuestionGeneratorFilter onGenerate={handleGenerate} />
            </Card>
             {isLoading && (
                       
                            <div className="text-center my-4">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="mt-2">{isReportVisible?"Generating Report....": "Generating questions..."}</p>
                            </div>
                        
                    )}
            <div className="row mt-4">

                    {isReportVisible && !isLoading && (
                       
                        <MCQReportDisplay report={report}></MCQReportDisplay>
                    )
                    
                    }

                <div className="col-md-2">
                     {!isLoading && totalQuestions > 0 && !isReportVisible && (
                        <Card>
                            <div className="card shadow-sm question-card border-0">
                            <div className="d-flex gap-2 flex-wrap p-2 justify-content-center">
                                {Array.from({ length: totalQuestions }, (_, i) => (
                                    <button
                                       style={{width:"40px", height:"40px"}}
                                        key={i}
                                        className={`btn btn-sm ${
                                            currentIndex === i
                                                ? "btn-primary"
                                                : "btn-outline-primary"
                                        }`}
                                        onClick={() => setCurrentIndex(i)}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                            </div>
                        </Card>
                    )}
                </div>
                <div className="col-md-10">
                   

                    {!isLoading && totalQuestions > 0 && !isReportVisible && (
                        <Card>
                            <div className="card shadow-sm question-card border-0">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Q{currentIndex + 1}. {questions[currentIndex].question}
                                    </h5>

                                    <div className="mt-3">
                                        {["A", "B", "C", "D"].map((opt) => {
                                            const q = questions[currentIndex];
                                            const isChecked=q.selectedOption==opt?true:false
                                            return (
                                                <div className="form-check mb-2" key={opt}>
                                                    <input
                                                        className="form-check-input border"
                                                        type="radio"
                                                        name={`q_${currentIndex}`}
                                                        id={`q_${currentIndex}_${opt}`}
                                                        checked={isChecked}
                                                        onChange={(e)=>handleChange(e,opt)}
                                                    />
                                                    <label
                                                        className="form-check-label option-label"
                                                        htmlFor={`q_${currentIndex}_${opt}`}
                                                    >
                                                        <strong>{opt}.</strong>{" "}
                                                        {q[`option ${opt}`]}
                                                    </label>
                                                </div>
                                            );
                                        })}
                                    </div>

                                </div>

                                
                                <div className="card-footer bg-white border-0 pt-0 d-flex justify-content-between">
                                    <button
                                        className="btn btn-outline-secondary"
                                        disabled={currentIndex === 0}
                                        onClick={() => setCurrentIndex((i) => i - 1)}
                                    >
                                        Previous
                                    </button>

                                    <button
                                        className="btn btn-primary"
                                        disabled={currentIndex === totalQuestions - 1}
                                        onClick={() => setCurrentIndex((i) => i + 1)}
                                    >
                                        Next
                                    </button>
                                </div>
                                 
                            </div>
                            <div className="pt-4 d-flex justify-content-end">
                                    <button
                                        className="btn btn-secondary"
                                        disabled={questionsAttempt}
                                        onClick={handleReportGeneration}
                                    >
                                        Generate Report
                                    </button>
                                </div>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}