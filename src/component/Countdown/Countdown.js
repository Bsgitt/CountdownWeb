import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import moment from 'moment'
import Controls from './Controls'

export default  class Countdown extends Component {
    constructor(props){
      super(props)
     
      this.state = {
        duration:this.getRemainingTime(),
        paused: false

      }
        
    }

      getRemainingTime(){
        let now = moment(),
            newYear = moment({year:now.year()+1}),
            diff = newYear.diff(now)
            return moment.duration(diff)
           
      }
      componentDidMount(){
        this.resume()
      }
      componentWillUnmount(){
        this.paused()
      }

      handlePausedToggle=()=>{
        this.setState((prevState,props)=>{
          const paused = !prevState.paused
          if(paused){
            this.paused()
          }else{
            this.resume()
          }
          return{
            paused
          }
        })
      }
        paused(){
          clearInterval(this.interval)
        }
        resume(){
          this.interval = setInterval(()=>{
            this.setState({
              duration: this.getRemainingTime()
            })
          },1000)
        }
        render() {
      const {duration, paused} = this.state
    return (
        <section className="hero is-dark is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">
              New year is coming up
            </h1>
            <nav className="level">
  <div className="level-item has-text-centered">
    <section className = "section">
      <p className="heading">Days</p>
      <p className="title">{Math.floor(duration.asDays())}</p>
    </section>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Hours</p>
      <p className="title">{duration.hours().toString().padStart(2,'0')}</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Minutes</p>
      <p className="title">{duration.minutes().toString().padStart(2,'0')}</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Seconds</p>
      <p className="title">{duration.seconds().toString().padStart(2,'0')}</p>
     

    </div>
  </div>
</nav>
      <Controls paused ={paused} onPausedToggle ={this.handlePausedToggle} />
          </div>
        </div>
          </section>
    )
  }
}
