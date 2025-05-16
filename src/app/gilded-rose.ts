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
        this.decreaseSellIn(item);

        this.increaseQuality(item);

        if (this.hasExpired(item)) {
          this.increaseQuality(item);
        }

        this.ensureQualityInRange(item);

        return;
      }

      if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        this.decreaseSellIn(item);

        if (this.hasExpired(item)) {
          item.quality = 0;
          return;
        }

        this.increaseQuality(item);

        if (item.sellIn < 10) {
          this.increaseQuality(item);
        }

        if (item.sellIn < 5) {
          this.increaseQuality(item);
        }

        this.ensureQualityInRange(item);

        return;
      }

      this.decreaseSellIn(item);

      this.decreaseQuality(item);

      if (this.hasExpired(item)) {
        this.decreaseQuality(item);
      }

      this.ensureQualityInRange(item);
    });

    return this.items;
  }

  private ensureQualityInRange(item: Item): void {
    if (item.quality > 50) {
      item.quality = 50;
    }
    if (item.quality < 0) {
      item.quality = 0;
    }
  }

  private decreaseSellIn(item: Item): void {
    item.sellIn = item.sellIn - 1;
  }

  private increaseQuality(item: Item): void {
    item.quality = item.quality + 1;
  }

  private decreaseQuality(item: Item): void {
    item.quality = item.quality - 1;
  }

  private hasExpired(item: Item): boolean {
    return item.sellIn < 0;
  }
}
