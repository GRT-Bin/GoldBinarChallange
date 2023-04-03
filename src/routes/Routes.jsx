import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import Home from "../Pages/Home";
import Pencarian from "../Pages/Pencarian";
import DetailSewa from "../Pages/DetailSewaMobil";

const Routes = () => {
  return [
    { path: "/", element: <Home /> },
    { path: "/hasilPencarian", element: <Pencarian /> },
    { path: "/detailSewaMobil/:id", element: <DetailSewa /> },
  ];
};

export default Routes;
