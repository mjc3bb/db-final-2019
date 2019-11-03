

export default class Service{
  name = null;
  image = null;
  tags = [];
  constructor(name, image, tags){
    this.name = name;
    this.image = image;
    this.tags = tags;
  }
}
