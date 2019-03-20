import { Component, Vue } from 'vue-property-decorator';
// import '@/lib/fabric.min.js';
import { fabric } from 'fabric';

@Component({})
export default class Canvas extends Vue {
  public canvas!: fabric.Canvas;

  public rect = new fabric.Rect({
    top: 100,
    left: 100,
    width: 60,
    height: 70,
    fill: 'red',
  });

  public addRect() {
    console.log('lala');
    this.canvas.add(
      new fabric.Rect({
        top: 100,
        left: 100,
        width: 60,
        height: 70,
        fill: 'blue',
      }),
    );
  }

  public addImage() {
    //
    fabric.Image.fromURL(
      'http://ww2.sjkoreancatholic.org/files/testing_image.jpg',
      img => {
        this.canvas.add(img);
      },
    );
  }

  public addCustomImage(url: string) {
    fabric.Image.fromURL(
      url,
      img => {
        this.canvas.add(img);
      },
    );
  }

  private mounted() {
    this.canvas = new fabric.Canvas('canvas');

    const rect = new fabric.Rect({
      top: 100,
      left: 100,
      width: 60,
      height: 70,
      fill: 'red',
    });

    this.canvas.add(rect);
  }
}
