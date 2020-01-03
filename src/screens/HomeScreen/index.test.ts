function sum(a: number, b: number): number {
    return a + b;
}

it('simple test', () => {
    expect(sum(10, 20)).toEqual(30);
});