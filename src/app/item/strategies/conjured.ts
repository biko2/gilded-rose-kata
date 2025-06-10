import { ItemStrategy } from "./_strategy";

export class ConjuredStrategy extends ItemStrategy {
  update(): void {
    this.decreaseSellIn();
    this.decreaseQuality();
    this.decreaseQuality();

    if (this.hasExpired()) {
      this.decreaseQuality();
      this.decreaseQuality();
    }

    this.ensureQualityInRange();
  }
}
