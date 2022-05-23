
export const pointOnCircle = (
  angle: number,
  radius: number
) => {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const tx = radius * sin;
  const ty = radius * cos;
  return {
    x: tx,
    y: ty,
  };
}

export const indexedPoint = (
  index: number,
  total: number,
  spin: number,
  radius: number
) => {
  const angle = ((Math.PI * 2) / total) * index + spin;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const tx = radius * sin;
  const ty = radius * cos;
  return {
    x: tx,
    y: ty,
  };
};


export const pointToCorner = (
  corner: number,
  total: number,
  spin: number,
  size: number
) => {
  const x = 0;
  const y = size;
  const angle = ((Math.PI * 2) / total) * corner + spin;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const tx = x * cos - y * sin;
  const ty = x * sin + y * cos;
  return {
    x: tx,
    y: ty,
  };
};

export const relativePoint = (
  index: number,
  total: number,
  radius: number,
  spin = 0
) => {
  const angleA = ((Math.PI * 2) / total);
  const angleB = ((Math.PI * 2) - angleA) / 2
  const sinB = Math.sin(angleB);
  const s = radius * sinB * 2;

  const angleC = (((Math.PI * 2) / total) * (index) - (Math.PI/total)) + spin;
  const cos = Math.cos(angleC);
  const sin = Math.sin(angleC);
  const ty = s * sin;
  const tx = s * cos;

  return {
    x: tx,
    y: ty,
  };
};

