import { CustomCurrencyPipe } from './custom-currency.pipe';

describe('CustomCurrencyPipePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
