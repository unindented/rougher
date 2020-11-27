class LehmerRandom {
  private seed: number;

  public constructor(seed: number) {
    this.seed = seed;
  }

  public next(): number {
    return ((2 ** 31 - 1) & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31;
  }
}

const random = new LehmerRandom(Math.floor(/* Math.random() */ 0.3660782627877719 * 2 ** 31));

Math.random = jest.fn(() => random.next());
