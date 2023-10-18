import React from "react";

import "./BarChart.css";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

const BarChartBox = (props) => {
	return (
		<div className="barChart">
			<div className="bar-title">{props.title}</div>
			<div className="bar-chart">
				<ResponsiveContainer width="99%" height={150}>
					<BarChart data={props.chartData}>
						<Tooltip
							contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
							labelStyle={{ display: "none" }}
							cursor={{ fill: "none" }}
						/>
						<Bar dataKey={props.dataKey} fill={props.color} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default BarChartBox;
