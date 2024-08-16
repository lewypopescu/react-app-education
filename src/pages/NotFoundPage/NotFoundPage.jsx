import React from "react";
import NotFoundImg from "../../images/error-404svg.svg";
import style from "./NotFoundPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/faculties";

  const handleRedirect = () => {
    navigate(backLinkHref);
  };

  return (
    <div className={style.notFoundContainer}>
      <img className={style.notFoundImg} src={NotFoundImg} alt="Not Found" />
      <p className={style.notFoundText}>Not Found</p>
      <button onClick={handleRedirect}>Back to Home Page!</button>
    </div>
  );
}
