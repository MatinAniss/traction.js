// Imports
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

// Typescript types for Traction props
interface TractionProps {
  color: string;
  incrementInterval: number;
  incrementAmount: number;
  transitionDuration: number;
  transitionTimingFunction: "ease" | "linear" | "ease-in" | "ease-out" | "ease-in-out";
}

const Traction = (props: TractionProps) => {
  // Declare states
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Progress bar inline styling
  const styling = {
    position: "fixed",
    top: 0,
    left: 0,
    width: `${progress}%`,
    height: "2px",
    backgroundColor: props.color,
    transition: `width ${props.transitionDuration}ms ${props.transitionTimingFunction}`,
    opacity: isVisible ? 1 : 0
  } as React.CSSProperties;

  useEffect(() => {
    // Declare timeout
    let increment: NodeJS.Timeout;

    // Route change start function
    const onRouteChangeStart = () => {
      setIsVisible(true);
      setProgress(props.incrementAmount);
      increment = setInterval(() => {
        setProgress((progress) => Math.min(progress + props.incrementAmount, 90));
      }, props.incrementInterval);
    };

    // Route change complete function
    const onRouteChangeComplete = () => {
      clearInterval(increment);
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, props.transitionDuration);
    };

    // Route change error function
    const onRouteChangeError = () => {
      clearInterval(increment);
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, props.transitionDuration);
    };

    // Router event listeners
    router.events.on("routeChangeStart", onRouteChangeStart);
    router.events.on("routeChangeComplete", onRouteChangeComplete);
    router.events.on("routeChangeError", onRouteChangeError);

    // Use effect return
    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart);
      router.events.off("routeChangeComplete", onRouteChangeComplete);
      router.events.off("routeChangeError", onRouteChangeError);
      clearInterval(increment);
    };
  }, []);

  return <div style={styling}></div>;
};

// Traction default props
Traction.defaultProps = {
  color: "#FF0000",
  incrementInterval: 100,
  incrementAmount: 10,
  transitionDuration: 500,
  transitionTimingFunction: "ease"
};

export default Traction;
