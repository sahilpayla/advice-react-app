import axios from 'axios';
import React from 'react'
import './App.css';
class App extends React.Component {
    state = { advice: '' }

    componentDidMount() {
        this.fetchAdvice()
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice: advice })
                console.log(response)
            })
            .catch((response) => {
                console.log(response)
            })
    }

    render() {
        const {advice} = this.state;

        return (
            // <h1>{this.state.advice}</h1>
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'> {advice} </h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>
                            Give Me Advice !
                        </span>
                    </button>
                </div>
            </div>
        )
    }
}

export default App