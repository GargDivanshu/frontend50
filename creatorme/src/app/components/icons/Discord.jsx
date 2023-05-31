/* @jsxRuntime classic */
/* @jsx jsx */
"use client"
import { jsx } from "@emotion/react";
import React from "react";

const Discord = () => {
  return (
    <>
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="80" height="80" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_20_12" transform="scale(0.00595238)" />
          </pattern>
          <image
            id="image0_20_12"
            width="168"
            height="168"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAMAAABDlVWGAAAAAXNSR0IArs4c6QAAAW5QTFRFR3BMVmP0VmT0V2P1VWP2T138UmD5VmP0UGD/WGj3WGTzUGD6UmL3WmX0UGD/Tl3+Tl3+UGD7VmL1UF79Tl39UF/7VWP2WWP0UF38UmD6VGL3UF77VGL2V2X0T139UmD5UWD6U2D5UGD6UF/8UF/9UF/+VWP2VmX2WGX0VGD7UGD/WGD/////T178UmD5VWP2UV/7UV/6VGL3/f39UF77U2H4VWP1V2T0UmD6VmP1VGH3Tl39+/v7VmP0+fn59/f3UF79U2H5V2XzVmT19PT0UF/9VGL4Tl3+8vLyV2T18PDwV2X0T17+Z3T2U2H67u/5XGn4trv0cXz45Ob5jpf03uDzZ3P5jpf3W2n7ZXL5paz5ur/41Nfzr7X3WGXzy870e4X2oqn2hY/2m6L5fIf5eYT6z9L5q7Dy6uv0l5/3kJn4ho/5e4b1v8Tzx8vw297w5+jy4OH15ebwo6rz2dz5eoXzl6D0xcn5X2v2sbf6o03OmAAAAHp0Uk5TAO+Pn7+/3/4QIEAwYDAg3+9A32+P729fYI9/gO/fn++gUGDfz6/Pr+5AMCD///////////////////////////////////////////////////////////////////////////////////////////////////////+6mYQQAAAf+ElEQVR4XsVcCWMTV5IWYCObwIYQjoSEyTE5ZndRH0LdarUiW3LbsoUPbHNfCQECAXJM7tl/v1X1Vb3XOmxBxmRKUreARvpcx1fHe+1K5WBk7sS5s4ePzJw6dWrQaXXS1qFTn818fvj8R8fmpv3Pv05OnDs8c6jZbHY6nWa102ylnU7R6bRYOkWaHpo5fPzEtM947XLs7MyhpWazaFYHApRenWJQtFJ6tORFh5DRnj027bNem8ydO3KouUQPkqo8RYpOWqRFq9MiuGEa0oGR0ttDnx+fn/aZBy9zZ2cIW5XhFQqy0xKUnXRQkEJFpwRS0IapHMNw5i/GeowMvlRdWm8OGGOn2Ww1W2T3olmQg8I9GWYhbxihoAzlzZGPpn36Qcnc+X80CSbrs7k0IC1Wm6zLZlE0GWShwZSKWlti9dSjrYfhqb9ErScO/2NpaZ0cc10t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"
        />
      </defs>
    </svg>
    </>
  );
};

export default Discord;