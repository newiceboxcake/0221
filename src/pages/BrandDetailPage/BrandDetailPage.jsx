import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const BrandDetailPage = () => {
  const { brandId } = useParams();
  useEffect(() => {
    // 데이터
  }, []);

  return <div>현재 브랜드의 아이디는???{brandId}</div>;
};

export default BrandDetailPage;
