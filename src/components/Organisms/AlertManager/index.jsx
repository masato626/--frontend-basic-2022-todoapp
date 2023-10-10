import { useAlertHandlerContext } from "path/to/contexts/alert_handler";
import { useEffect, useState } from "react";

const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();
  const [timeoutHandler, setTimeoutHandler] = useState(null);

  useEffect(() => {
    if (timeoutHandler !== null) {
      setTimeout(timeoutHandler);
    }
    const newTimeoutHandler = setTimeout(() => {
      AlertHandlerContext.closeAlert();
      setTimeoutHandler(null);
    }, 5000);
    setTimeoutHandler(newTimeoutHandler);
  }, [AlertHandlerContext]);
  AlertHandlerContext.setAlert("message");
};
export default AlertManager;
