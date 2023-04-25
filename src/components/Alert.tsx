import { ReactNode } from "react";
import "./Alert.css";

type AlertType = "info" | "success" | "warning" | "danger";

interface AlertProps {
  children: ReactNode;
  show: boolean;
  type?: AlertType;
  close: () => void;
}

const AlertComponent = (props: AlertProps) => {
  const { children, type='info', show=false, close } = props;
  return (
    <div className={`alert ${type} ${show ? "show" : ""}`}>
      <span className="closebtn" onClick={() => close()}>
        &times;
      </span>
      {children}
    </div>
  );
}

export default AlertComponent;