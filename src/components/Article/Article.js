import axios from "axios";
import React, {Component} from "react";

import "./Article.css";

class Article extends Component {

   constructor(){
      super()
      this.state = {data: ""};
   }

   async componentDidMount() {
      const pathname = this.getURLPathname();
      try {
         const response = await axios.post("http://localhost:5000/articles/article", {pathname});
         this.changeURL(response.data[0].Heading);
         this.setState({data: response.data[0].Content});
      } catch (err) {
         console.error("didmount-Article", err);
      }
   }

   getURLPathname() {
      let pathname = window.location.pathname.split("/")[2];
      return pathname;
   }

   changeURL(data){
      const url = this.dashedString(data);
      window.history.replaceState(null, '', url);
   }

   dashedString(str){
      return str.split(' ').join('-');
   }

   render() {
      return (
         <p className="container article">{this.state.data}</p>
      );
   }
}

export default Article;