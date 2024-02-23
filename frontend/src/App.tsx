import './App.css'
import Header from "./Components/Header/Header";
import {BrowserRouter as Router} from "react-router-dom";
import Routing from "./Routing";

function App() {

    return (
        
        <Router>
            <Header/>
            {/*<div style={{paddingTop: '70px'}}> /!* Add padding to the top *!/*/}
            {/*    <Routing/>*/}
            {/*</div>*/}
            <Routing/>
        </Router>


    );
}

// const sections =[
//     {id:'home', title: "Home"},
//     {id:'about', title: "About"},
//     {id:'contact', title: "Contact"},
//     {id:'projects', title: "Projects"},
// ];
// <div className = "App">
//     <Header sections = {sections}/>
//     <main>
//         {sections.map((section) => (
//             <Section key={section.id} id={section.id} title={section.title}  />
//         ))}
//     </main>
// </div>
export default App;
