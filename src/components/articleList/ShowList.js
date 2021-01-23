import React, {Component, Fragment} from "react";

import ListCard from "./ListCard";
import Article from "../Article/Article";

class List extends Component {

   constructor(props){
      super(props);
      console.log(props);
   }

   componentDidMount() {
      console.log("123", this.props.data);
      // return <Article id={id} />;
   }

   articleList() {
      return this.props.data.map(data => {
         return <ListCard key={data._id} id={data._id} data={data} />;
      });
   };

   render() {
      return (
         <Fragment>
            <div className="grid-container">{this.articleList()}</div>
         </Fragment>
      );
   }
}

export default List;