import React from 'react'
import './HomeContainer.css'
import TopBox from "../../components/homePage/topBox/TopBox";
import ChartBox from "../../components/homePage/chartBox/ChartBox";
import {
	barChartBoxRevenue,
	barChartBoxVisit,
	chartBoxConversion,
	chartBoxProduct,
	chartBoxRevenue,
	chartBoxUser,
} from "../../data";
import BarChartBox from "../../components/homePage/barChart/BarChartBox";
import PieChartBox from "../../components/homePage/pieChartBox/PieChartBox";
import AreaGraphBox from "../../components/homePage/areaGraphBox/areaGraphBox";

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
			<div className="box box4">
				<PieChartBox />
			</div>
			<div className="box box5">
				<ChartBox {...chartBoxProduct} />
			</div>
			<div className="box box6">
				<ChartBox {...chartBoxConversion} />
			</div>
			<div className="box box7">
				<AreaGraphBox />
			</div>
			<div className="box box8">
				<BarChartBox {...barChartBoxVisit} />
			</div>
			<div className="box box9">
				<BarChartBox {...barChartBoxRevenue} />
			</div>
		</div>
	);
};

export default HomeContainer
