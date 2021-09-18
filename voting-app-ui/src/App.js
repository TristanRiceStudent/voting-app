import "./styles/style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VoteCreationContainer from "./components/voting-form/VoteCreationContainer";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <VoteCreationContainer />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
