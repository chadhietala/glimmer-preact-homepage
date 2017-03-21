import Component from "@glimmer/component";

export default class MyComponent extends Component {
  private items: object[];
  constructor(injections) {
    super(injections);
    this.items = [{
      name: 'Chad Hietala',
      message: 'Foo bar baz',
      days: 3,
      image: "https://media.licdn.com/mpr/mpr/shrink_100_100/p/8/005/052/39b/0c5d996.jpg",
      title: 'Feed Machine'
    },
    {
      name: 'Bill Hietala',
      message: 'Wat Wat',
      days: 2,
      shareImage: "https://media.licdn.com/media-proxy/ext?w=506&h=180&hash=XVLbCQnMSygkZoMsHLqQq26Q2q8%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta9Er0Vinkhwfjw8177yE41y87UNCVordEGXyD3u0qYrdfyXqfsGKKrXzuVwXcSQclFAzffKhFmOyD8e-L4O8edQjjJHlJ427dA4BYBI3iSdF_NQ8",
      image: "https://media.licdn.com/mpr/mpr/shrink_100_100/p/8/005/052/39b/0c5d996.jpg",
      title: 'Demo Machine'
    },
    {
      name: 'Bob Hietala',
      message: 'foooooooooo',
      image: "https://media.licdn.com/mpr/mpr/shrink_100_100/p/8/005/052/39b/0c5d996.jpg",
      days: 1,
      title: 'Machine'
    },
    {
      name: 'MArk Hietala',
      message: 'Dumb dumb dumb',
      days: 4,
      image: "https://media.licdn.com/mpr/mpr/shrink_100_100/p/8/005/052/39b/0c5d996.jpg",
      title: 'Builder',
      shareImage: "https://media.licdn.com/media-proxy/ext?w=506&h=180&hash=XVLbCQnMSygkZoMsHLqQq26Q2q8%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta9Er0Vinkhwfjw8177yE41y87UNCVordEGXyD3u0qYrdfyXqfsGKKrXzuVwXcSQclFAzffKhFmOyD8e-L4O8edQjjJHlJ427dA4BYBI3iSdF_NQ8"
    },
    {
      name: 'Sue Hietala',
      message: 'Dumb dumb dumb',
      days: 4,
      image: "https://media.licdn.com/mpr/mpr/shrink_100_100/p/8/005/052/39b/0c5d996.jpg",
      title: 'PREACT IS THE BEST LIOLZ'
    }];
  }
}
