import {range} from 'fp-ts/NonEmptyArray';

import {indexedPoint, pointOnCircle, pointToCorner, relativePoint} from './functions';

export interface ShapeProperties {
  /** Base unit size in pixels. */
  hem: number;
  /** Size in hem units. */
  size?: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DiscProperties extends ShapeProperties {}

/**
 * Disc shape.
 *
 */
 export const disc = (props:DiscProperties) => {
  const r = (props.hem * Math.max(1, props.size || 1)) / 2;
  return `
    m 0, ${-r}
    a ${r} ${r} 0 0 1 0 ${r * 2}
    a ${r} ${r} 0 0 1 0 ${-r * 2}
    m 0, ${r}
    `;
};

/**
 * Square shape.
 *
 */
 export const square = ({hem,size}:ShapeProperties) => {
  const r = (hem * Math.max(1, size || 1)) / 2;
  return `
    m ${-r}, ${-r}
    h ${r * 2}
    v ${r * 2}
    h ${-r * 2}
    z
    m ${r}, ${r}
    `;
};

/**
 * A 'polygon' path.
 *
 */
 export const polygon = (
  radius: number,
  sides: number,
  spin = 0
) => {
  const points = range(1,sides)
    .reduce((acc, i) => {
        const point = relativePoint(i, sides, radius, spin);
        return `${acc} ${point.x}, ${point.y}`
      }, '')
  const origin = pointOnCircle(spin, radius)

  return `m ${origin.x},-${origin.y} ${points} z l -${origin.x},${origin.y}`
  ;
};
