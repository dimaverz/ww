import React from 'react';
import Reflux from 'reflux';

var store = Reflux.createStore({
    data: {message: 0},

    init() {
        setInterval(()=>{
            this.data.message++;
            this.trigger(this.data);
        }, 1000)
    },

    getInitialState() {
        return this.data;
    }
})

//class Dashboard extends React.Component {
var Dashboard = React.createClass({

  mixins: [Reflux.connect(store)],

  render(){
    return (
      <div>
        Dashboard {this.state.message}
      </div>
    );
  }

})

/*const Dashboard = ( props ) => {

      mixins: [Reflux.connect(store)];
      console.log(this.state);

      return (
          <div className="row">
              Dashboard
          </div>
      );

};*/

export default Dashboard;
