import {
    Route, Routes,
} from "react-router-dom";
import Search from "../../pages/Search";
import Service from "../../pages/Service";
import Category from "../../pages/Category";
import Header from "../Header";
import "./style.css"

function OuterContainer() {

    return (
        <>
            <Header/>
            <div className="outer-container">
                <Routes>
                    <Route path="/search" element={<Search/>}/>
                    <Route path="category/:categoryId" element={<Category/>}/>
                    <Route path="service/:serviceId" element={<Service/>}/>
                </Routes>
            </div>
        </>
    );
}

export default OuterContainer;
