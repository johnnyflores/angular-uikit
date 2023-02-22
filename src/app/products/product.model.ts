import { Accessory } from "../shared/accessory.model";

export class Product {
  public name: string;
  public description: string;
  public imageUrl: string;
  public accessories:Accessory[];

  constructor(name: string, description: string, imageUrl: string, accessories: Accessory[] ) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.accessories = accessories;
  }
}