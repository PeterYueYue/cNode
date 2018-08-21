import React, { Component } from 'react';
import 'antd/dist/antd.css'
import RouterIndex from "./router/index";
import MainHeader from "./view/main-header"
import MainFooter from "./view/main-footer"
import  "./view/index.css";
class App extends Component {
  render() {
    return <div className="pageWrap">

      <MainHeader/>
      <main className="main">
      <RouterIndex/>
      
      </main>
      <MainFooter/>

    </div>
  }
}

export default App;
