import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Todo from './pages/Todo';
import About from './pages/About';


function RoutesApp(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Todo/>}/>
            <Route path="/sobre" element={<About/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;