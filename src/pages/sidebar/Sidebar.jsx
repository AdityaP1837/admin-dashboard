import React from "react";
import { menu } from "../../data";
import { Link } from "react-router-dom";

import './Sidebar.css'

const Sidebar = () => {
	return (
		<div className="sidebar">
			{menu.map((menuItem) => (
				<div className="sidebar-items" key={menuItem.id}>
					<span className="title">{menuItem.title}</span>
					<div className="items">
						{menuItem.listItems.map((listItem) => (
							<Link to={listItem.url} key={listItem.id} className="items-content">
									<img src={`/assets/${listItem.icon}`} alt="" />
									<span>{listItem.title}</span>
							</Link>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Sidebar;
