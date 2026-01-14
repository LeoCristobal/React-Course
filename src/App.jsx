import Person from "./Components/Person.jsx";
import Product from "./Components/Product.jsx";

const App = () => {
    return (
        <>
            <div className="sample">
                <Person name="Leo" age="12" />
                <Product product="Laptop" price="30,000" />
            </div>
        </>
    );
};

export default App;
