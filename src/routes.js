import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Todo from './pages/Todo';
import About from './pages/About';
import Error from './pages/Error';


function RoutesApp(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Todo/>}/>
            <Route path="/sobre" element={<About/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;