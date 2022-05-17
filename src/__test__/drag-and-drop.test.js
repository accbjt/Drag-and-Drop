import { getCurrentScreenSize } from '../utils';

describe('Drag and drop', () => {
  it('getCurrentScreenSize should give back the correct direction', () => {
    const directionHorizontal = getCurrentScreenSize(1000);
    const directionVertical = getCurrentScreenSize(500);

    expect(directionHorizontal).toEqual('horizontal');
    expect(directionVertical).toEqual('vertical');
  });
});
