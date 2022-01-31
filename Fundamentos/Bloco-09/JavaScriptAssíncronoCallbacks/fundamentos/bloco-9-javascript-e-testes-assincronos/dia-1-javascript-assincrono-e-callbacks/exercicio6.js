const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('uppercase "test" to equal "TEST"', (vrf) => {
  uppercase("test", (str) => {
    try {
      expect(str).toBe('TEST');
      vrf();
    } catch (error) {
      vrf(error);
    }
  })
})
