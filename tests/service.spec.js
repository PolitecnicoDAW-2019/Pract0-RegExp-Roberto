describe("Sample text set", () => {
    let formService;

    beforeEach(() => {
        formService = new FormService();
    });

    it('Normal email', function() {
        const a = formService.validateEmail('roberto@gmail.com');
        expect(a).toBe(true);
    });

    it('Invalid email', function() {
        const a = formService.validateEmail('a@s.com');
        expect(a).toBe(false);
    });
});