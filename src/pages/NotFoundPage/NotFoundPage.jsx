import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import style from "./NotFoundPage.module.css";

import NotFoundImg from "../../images/icon/browser-error-404-icon.svg";

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
      <p className={style.notFoundText}>Page not exist</p>
      <button onClick={handleRedirect}>Back to Home Page!</button>
    </div>
  );
}
