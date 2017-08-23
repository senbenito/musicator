
import React, {Component} from 'react';

class Tunes extends Component{
  constructor(props){
     super(props)
   }
   render(){
      let url = `http://www.youtube.com/embed/${this.props.song}`
      let elm = <iframe
          id="player"
          type="text/html"
          width="640"
          height="390"
          src= {url}
          frameBorder="0">
          </iframe>

      return(
         <div>
           { elm }
         </div>
      )
   }
}

export default Tunes
