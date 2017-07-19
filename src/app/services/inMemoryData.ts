import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} {
    const shoppingCart : {} = {
      id: 4450,
      title: "IBM i8 GeForce",
      body_html: "<h2>this is a test</h2>",
      created_at: "2006-06-03T01:28:13-04:00",
      handle: "ibm-i8",
      images: null,
      options: null,
      product_type: "ordinateur",
      published_at: "2006-06-03T01:28:13-04:00",
      tags: ["laptop", "ibm"],
      updated_at: "2014-08-05T16:58:27-04:00",
      variants: [],
      vendor: "IBM",
    };
    return shoppingCart;
  }
}
