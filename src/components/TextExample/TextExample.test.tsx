import { render, screen } from '@testing-library/react-native';

import TextExample from './TextExample';

describe('TextExample', () => {
  it('should render correctly', () => {
    render(<TextExample />);

    expect(
      screen.getByText('Open up App.tsx to start working on your app!'),
    ).toBeDefined();
  });
});
