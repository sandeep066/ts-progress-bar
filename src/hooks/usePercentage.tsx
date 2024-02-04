import { useState, useEffect } from "react";

const usePercentage = () => {
  const [percentage, setPercentage] = useState<number>(0);
  const [complete, setComplete] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (percentage < 100) {
      interval = setInterval(() => {
        setPercentage((prev) => prev + 1);
      }, 100);
    } else {
      if (!complete) setComplete(true);
    }
    return () => clearInterval(interval);
  }, [percentage, complete]);

  return { percentage, complete };
};

export default usePercentage;
