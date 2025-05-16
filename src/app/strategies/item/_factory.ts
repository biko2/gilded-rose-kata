import { Item } from "../../gilded-rose";
import { ItemStrategy } from "./_strategy";
import { SulfurasStrategy } from "./sulfuras";
import { AgedBrieStrategy } from "./aged-brie";
import { BackstagePassStrategy } from "./backstage-pass";
import { CommonItemStrategy } from "./common";

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
