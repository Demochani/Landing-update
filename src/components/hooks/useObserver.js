import { useRef } from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef()

  useEffect(() => {
    if (isPostLoading) return;
    if (observer.current) observer.current.disconnect();
    var callb = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad ) {
        callback()
      }
    }; ////////////////
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(ref.current);
  }, [isLoading]);
};
