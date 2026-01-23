import Accordion from "./Components/Accordion";
import { accordionData } from "./utils/accordionList.js";
const App = () => {
    return (
        <div>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <Accordion
                        title={title}
                        content={content}
                        key={Math.random() * 2000}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
