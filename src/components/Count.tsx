import { useMemo } from "react";

const Count = () => {
  const expensive = useMemo(() => {
    for (let i = 0; i <= 200; i++) {
      // Calculation
    }

    return 232300;
  }, []);

  return (
    <div>Count: {expensive}</div>
  );
};

export default Count;