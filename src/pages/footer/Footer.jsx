import React from "react";

const Footer = () => {
	const date = new Date();
	return (
		<footer
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "20px",
        borderTop: '2px solid var(--soft-bg)'
			}}
		>
			<div className="footer1">admin dashboard</div>
			<div className="footer2">© {date.getFullYear()} Made by A.P</div>
		</footer>
	);
};

export default Footer;
