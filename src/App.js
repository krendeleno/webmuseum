import logo from './logo.svg';
import './App.css';
import Main from "./pages/Main";
import {useState} from "react";
import {Context} from "./components/Context.js"
import {
    BrowserRouter,
    Route, Routes,
} from "react-router-dom";
import Search from "./pages/Search";
import Category from "./pages/Category";
import Service from "./pages/Service";
import Header from "./components/Header";
import OuterContainer from "./components/OuterContainer";

function App() {
    const [context, setContext] = useState({search: ''});

    return (
        <BrowserRouter basename="webmuseum">
            <Context.Provider value={[context, setContext]}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/*" element={<OuterContainer />}/>
                </Routes>
            </Context.Provider>
        </BrowserRouter>
    );
}

export default App;
