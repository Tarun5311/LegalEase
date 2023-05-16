import React, { useEffect, useState } from "react";
import LawyerCard from "../components/LawyerCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/lawyers.css";
import fetchData from "../helper/apiCall";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/reducers/rootSlice";
import Empty from "../components/Empty";

const Lawyers = () => {
  const [lawyers, setLawyers] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);

  const fetchAllDocs = async () => {
    dispatch(setLoading(true));
    const data = await fetchData(`/lawyer/getalllawyers`);
    setLawyers(data);
    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchAllDocs();
  }, []);

  return (
    <>
      <Navbar />
      {loading && <Loading />}
      {!loading && (
        <section className="container lawyers">
          <h2 className="page-heading">Our Lawyers</h2>
          {lawyers.length > 0 ? (
            <div className="lawyers-card-container">
              {lawyers.map((ele) => {
                return (
                  <LawyerCard
                    ele={ele}
                    key={ele._id}
                  />
                );
              })}
            </div>
          ) : (
            <Empty />
          )}
        </section>
      )}
      <Footer />
    </>
  );
};

export default Lawyers;
