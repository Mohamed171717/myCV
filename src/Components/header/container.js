import Edu from "./edu";
import Info from "./info";
import Projects from "./projects";
import Work from "./work";
function Container() {

    return(
        <>
        <div className="container d-grid m-20">
        <Info />
        <div>
            <Work />
            <Edu />
            <Projects />
        </div>
    </div>
        </>
    );
};

export default Container;