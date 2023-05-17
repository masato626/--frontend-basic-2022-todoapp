import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Input = ({ onEdotComplete, defaultValue = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.value = defaultValue;
  }, []);

  return <StyledInput ref={ref} />;
};
export default Input;
