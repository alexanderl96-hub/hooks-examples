import { Switch, Route } from "react-router-dom"
import DogRandom from "./DogRandom"
import DogRandomNum from "./DogRandomNum"

const Dogs = () => {
    return (
        <Switch>
            <Route exact path="/dog/random" component={DogRandom}/>
            <Route path="/dog/random/:num" component={DogRandomNum}/>
        </Switch>
    )
}

export default Dogs
