import React ,{Component} from 'react'
import Timer from './Timer'
import Controls from './Controls'

export default class Countdown extends Component{
        render(){
            return <section className="hero is-dark is-fullheight">
                <div className="hero-body">
                <div className="container">
                <h1 className="title has-text-centered">
              New year is coming up
            </h1>
            <section className = "section">
                <Timer/>
            </section>
                </div>
                </div>
            </section>
            
        }
}
