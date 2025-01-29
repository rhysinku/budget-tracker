import {Header} from "./Components/Header.tsx";
import Calculator from "./Components/Calculator.tsx";

function App() {
    return (
        <> <Header/>
           <div className={'h-screen flex items-center justify-center flex-col'}>

               <Calculator/>
           </div>
        </>
    )
}

export default App