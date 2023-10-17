import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import Sidebar from "./pages/sidebar/Sidebar";
import Footer from "./pages/footer/Footer";
import HomeContainer from "./pages/homeContainer/HomeContainer";

function Home() {
	return (
		<>
			<Navbar />
			<div className="content">
				<div className="sidebarTab">
					<Sidebar />
				</div>
				<div className="mainTab">
					<Routes>
						<Route path="/" element={<HomeContainer />} />
					</Routes>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Home;
