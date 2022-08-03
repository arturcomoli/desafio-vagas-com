import { useEffect, useState } from "react";
import { IDidMountHook } from "./interfaces";

const useDidMountEffect = ({
  handleStickersErrors,
  handleChoicesError,
  deps,
}: IDidMountHook) => {
  const [test, setTest] = useState<boolean>(false);

  useEffect(() => {
    if (test) {
      handleStickersErrors();
      return handleChoicesError();
    }
    setTest(true);
  }, deps);
};
export default useDidMountEffect;
