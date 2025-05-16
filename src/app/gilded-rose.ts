import { createItemStrategy } from "./strategies/item";

export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {}
}

export class GildedRose {
  constructor(public items: Array<Item>) {}

  updateQuality() {
    this.items.forEach((item) => {
      const strategy = createItemStrategy(item);
      strategy.update();
    });

    return this.items;
  }
}
