import { useEffect, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, SetPortfolioData, ShowLoading } from "./store/rootSlice";
import axios from "axios";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const fetchDataInside = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response?.data));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
    }
  };
  useEffect(() => {
    if (!portfolioData) {
      fetchDataInside();
    }
  }, [portfolioData]);

  return (
    <Router>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
