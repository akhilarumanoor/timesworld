import "./home.scss";
import { getFlag } from "../../Redux/homepage";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../Components/footer";
import Menu from "../../Components/menu";

function Home() {
  const dispatch = useDispatch();
  const { getFlagData, getFlagBegin } = useSelector((state) => state.homePage);
  const [displayList, setDisplayList] = useState([]);
  const [filterKey, setFilterKey] = useState("all");
  useEffect(() => {
    if (getFlagData.length === 0) dispatch(getFlag());
  }, [getFlagData, dispatch]);
  useEffect(() => {
    if (getFlagData.length > 0) {
      if (filterKey === "all") {
        setDisplayList(getFlagData);
      } else {
        setDisplayList(getFlagData.filter((i) => i.region === filterKey));
      }
    }
  }, [getFlagData, filterKey]);

  return (
    <div className="homepage">
      <div className="container">
        <div className="top-header">
          <div>
            <h3>Countries</h3>
          </div>
          <div>
            <div className="menu">
              <Menu
                items={
                  <Fragment>
                    <Link
                      onClick={() => setFilterKey("all")}
                      className={filterKey === "all" ? "active" : ""}
                    >
                      All
                    </Link>
                    <Link
                      onClick={() => setFilterKey("Asia")}
                      className={filterKey === "Asia" ? "active" : ""}
                    >
                      Asia
                    </Link>
                    <Link
                      onClick={() => setFilterKey("Europe")}
                      className={filterKey === "Europe" ? "active" : ""}
                    >
                      Europe
                    </Link>
                  </Fragment>
                }
              />
            </div>
          </div>
        </div>
        <div className="Countrieslist">
          {getFlagBegin && <div className="loading">Loading....</div>}
          {!getFlagBegin &&
            displayList.map((item) => (
              <div className="eachItem" key={item.name}>
                <div className="item">
                  <div className="flag">
                    <img src={item.flag} alt={item.name} />
                  </div>
                  <div className="item-text">
                    <h3>{item.name}</h3>
                    <label>{item.region}</label>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
