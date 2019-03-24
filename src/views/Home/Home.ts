import { Component, Vue } from 'vue-property-decorator';
import Canvas from '@/components/Canvas/Canvas.vue';
import CanvasTs from '@/components/Canvas/Canvas.ts';

@Component({
  components: {
    Canvas,
  },
})
export default class Home extends Vue {
  // @ts-ignore-nextline
  public $refs: Vue['$refs'] & {
    canvas: CanvasTs;
    // editor 는 ref='editor'로 설정했고,
    // Editor는 Editor.vue파일의 Editor.ts파일을 import한 것이다.
    image: any;
  };

  public imageName: string = '';
  public imageUrl: string | ArrayBuffer | null = '';
  public imageFile: string = '';

  public addRect() {
    console.log('의상 추가');
    this.$refs.canvas.addRect();
  }
  public addImage() {
    console.log('Image 추가');
    this.$refs.canvas.addImage();
  }

  public pickFile() {
    this.$refs.image.click();
  }

  public cancelSelect() {
    console.log('선택 취소');
    this.$refs.canvas.cancelSelect();
  }

  public onFilePicked(e: any) {
    const files = e.target.files;
    if (files[0] !== undefined) {
      this.imageName = files[0].name;
      if (this.imageName.lastIndexOf('.') <= 0) {
        return;
      }
      const fr = new FileReader();
      fr.readAsDataURL(files[0]);
      fr.addEventListener('load', () => {
        this.imageUrl = fr.result;
        this.imageFile = files[0]; // this is an image file that can be sent to server...

        // this.$refs.canvas.addImage();
        this.$refs.canvas.addCustomImage(this.imageUrl as string);
      });
    } else {
      this.imageName = '';
      this.imageFile = '';
      this.imageUrl = '';
    }
  }
}
