import { useAlertHandlerContext } from "../../../contexts/AlertHandler";
import React, { useEffect, useState } from "react";
import Alert from "../../Atoms/Alert";

const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();
  const [timeoutHandler, setTimeoutHandler] = useState(null);

  useEffect(() => {
    if (timeoutHandler !== null) {
      window.clearTimeout(timeoutHandler);
    }
    const newTimeoutHandler = setTimeout(() => {
      AlertHandlerContext.closeAlert();
      setTimeoutHandler(null);
    }, 5000);
    setTimeoutHandler(newTimeoutHandler);
  }, [AlertHandlerContext]);
  return (
    <Alert
      visible={AlertHandlerContext.visible}
      errorText={AlertHandlerContext.errorText}
    />
  );
};
export default AlertManager;
