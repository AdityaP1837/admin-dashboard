import React from "react";
import { topDealUsers } from "../../../data";
import "./TopBox.css";

const TopBox = () => {
	return (
		<div className="topBox">
			<h1>Top Deals</h1>
			<ul className="topBox-lists">
				{topDealUsers.map((deals) => (
					<li key={deals.id}>
						<div className="left">
							<img src={deals.img} alt={deals.username} />
							<div className="dealsInfo">
								<h4>{deals.username}</h4>
								<span>{deals.email}</span>
							</div>
						</div>
						<div className="right">
							<span>${deals.amount}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TopBox;
