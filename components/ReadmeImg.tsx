import React from "react";

const ReadmeImg = ({ width, height, children }) => {
  return (
    <foreignObject width={width} height={height}>
      <div {...{ xmlns: "http://www.w3.org/1999/xhtml" }}>
        <style>{`
              * {
                margin: 0;
                box-sizing: border-box;
              }
            `}</style>
        {children}
      </div>
    </foreignObject>
  );
};

export default ReadmeImg;
