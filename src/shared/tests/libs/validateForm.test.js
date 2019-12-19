import validateForm from 'shared/libs/validateForm';

describe('validateForm', () => {
  it('should return true if content is present', () => {
    const content = 'I should pass this test';

    const isContentPresent = validateForm(content);

    expect(isContentPresent).toBe(true);
  });

  it('should return false if content is not present', () => {
    const content = '';

    const isContentPresent = validateForm(content);

    expect(isContentPresent).toBe(false);
  });
});
