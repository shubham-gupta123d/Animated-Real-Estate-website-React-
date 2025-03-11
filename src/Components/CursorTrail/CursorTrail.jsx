import { useEffect, useState } from "react";
import "./CursorTrail.css";

const CursorTrail = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [circles, setCircles] = useState(new Array(30).fill({ x: 0, y: 0 }));
  const [cursorColor, setCursorColor] = useState("black");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });

      // Get the element under the cursor
      let element = document.elementFromPoint(e.clientX, e.clientY);
      let bgColor = "rgb(255, 255, 255)"; // Default set hai white background

      while (element) {
        const computedStyle = window.getComputedStyle(element);
        const currentBgColor = computedStyle.backgroundColor;

        // If the element has a solid background, use it
        if (currentBgColor && currentBgColor !== "rgba(0, 0, 0, 0)" && currentBgColor !== "transparent") {
          bgColor = currentBgColor;
          break;
        }
        element = element.parentElement; //parents move
      }

      // Check my background color white or black
      setCursorColor(isDarkColor(bgColor) ? "white" : "black");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animateCircles = () => {
      setCircles((prevCircles) =>
        prevCircles.map((circle, index) => {
          const nextCircle = prevCircles[index - 1] || coords;
          return {
            x: circle.x + (nextCircle.x - circle.x) * 0.9,
            y: circle.y + (nextCircle.y - circle.y) * 0.9,
          };
        })
      );
      animationFrameId = requestAnimationFrame(animateCircles);
    };

    animationFrameId = requestAnimationFrame(animateCircles);
    return () => cancelAnimationFrame(animationFrameId);
  }, [coords]);

  // mera function determine karega  a color is dark
  const isDarkColor = (color) => {
    if (!color.startsWith("rgb")) return false;
    const rgb = color.match(/\d+/g).map(Number);
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    return brightness < 128; 
  };

  return (
    <div className="cursor">
      {circles.map((pos, index) => (
        <div
          key={index}
          className="circle"
          style={{
            left: pos.x + "px",
            top: pos.y + "px",
            backgroundColor: cursorColor, // Change color dynamically
            transform: `scale(${(circles.length - index) / circles.length})`,
            opacity: (circles.length - index) / circles.length,
          }}
        ></div>
      ))}
    </div>
  );
};

export default CursorTrail;
