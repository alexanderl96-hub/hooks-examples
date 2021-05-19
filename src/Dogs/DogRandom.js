import { Component } from "react";
import { getDog } from "./DogsAPI"

class DogRandom extends Component {
    constructor() {
        super()
        this.state = { dogImage: "" }
    }

    setRandomDog = async () => {
        const dogImage = await getDog()
        this.setState({ dogImage })
    }

    componentDidMount() {
       this.setRandomDog()
    }

    render() {
        const { dogImage } = this.state

        return (
            <div>
                <img src={dogImage} alt="random dog"/>
                <button onClick={this.setRandomDog}>New Random Dog</button>
            </div>
        )
    }


} 

export default DogRandom