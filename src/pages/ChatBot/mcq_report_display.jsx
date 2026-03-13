import Card from "../../components/Card/card";

export default function MCQReportDisplay({ report }) {
  if (!report || report.length === 0) {
    return (
      <Card>
        <div className="text-center p-4 text-muted">No report available.</div>
      </Card>
    );
  }

  const data = report[0];

  return (
    <div className="container mt-4">
      <Card>
        <div className="card shadow-sm border-0 p-4">
          <h3 className="text-center mb-4">MCQ Test Report</h3>
          <div className="row text-center mb-4">
            <div className="col-md-3 mb-3">
              <div className="p-3 border rounded bg-light">
                <h5>Total Questions</h5>
                <h3 className="text-primary">{data["total_questions"]}</h3>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="p-3 border rounded bg-light">
                <h5>Correct</h5>
                <h3 className="text-success">{data["correct_answer"]}</h3>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="p-3 border rounded bg-light">
                <h5>Incorrect</h5>
                <h3 className="text-danger">{data["incorrect_answer"]}</h3>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="p-3 border rounded bg-light">
                <h5>Percentage</h5>
                <h3 className="text-primary">{data["percentage"]}</h3>
              </div>
            </div>
          </div>
          <div className="alert alert-info text-center">
            <h4 className="mb-0">
              Result: <strong>{data["result"]}</strong>
            </h4>
          </div>
          {data["area_of_improvement"].length>0 &&
          <div className="mt-4">
            <h5 className="mb-3">Area of Improvement</h5>
            <ul className="list-group">
              {data["area_of_improvement"].length>0 && data["area_of_improvement"].map((item, index) => (
                <li key={index} className="list-group-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>}
          {data["feedback"].length>0 && 
          <div className="mt-4">
            <h5 className="mb-3">Feedback</h5>
            <ul className="list-group">
              {data["feedback"].length>0 && data["feedback"].map((item, index) => (
                <li key={index} className="list-group-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
}
        </div>
      </Card>
    </div>
  );
}