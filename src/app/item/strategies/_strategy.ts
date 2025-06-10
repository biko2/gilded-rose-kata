import { Item } from "../../gilded-rose";

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
