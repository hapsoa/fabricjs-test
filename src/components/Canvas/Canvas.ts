import { Component, Vue } from 'vue-property-decorator';
import { fabric } from 'fabric';
import _ from 'lodash';

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
    fabric.Image.fromURL(url, img => {
      this.canvas.add(img);
    });
  }

  public deleteSelectedAsset(e: KeyboardEvent) {
    console.log(e);
    if (e.key === 'Backspace') {
      console.log('delete 작동');
      this.canvas.remove(this.canvas.getActiveObject());
    }
  }

  public cancelSelect() {
    this.canvas.discardActiveObject();
    this.canvas.requestRenderAll();
    // this.canvas.setActiveObject(null);
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

    const canvasWrapper = document.getElementById('canvas-wrapper');
    if (!_.isNil(canvasWrapper)) {
      canvasWrapper.tabIndex = 1000;
      canvasWrapper.addEventListener('keyup', this.deleteSelectedAsset, false);
    }
  }
}
