import React from 'react'
import './HomeContainer.css'
import TopBox from "../../components/homePage/topBox/TopBox";
import ChartBox from "../../components/homePage/chartBox/ChartBox";
import {
	chartBoxConversion,
	chartBoxProduct,
	chartBoxRevenue,
	chartBoxUser,
} from "../../data";

const HomeContainer = () => {
	return (
		<div className="home-container">
			<div className="box box1">
				<TopBox />
			</div>
			<div className="box box2">
				<ChartBox {...chartBoxUser} />
			</div>
			<div className="box box3">
				<ChartBox {...chartBoxRevenue} />
			</div>
			<div className="box box4"></div>
			<div className="box box5">
				<ChartBox {...chartBoxProduct} />
			</div>
			<div className="box box6">
				<ChartBox {...chartBoxConversion} />
			</div>
			<div className="box box7">box 7</div>
			<div className="box box8">box 8</div>
			<div className="box box9">box 9</div>
		</div>
	);
};

export default HomeContainer
