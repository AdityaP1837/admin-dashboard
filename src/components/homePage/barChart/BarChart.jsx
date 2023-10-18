import React from "react";

const BarChart = (props) => {
	return (
		<div className="barChart">
			<div className="bar-title">{props.title}</div>
			<div className="bar-chart">
				<ResponsiveContainer width="99%" height="100%">
					<BarChart data={props.chartData}>
						<Bar dataKey="uv" fill="#8884d8" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default BarChart;
