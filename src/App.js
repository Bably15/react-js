import Header from "./component/Header";
import Button from "./component/Button";
import Card from "./component/Card";
import List from "./component/List";
import Footer from "./component/Footer";

function App() {
    const newArr = ["hi", "hello", "goodbye"];
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
            <Footer />
        </div>
    );
}

export default App;
