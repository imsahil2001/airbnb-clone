import React, { useState } from "react";
import "./Banner.css";
import Button from "@material-ui/core/Button";
// import Search from "@material-ui/icons/Search";
import Search from "./Search";
import { useHistory } from "react-router-dom";
function Banner() {
	const [showSearch, setshowSearch] = useState(false);
	const history = useHistory();

	return (
		<div className="banner">
			{showSearch && <Search />}
			<div className="banner__search">
				<Button
					onClick={() => {
						setshowSearch(!showSearch);
					}}
					className="banner__searchButton"
					variant="outlined"
				>
					{showSearch ? "Hide" : "Search Dates"}
				</Button>
			</div>
			<div className="banner__info">
				<h1>Get out and stretch your imagination</h1>
				<h5>
					Plan a different kind of getaway to uncover the hidden gems near you.
				</h5>
				<Button
					variant="outlined"
					onClick={() => {
						history.push("/search");
					}}
				>
					Exlpore Nearby
				</Button>
			</div>
		</div>
	);
}

export default Banner;
