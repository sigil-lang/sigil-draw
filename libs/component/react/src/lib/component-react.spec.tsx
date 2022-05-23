import { render } from '@testing-library/react';

import ComponentReact from './component-react';

describe('ComponentReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentReact />);
    expect(baseElement).toBeTruthy();
  });
});
