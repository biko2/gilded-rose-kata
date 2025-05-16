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
      updateSellIn(item);
      updateQuality1(item);
      updateQuality2(item);
    });

    return this.items;
  }
}

const updateQuality1 = (item: Item): void => {
  if (item.name === "Sulfuras, Hand of Ragnaros") {
    return;
  }

  if (item.name === "Aged Brie") {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }

    if (item.sellIn < 0) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }

    return;
  }

  if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
    if (item.quality < 50) {
      item.quality = item.quality + 1;

      if (item.sellIn < 10) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }

      if (item.sellIn < 5) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
    return;
  }

  if (item.quality <= 0) {
    return;
  }

  item.quality = item.quality - 1;
};

const updateSellIn = (item: Item): void => {
  if (item.name === "Sulfuras, Hand of Ragnaros") {
    return;
  }

  item.sellIn = item.sellIn - 1;
};

const updateQuality2 = (item: Item): void => {
  if (item.name === "Sulfuras, Hand of Ragnaros") {
    return;
  }

  if (item.name === "Aged Brie") {
    return;
  }

  if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
    if (item.sellIn < 0) {
      item.quality = item.quality - item.quality;
    }
    return;
  }

  if (item.sellIn < 0) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }
};
