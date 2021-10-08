import React, {useState} from "react";
// import { useHistory } from "react-router-dom";

function Intro() {

    // const history = useHistory()

    // const routeChange = () => {
    //     let path = "/bios"
    //     history.push(path)
    // }

    const [summary, setSummary] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
            fetch("/introductions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    summary
                }),
            }).then(res => {
                if (res.ok) {
                    return res.json()
                    }else {
                    return res.json().then(errors => Promise.reject(errors))
                    }
                })
    }



    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Summary</h1>
                    <label htmlFor="summary">Professional summary</label>
                            <input
                            className="summary"
                            type="text"
                            name="summary"
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}/>
                    <button type="submit">Save</button>
                    {/* <p className="route">
                        <button className="router" onClick={routeChange} >Next Bio</button>
                    </p> */}
            </form>
        </div>
    )
}

export default Intro