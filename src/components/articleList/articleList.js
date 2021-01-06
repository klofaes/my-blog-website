import React, {Component, Fragment} from "react";
import axios from "axios";

import ShowList from "./ShowList";

import "./articleList.css";

class articleList extends Component {
	state = {articles: []};

	async componentDidMount() {
		try {
			const response = await axios.get("http://localhost:5000/");
			this.setState({articles: response.data});
		} catch (err) {
			console.error(`getArticle-fend ${err}`);
		}
	}

	render() {
		return (
			<Fragment>
				<ShowList data={this.state.articles} ></ShowList>
			</Fragment>
		);
	}
}

export default articleList;

// let List = () => {
// 	return (
// <Fragment>
// 	<div className="container posts">
// 		<div className="sub_heading">
// 			<h2>TRAIN OF THOUGHT</h2>
// 		</div>
// 		<div className="card-secondary">
			// <div className="img-list">
			// 	<img
			// 		src="https://static.wixstatic.com/media/c22c23_ce814068dce044c7b79559dc0c26b79c~mv2.png/v1/fill/w_312,h_416,fp_0.50_0.50,q_90/c22c23_ce814068dce044c7b79559dc0c26b79c~mv2.webp"
			// 		alt="journal"
			// 	></img>
			// </div>
// 			<div className="card-text-list">
// 				<p>Nov 15 . 5 min read</p>
// 				<h3>Top 5 Items Under 20$ I Can't Live Without</h3>
// 				<p className="content">
// 					Create a blog post subtitle that summarizes your post in a
// 					few short, punchy sentences and entices your audience to
// 					continue reading. WelOfficia et excepteur amet excepteur
// 					do. Irure veniam quis deserunt labore id consequat et amet
// 					aliqua dolore eu labore sit...
// 				</p>
// 				<p className="views">0 views</p>
// 			</div>
// 		</div>
// 	</div>
// </Fragment>
// 	);
// };
