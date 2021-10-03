import Header from "./component/Header";
import Button from "./component/Button";
import Card from "./component/Card";
import List from "./component/List";
import Card2 from "./component/Card2";
import List2 from "./component/List2";
import Footer from "./component/Footer";

function App() {
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
        </div>
    );
}

export default App;
