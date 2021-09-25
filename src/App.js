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
            <Card />
            <Footer />
        </div>
    );
}

export default App;
