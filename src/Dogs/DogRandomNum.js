import { Component } from "react"
import { getDogs } from "./DogsAPI"

class DogRandomNum extends Component {
    constructor() {
        super()
        this.state = { dogImages: [] }
    }

    setDogImages = async () => {
        const { match } = this.props
        const dogImages = await getDogs(match.params.num)
        this.setState({ dogImages })
    }

    componentDidMount() {
        this.setDogImages()
    }

    render(){
        const { dogImages } = this.state
        return (
            <div>
                {dogImages.map((image, i) => <img src={image} key={i}/>)}
            </div>
        )
    }
}

export default DogRandomNum