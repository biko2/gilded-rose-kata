import { ItemStrategy } from "../item-strategy";

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
