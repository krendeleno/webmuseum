import logo from './logo.svg';
import './App.css';
import Main from "./pages/Main";
import {useState} from "react";
import {Context} from "./components/Context.js"
import {
    BrowserRouter,
    Route, Routes,
} from "react-router-dom";
import OuterContainer from "./components/OuterContainer";
import {Helmet} from "react-helmet";

function App() {
    const [context, setContext] = useState({search: ''});

    return (
        <BrowserRouter basename="webmuseum">
            <Context.Provider value={[context, setContext]}>
                <Helmet>
                    <title>Музей сервисов Яндекса</title>
                    <meta
                        name="description"
                        content="Виртуальный музей, посвященный сервисам компании Яндекс. Все права принадлежат ООО 'Яндекс'."
                    />
                </Helmet>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/*" element={<OuterContainer />}/>
                </Routes>
            </Context.Provider>
        </BrowserRouter>
    );
}

export default App;
