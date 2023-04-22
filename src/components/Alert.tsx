import { ReactNode } from "react";
import "./Alert.css";

interface AlertProps {
  type: string;
  show: boolean;
  children: ReactNode;
  close: (show: boolean) => void;
}

const AlertComponent = (props: AlertProps) => {
  const { children, type, show, close } = props;
  return (
    <div className={`alert ${type} ${show ? "show" : ""}`}>
      <span className="closebtn" onClick={() => close(false)}>
        &times;
      </span>
      {children}
    </div>
  );
}

export default AlertComponent;