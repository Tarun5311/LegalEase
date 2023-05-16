import React, { useState, useEffect } from "react";
import "../styles/user.css";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "./Loading";
import { setLoading } from "../redux/reducers/rootSlice";
import { useDispatch, useSelector } from "react-redux";
import Empty from "./Empty";
import fetchData from "../helper/apiCall";

axios.defaults.baseURL = 'http://192.168.49.2:30001/api';

const AdminLawyers = () => {
  const [lawyers, setLawyers] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);

  const getAllLawyers = async (e) => {
    try {
      dispatch(setLoading(true));
      const temp = await fetchData(`/lawyer/getalllawyers`);
      setLawyers(temp);
      dispatch(setLoading(false));
    } catch (error) {}
  };

  const deleteUser = async (userId) => {
    try {
      const confirm = window.confirm("Are you sure you want to delete?");
      if (confirm) {
        const { data } = await toast.promise(
          axios.put(
            "/lawyer/deletelawyer",
            { userId },
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          ),
          {
            success: "Lawyer deleted successfully",
            error: "Unable to delete Lawyer",
            loading: "Deleting Lawyer...",
          }
        );
        getAllLawyers();
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getAllLawyers();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="user-section">
          <h3 className="home-sub-heading">All Lawyers</h3>
          {lawyers.length > 0 ? (
            <div className="user-container">
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Pic</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Mobile No.</th>
                    <th>Experience</th>
                    <th>Specialization</th>
                    <th>Fees</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {lawyers?.map((ele, i) => {
                    return (
                      <tr key={ele._id}>
                        <td>{i + 1}</td>
                        <td>
                          <img
                            className="user-table-pic"
                            src={ele.userId.pic}
                            alt={ele.userId.firstname}
                          />
                        </td>
                        <td>{ele.userId.firstname}</td>
                        <td>{ele.userId.lastname}</td>
                        <td>{ele.userId.email}</td>
                        <td>{ele.userId.mobile}</td>
                        <td>{ele.experience}</td>
                        <td>{ele.specialization}</td>
                        <td>{ele.fees}</td>
                        <td className="select">
                          <button
                            className="btn user-btn"
                            onClick={() => {
                              deleteUser(ele.userId._id);
                            }}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <Empty />
          )}
        </section>
      )}
    </>
  );
};

export default AdminLawyers;
