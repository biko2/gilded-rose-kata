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
      if (item.name === "Sulfuras, Hand of Ragnaros") {
        return;
      }

      if (item.name === "Aged Brie") {
        item.sellIn = item.sellIn - 1;

        item.quality = item.quality + 1;

        if (item.sellIn < 0) {
          item.quality = item.quality + 1;
        }

        if (item.quality > 50) {
          item.quality = 50;
        }

        return;
      }

      if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        item.sellIn = item.sellIn - 1;

        if (item.sellIn < 0) {
          item.quality = 0;
          return;
        }

        item.quality = item.quality + 1;

        if (item.sellIn < 10) {
          item.quality = item.quality + 1;
        }

        if (item.sellIn < 5) {
          item.quality = item.quality + 1;
        }

        if (item.quality > 50) {
          item.quality = 50;
        }

        return;
      }

      item.sellIn = item.sellIn - 1;

      if (item.quality <= 0) {
        return;
      }

      item.quality = item.quality - 1;

      if (item.sellIn < 0) {
        if (item.quality > 0) {
          item.quality = item.quality - 1;
        }
      }
    });

    return this.items;
  }
}
