import { ItemStrategy } from "./strategy";

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
