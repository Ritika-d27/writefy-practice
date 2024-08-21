import React, { useState } from 'react';
import '../styles/components/howitworks.css'
import step1 from "../assets/home/Person.png"
import step2 from "../assets/getYourWorkDone.png"
import step3 from "../assets//howitworks2updated.png"

interface StepContent {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    text: string;
}

const steps: StepContent[] = [
    {
        id: 1,
        text: 'Post Your Requirements.',
        title: 'Post Your Requirements',
        description: 'Kickstart your journey by posting your assignment details. Its simple and quick – just share what you need, and you are all set!',
        imageUrl: step1
    },
    {
        id: 2,
        text: 'Connect with Writers',
        title: 'Connect with Writers',
        description: 'Spend coins to open a chat with the best-suited writers. Discuss your project directly and ensure its tailored to your needs.',
        imageUrl: step3,
    },
    {
        id: 3,
        text: 'Get Your Work Done',
        title: 'Get Your Work Done',
        description: 'Sit back and relax while our expert writers handle your assignment. Receive high-quality work on time, every time!',
        imageUrl: step2,
    },
];


const HowItWorks : React.FC = () => {

    const [activeStep, setActiveStep] = useState<number>(1);

    const handleStepClick = (stepId: number) => {
        setActiveStep(stepId);
    };

    const activeContent = steps.find(step => step.id === activeStep);

    return (
        <div>
        <span className='header'>How it Works</span>

        <div className="how-it-works-container">
            <div className="steps-container">
                {steps.map(step => (
                    <>
                    <div className='button'>
                    <div
                        key={step.id}
                        className={`step-button ${activeStep === step.id ? 'active' : ''}`}
                        onClick={() => handleStepClick(step.id)}>
                        0{step.id}
                    </div>
                    <div
                        key={step.title}
                        className={`step-button1 ${activeStep === step.id ? 'active' : ''}`}
                        onClick={() => handleStepClick(step.id)}>
                        {step.title}
                    </div>
                    </div>
                    </>
                ))}
            </div>
            {activeContent && (
                <div className="content-container">
                    <img src={activeContent.imageUrl} alt={activeContent.title} className="content-image" />
                    <div className="content-text">
                        <h2 className='margin'>{activeContent.title}</h2>
                        <p className='margin'>{activeContent.description}</p>
                    </div>
                </div>
            )}
        </div>
        </div>
    )
}


export default HowItWorks;