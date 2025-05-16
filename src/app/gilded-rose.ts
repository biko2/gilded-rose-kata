export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {}
}

export abstract class ItemStrategy {
  protected item: Item;

  constructor(item: Item) {
    this.item = item;
  }

  abstract update(): void;

  protected ensureQualityInRange(): void {
    if (this.item.quality > 50) {
      this.item.quality = 50;
    }
    if (this.item.quality < 0) {
      this.item.quality = 0;
    }
  }

  protected decreaseSellIn(): void {
    this.item.sellIn = this.item.sellIn - 1;
  }

  protected increaseQuality(): void {
    this.item.quality = this.item.quality + 1;
  }

  protected decreaseQuality(): void {
    this.item.quality = this.item.quality - 1;
  }

  protected hasExpired(): boolean {
    return this.item.sellIn < 0;
  }
}

export class CommonItemStrategy extends ItemStrategy {
  update(): void {
    this.decreaseSellIn();
    this.decreaseQuality();

    if (this.hasExpired()) {
      this.decreaseQuality();
    }

    this.ensureQualityInRange();
  }
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
