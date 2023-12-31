"use client";

import { SVG } from "@svgdotjs/svg.js";
import { useEffect, useMemo, useRef } from "react";

export default function Home() {
  const SVGWrapperRefElement = useRef(null);
  const SVGContainer = useMemo(() => SVG(), []);

  const draw = () => {
    SVGContainer.add(SVG().rect(100, 100).fill("#f06"));
  };

  const clear = () => {
    SVGContainer.clear();
  };

  useEffect(() => {
    if (SVGWrapperRefElement && SVGWrapperRefElement?.current) {
      SVGContainer.addTo(SVGWrapperRefElement?.current);
    }
  }, [SVGWrapperRefElement, SVGContainer]);

  return (
    <div className="app">
      <button onClick={draw}>Draw</button>
      <button onClick={clear}>Clear</button>
      <div ref={SVGWrapperRefElement} />
    </div>
  );
}
