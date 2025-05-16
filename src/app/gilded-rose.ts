export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {}
}

export abstract class ItemStrategy {
  constructor(protected item: Item) {}

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

export class SulfurasStrategy extends ItemStrategy {
  update(): void {
    // Sulfuras is legendary and never changes
  }
}

export class AgedBrieStrategy extends ItemStrategy {
  update(): void {
    this.decreaseSellIn();
    this.increaseQuality();

    if (this.hasExpired()) {
      this.increaseQuality();
    }

    this.ensureQualityInRange();
  }
}

export class BackstagePassStrategy extends ItemStrategy {
  update(): void {
    this.decreaseSellIn();

    if (this.hasExpired()) {
      this.item.quality = 0;
      return;
    }

    this.increaseQuality();

    if (this.item.sellIn < 10) {
      this.increaseQuality();
    }

    if (this.item.sellIn < 5) {
      this.increaseQuality();
    }

    this.ensureQualityInRange();
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
