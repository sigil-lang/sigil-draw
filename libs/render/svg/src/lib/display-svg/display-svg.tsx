import { SVGProps } from "react";
import {range} from "fp-ts/NonEmptyArray";

export interface DisplaySvgProps extends SVGProps<SVGPathElement> {
  /** Unit size in pixels. */
  hem?: number,
  /** Size in hem. */
  size?: number
  showGrid: boolean
}

const grid = ({hem, size}:{hem:number, size:number}) => {
  const sizeInPixels = (hem*size);

  return (<g>
            {range(0, size).map((i) => (<>
              <line x1={i*hem} y1="0" x2={i*hem} y2={sizeInPixels} stroke="red"/>
              <line y1={i*hem} x1="0" y2={i*hem} x2={sizeInPixels} stroke="red"/>
              </>
            ))}
          </g>)
}

export function DisplaySvg({hem = 100, size = 1, showGrid, d}: DisplaySvgProps) {
  const sizeInPixels = (hem*size);
  const center = (sizeInPixels) / 2;

  return (
    <div>
      <svg style={{width:`${sizeInPixels}px`, height:`${sizeInPixels}px`}} viewBox={`0 0 ${sizeInPixels} ${sizeInPixels}` }>
      {showGrid 
          ? grid({hem,size}) 
          : null }
        <path stroke="yellow" fill="gray" d={`M ${center} ${center} ${d}`}/>
      </svg>
    </div>
  );
}

export default DisplaySvg;
