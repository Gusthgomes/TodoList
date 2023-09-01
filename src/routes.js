import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Todo from './pages/Todo';


function RoutesApp(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Todo/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;