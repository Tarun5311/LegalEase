import "./styles/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { Protected, Public, Admin } from "./middleware/route";
import React, { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Appointments = lazy(() => import("./pages/Appointments"));
const Lawyers = lazy(() => import("./pages/Lawyers"));
const Profile = lazy(() => import("./pages/Profile"));
const Notifications = lazy(() => import("./pages/Notifications"));
const ApplyLawyer = lazy(() => import("./pages/ApplyLawyer"));
const Error = lazy(() => import("./pages/Error"));

function App() {
  return (
    <Router>
      <Toaster />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={
              <Public>
                <Register />
              </Public>
            }
          />
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/lawyers"
            element={<Lawyers />}
          />
          <Route
            path="/appointments"
            element={
              <Protected>
                <Appointments />
              </Protected>
            }
          />
          <Route
            path="/notifications"
            element={
              <Protected>
                <Notifications />
              </Protected>
            }
          />
          <Route
            path="/applyforlawyer"
            element={
              <Protected>
                <ApplyLawyer />
              </Protected>
            }
          />
          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route
            path="/dashboard/users"
            element={
              <Admin>
                <Dashboard type={"users"} />
              </Admin>
            }
          />
          <Route
            path="/dashboard/lawyers"
            element={
              <Admin>
                <Dashboard type={"lawyers"} />
              </Admin>
            }
          />
          <Route
            path="/dashboard/appointments"
            element={
              <Protected>
                <Dashboard type={"appointments"} />
              </Protected>
            }
          />
          <Route
            path="/dashboard/applications"
            element={
              <Protected>
                <Dashboard type={"applications"} />
              </Protected>
            }
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
