import { render } from '@testing-library/react';

import RenderZdog from './render-zdog';

describe('RenderZdog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RenderZdog />);
    expect(baseElement).toBeTruthy();
  });
});
