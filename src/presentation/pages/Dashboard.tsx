// src/pages/Dashboard.tsx
import StepCountChart from '../components/organisms/StepCountChart';
import React from "react";

const Dashboard: React.FC = () => {
    const stepData = [500, 600, 700, 800, 900];
    const dateLabels = ['日1', '日2', '日3', '日4', '日5'];

    return (
        <div>
            <h1>歩数記録</h1>
            <StepCountChart data={stepData} labels={dateLabels}/>
        </div>
    );
};

export default Dashboard;
