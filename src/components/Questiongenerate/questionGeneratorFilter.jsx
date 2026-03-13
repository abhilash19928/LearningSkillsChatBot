import React, { useState } from "react";

export default function QuestionGeneratorFilter({ onGenerate }) {
    const [domain, setDomain] = useState("");
    const [level, setLevel] = useState("");
    const [count, setCount] = useState("");

    const handleSubmit = () => {
        if (!domain || !level || !count) {
            alert("Please fill all fields");
            return;
        }

        onGenerate({ domain, level, count: Number(count) });
    };

    return (
        <div className="container mt-2">
            <div className="d-flex gap-3 align-items-center flex-wrap">

                <select className="form-select w-auto"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                >
                    <option value=''>Select Domain</option>
                    <option value='Angular'>Angular</option>
                    <option value='ReactJS'>ReactJS</option>
                    <option value='JavaScript'>JavaScript</option>
                    <option value='Python'>Python</option>
                </select>

                <select className="form-select w-auto"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                >
                    <option value=''>Select Level</option>
                    <option value='Easy'>Easy</option>
                    <option value='Medium'>Medium</option>
                    <option value='Hard'>Hard</option>
                </select>


                <input
                    type="number"
                    className="form-control w-auto"
                    placeholder="No. of Questions"

                    value={count}

                    onChange={(e) => setCount(e.target.value)}

                    min="1"
                />

                <button className="btn btn-primary" onClick={handleSubmit}>
                    Generate
                </button>
                
            </div>
        </div>

    );
}
