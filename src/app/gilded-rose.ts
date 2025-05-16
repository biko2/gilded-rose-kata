import {
  ItemStrategy,
  SulfurasStrategy,
  AgedBrieStrategy,
  BackstagePassStrategy,
  CommonItemStrategy,
} from "./strategies/item";

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
      const strategy = this.createItemStrategy(item);
      strategy.update();
    });

    return this.items;
  }

  private createItemStrategy(item: Item): ItemStrategy {
    if (item.name === "Sulfuras, Hand of Ragnaros") {
      return new SulfurasStrategy(item);
    }
    if (item.name === "Aged Brie") {
      return new AgedBrieStrategy(item);
    }
    if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      return new BackstagePassStrategy(item);
    }
    return new CommonItemStrategy(item);
  }
}
