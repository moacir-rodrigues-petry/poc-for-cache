// tests/index.test.ts
describe('Immediate invocation in index.ts', () => {
  it('should log "Hello, TypeScript!" to the console', () => {
    // Spy on console.log
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // Import the module to trigger the immediate execution
    require('../src/index');

    // Assert console.log was called with the correct message
    expect(consoleSpy).toHaveBeenCalledWith('Hello, TypeScript!');

    // Restore the original implementation
    consoleSpy.mockRestore();
  });
});
