import { Item } from "../gilded-rose";
import { ItemStrategy } from "./strategies/_strategy";
import { SulfurasStrategy } from "./strategies/sulfuras";
import { AgedBrieStrategy } from "./strategies/aged-brie";
import { BackstagePassStrategy } from "./strategies/backstage-pass";
import { CommonItemStrategy } from "./strategies/common";

export function createItemStrategy(item: Item): ItemStrategy {
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
