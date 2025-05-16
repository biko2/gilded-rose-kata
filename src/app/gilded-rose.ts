import { createItemStrategy } from "./strategies/item";

export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {}
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      const strategy = createItemStrategy(item);
      strategy.update();
    });

    return this.items;
  }
}
