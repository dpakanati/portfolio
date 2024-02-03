import './App.css'
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
    // const sections =[
    //     {id:'home', title: "Home"},
    //     {id:'about', title: "About"},
    //     {id:'contact', title: "Contact"},
    //     {id:'projects', title: "Projects"},
    // ];
    return(
        <div>
            <Home/>
        </div>
        // <div className = "App">
        //     <Header sections = {sections}/>
        //     <main>
        //         {sections.map((section) => (
        //             <Section key={section.id} id={section.id} title={section.title}  />
        //         ))}
        //     </main>
        // </div>
    );
}

export default App;
