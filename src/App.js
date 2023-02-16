import Footer from '~/components/Footer';
import FormContainer from '~/components/FormContainer';
import HomeScreen from '~/Screen/HomeScreen';

function App() {
    return (
        <FormContainer className="App">
            <HomeScreen />
            <Footer />
        </FormContainer>
    );
}

export default App;
