import formatFilename from 'shared/libs/formatFilename';

describe('formatFileName lib', () => {
  it('should not format a filename without a timestamp', () => {
    const file = 'testfile.jpeg';

    const formattedFilename = formatFilename(file);

    expect(formattedFilename).toBe(file);
  });

  it('should format a filename with a timestamp', () => {
    const fileWithTimestamp = '1576758592208-testfile.jpeg';
    const fileWithoutTimestamp = 'testfile.jpeg';

    const formattedFilename = formatFilename(fileWithTimestamp);

    expect(formattedFilename).toBe(fileWithoutTimestamp);
  });
});
