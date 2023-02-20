import React from "react";
import styles from "./CSSModule.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles); //미리 styles에서 클래스를 받아 오도록 설정

const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      hi i am <span className="something">css module</span>
    </div>
  );
};

export default CSSModule;
