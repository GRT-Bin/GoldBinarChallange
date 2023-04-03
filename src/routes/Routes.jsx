import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import Home from "../Pages/Home";
import Pencarian from "../Pages/Pencarian";
import DetailSewaMobil from "../Pages/DetailSewaMobil";
import HasilPencarian from "../Pages/HasilPencarian";
import Notfound from "../Pages/Notfound";

const Routes = () => {
  return [
    { path: "/", element: <Home /> },
    { path: "/hasilPencarian", element: <HasilPencarian /> },
    { path: "/*", element: <Notfound /> },
    { path: "/Pencarian", element: <Pencarian /> },
    { path: "/detailSewaMobil/:id", element: <DetailSewaMobil /> },
  ];
};

export default Routes;
