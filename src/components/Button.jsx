import { useEffect, useRef, useState } from "react";
const Button_text = {
  normal: "버튼이 눌리지 않았다.",
  clicked: "버튼이 방금 눌렸다.",
};

export default function Button() {
  const timer = useRef();
  const [message, setMessage] = useState(Button_text.normal);
  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);
  return (
    <div>
      <p>{message} </p>{" "}
      <button disabled={message === Button_text.clicked} onClick={click}>
        button
      </button>
    </div>
  );
  function click() {
    setMessage(Button_text.clicked);
    timer.current = setTimeout(() => {
      setMessage(Button_text.normal);
    }, 5000);
  }
}
