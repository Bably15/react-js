import Header from "./component/Header";
import Button from "./component/Button";
import Card from "./component/Card";
import Footer from "./component/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Button color="primary" text="Customized Button" />
            <Button color="danger" text="Test Button" />
            <Button color="warning" text="Submit Button" />
            <Button color="info" text="Demo Button" />
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Card
                            title="first card"
                            text="this is the first card"
                        />
                    </div>
                </div>
                <div className="col-4">
                    <Card title="second card" text="this is the second card" />
                </div>
                <div className="col-4">
                    <Card title="third card" text="this is the first card" />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;
