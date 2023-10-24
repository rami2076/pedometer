import React from 'react';
import Dashboard from './presentation/pages/Dashboard';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                {/* 他のページを追加 */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
