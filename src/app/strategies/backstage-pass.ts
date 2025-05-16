import { ItemStrategy } from "./item-strategy";

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
