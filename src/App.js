import React, { useState } from "react";
import Header from "./component/Header";
import Button from "./component/Button";
import Card from "./component/Card";
import List from "./component/List";
import Card2 from "./component/Card2";
import List2 from "./component/List2";
import Footer from "./component/Footer";

function App() {
    const [array, setArray] = useState(111);
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
    });
    const { email, password } = loginDetails;
    const newArr = ["hi", "hello", "goodbye"];
    const obj = {
        title: "1st card",
        text: "Card's content is accomplished",
    };
    const arr = [
        {
            taskName: "meditate",
            taskTime: "6 am - 7 am",
        },
        {
            taskName: "exercise",
            taskTime: "7 am - 8 am",
        },
    ];

    const handleChange = (e) => {
        console.log(loginDetails);
        setLoginDetails({
            ...loginDetails,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div className="App">
            <Header />
            <Button color="primary" text="Customized Button" />
            <Button color="danger" text="Test Button" />
            <Button color="warning" text="Submit Button" />
            <Button color="info" text="Demo Button" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-4">
                        <Card
                            title="first card"
                            text="this is the first card"
                        />
                    </div>
                    <div className="col-4">
                        <Card
                            title="second card"
                            text="this is the second card"
                        />
                    </div>
                    <div className="col-4">
                        <Card
                            title="third card"
                            text="this is the third card"
                        />
                    </div>
                </div>
            </div>
            <List array={newArr} />
            <Card2 object={obj} />
            <List2 tasks={arr} />
            <Footer />
            <div>
                <button onClick={() => setArray(array + 222)}>submit</button>
                <h3>{array}</h3>
            </div>

            <div>
                <label for="exampleFormControlInput1" class="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="email"
                    onChange={handleChange}
                    value={email}
                />
                <label for="exampleFormControlInput1" class="form-label">
                    Password
                </label>
                <input
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="password"
                    onChange={handleChange}
                    value={password}
                />
                <h2>{password}</h2>
            </div>
        </div>
    );
}

export default App;
