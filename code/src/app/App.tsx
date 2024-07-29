import './styles/reset.css';
import './styles/index.css';
import { Header } from 'widgets/header';
import { HowItWorks } from 'widgets/howItWorks';
import { ThirdBlock } from 'widgets/thirdBlock';
import { Slider } from 'widgets/slider';
import { FAQ } from 'widgets/faq';
import { FinancialChallenges } from 'widgets/financialChallenges';
import { Form } from 'widgets/form';
import { Footer } from 'widgets/footer';

const App = () => {
    return (
        <div className='App'>
            <Header />
            <HowItWorks />
            <ThirdBlock />
            <Slider />
            <FAQ />
            <FinancialChallenges />
            <Form />
            <Footer />
        </div>
    );
};

export default App;
