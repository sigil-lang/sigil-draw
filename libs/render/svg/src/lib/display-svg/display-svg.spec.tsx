import { render } from '@testing-library/react';

import DisplaySvg from './display-svg';

describe('DisplaySvg', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DisplaySvg />);
    expect(baseElement).toBeTruthy();
  });
});
