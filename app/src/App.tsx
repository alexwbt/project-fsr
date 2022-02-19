import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Pages from "./pages";
import Home from "./pages/home";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #efeff0;
    }
`;

const App: React.FC = () => <>
    <GlobalStyle />
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Pages />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
</>;

export default App;
