import React from 'react';
import Gallery from 'react-grid-gallery';

export default class _Gallery extends React.Component {
  render() {
    return (
      <div className="gallery-page">
        <div className="container">
          <Gallery images={getImages()} enableImageSelection={false}/>
        </div>
      </div>
    );
  }
}


const getImages = () => {
  return [
   {
           src: "https://farm3.staticflickr.com/2898/33762552560_435326384c_c.jpg",
           thumbnail: "https://farm3.staticflickr.com/2898/33762552560_435326384c_c.jpg",
           thumbnailWidth: 250,
           thumbnailHeight: 174,
   },
   {
           src: "https://farm3.staticflickr.com/2812/33336125113_5c198d2f61_c.jpg",
           thumbnail: "https://farm3.staticflickr.com/2812/33336125113_5c198d2f61_c.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212,
   },

   {
           src: "https://farm3.staticflickr.com/2911/33336159073_e841ebe016_b.jpg",
           thumbnail: "https://farm3.staticflickr.com/2911/33336159073_e841ebe016_b.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212
   },
   {
           src: "https://farm3.staticflickr.com/2924/33762256630_7f91e6f995_b.jpg",
           thumbnail: "https://farm3.staticflickr.com/2924/33762256630_7f91e6f995_b.jpg",
           thumbnailWidth: 280,
           thumbnailHeight: 174,
   },
   {
           src: "https://farm3.staticflickr.com/2941/34105982336_c43198f870_b.jpg",
           thumbnail: "https://farm3.staticflickr.com/2941/34105982336_c43198f870_b.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212,
   },

   {
           src: "https://farm3.staticflickr.com/2808/34147629465_f6560dfdc9_b.jpg",
           thumbnail: "https://farm3.staticflickr.com/2808/34147629465_f6560dfdc9_b.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212
   },
   {
           src: "https://farm3.staticflickr.com/2894/34146862445_6810655b59_z.jpg",
           thumbnail: "https://farm3.staticflickr.com/2894/34146862445_6810655b59_z.jpg",
           thumbnailWidth: 200,
           thumbnailHeight: 174,
   },
   {
           src: "https://farm3.staticflickr.com/2917/34016642001_8b25df6ce4_c.jpg",
           thumbnail: "https://farm3.staticflickr.com/2917/34016642001_8b25df6ce4_c.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212,
   },

   {
           src: "https://farm3.staticflickr.com/2808/33762520410_988dc3ab59_c.jpg",
           thumbnail: "https://farm3.staticflickr.com/2808/33762520410_988dc3ab59_c.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212
   },
   {
           src: "https://farm3.staticflickr.com/2824/34105879566_40680855f6_z.jpg",
           thumbnail: "https://farm3.staticflickr.com/2824/34105879566_40680855f6_z.jpg",
           thumbnailWidth: 150,
           thumbnailHeight: 174,
   },
   {
           src: "https://farm3.staticflickr.com/2893/34105858026_caecc4cc33_z.jpg",
           thumbnail: "https://farm3.staticflickr.com/2893/34105858026_caecc4cc33_z.jpg",
           thumbnailWidth: 300,
           thumbnailHeight: 212,
   },

   {
           src: "https://farm3.staticflickr.com/2807/34106460416_523bd1a008_z.jpg",
           thumbnail: "https://farm3.staticflickr.com/2807/34106460416_523bd1a008_z.jpg",
           thumbnailWidth: 150,
           thumbnailHeight: 212
   },
   {
           src: "https://farm3.staticflickr.com/2887/33762225490_677316f44b_c.jpg",
           thumbnail: "https://farm3.staticflickr.com/2887/33762225490_677316f44b_c.jpg",
           thumbnailWidth: 280,
           thumbnailHeight: 174,
   },
   {
           src: "https://farm3.staticflickr.com/2839/33762210570_518d15656e_b.jpg",
           thumbnail: "https://farm3.staticflickr.com/2839/33762210570_518d15656e_b.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212,
   },

   {
           src: "https://farm3.staticflickr.com/2813/33335428613_c16e9d47b3_b.jpg",
           thumbnail: "https://farm3.staticflickr.com/2813/33335428613_c16e9d47b3_b.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212
   },
   {
           src: "https://farm3.staticflickr.com/2873/34016125831_da2e54ab26_z.jpg",
           thumbnail: "https://farm3.staticflickr.com/2873/34016125831_da2e54ab26_z.jpg",
           thumbnailWidth: 150,
           thumbnailHeight: 174,
   },
   {
           src: "https://farm3.staticflickr.com/2828/34016363411_2f8d800ffe_c.jpg",
           thumbnail: "https://farm3.staticflickr.com/2828/34016363411_2f8d800ffe_c.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212
   },
   {
           src: "https://farm3.staticflickr.com/2816/34016606391_b79e1d0b02_c.jpg",
           thumbnail: "https://farm3.staticflickr.com/2816/34016606391_b79e1d0b02_c.jpg",
           thumbnailWidth: 250,
           thumbnailHeight: 174,
   },
   {
           src: "https://farm3.staticflickr.com/2865/33989399252_d31a1a9629_b.jpg",
           thumbnail: "https://farm3.staticflickr.com/2865/33989399252_d31a1a9629_b.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212,
   },

   {
           src: "https://farm3.staticflickr.com/2833/34016341861_f3411c0cb4_z.jpg",
           thumbnail: "https://farm3.staticflickr.com/2833/34016341861_f3411c0cb4_z.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212
   },
   {
           src: "https://farm3.staticflickr.com/2926/34016289511_1d75e75379_c.jpg",
           thumbnail: "https://farm3.staticflickr.com/2926/34016289511_1d75e75379_c.jpg",
           thumbnailWidth: 200,
           thumbnailHeight: 174,
   },
   {
           src: "https://farm3.staticflickr.com/2828/33989561732_fc9683b2a0_b.jpg",
           thumbnail: "https://farm3.staticflickr.com/2828/33989561732_fc9683b2a0_b.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212,
   },

   {
           src: "https://farm3.staticflickr.com/2909/33304454924_a1af3e4b52_z.jpg",
           thumbnail: "https://farm3.staticflickr.com/2909/33304454924_a1af3e4b52_z.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212
   },
   {
           src: "https://farm3.staticflickr.com/2910/34106009126_542f80f909_b.jpg",
           thumbnail: "https://farm3.staticflickr.com/2910/34106009126_542f80f909_b.jpg",
           thumbnailWidth: 200,
           thumbnailHeight: 174,
   },
   {
           src: "https://farm3.staticflickr.com/2936/34016320551_1a89d018e3_b.jpg",
           thumbnail: "https://farm3.staticflickr.com/2936/34016320551_1a89d018e3_b.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212,
   },

   {
           src: "https://farm4.staticflickr.com/3935/34146826525_84c926a7ea_b.jpg",
           thumbnail: "https://farm4.staticflickr.com/3935/34146826525_84c926a7ea_b.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212
   },
   {
           src: "https://farm3.staticflickr.com/2855/33335931383_7f9eed44b6_b.jpg",
           thumbnail: "https://farm3.staticflickr.com/2855/33335931383_7f9eed44b6_b.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212,
   },

   {
           src: "https://farm3.staticflickr.com/2861/34016277821_2f30e4b8be_b.jpg",
           thumbnail: "https://farm3.staticflickr.com/2861/34016277821_2f30e4b8be_b.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212
   },
   {
           src: "https://farm4.staticflickr.com/3935/34105843376_8c40732379_b.jpg",
           thumbnail: "https://farm4.staticflickr.com/3935/34105843376_8c40732379_b.jpg",
           thumbnailWidth: 250,
           thumbnailHeight: 174,
   },
   {
           src: "https://farm3.staticflickr.com/2913/34146759885_aee55e5205_c.jpg",
           thumbnail: "https://farm3.staticflickr.com/2913/34146759885_aee55e5205_c.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212,
   },

   {
           src: "https://farm3.staticflickr.com/2829/33989715352_ace590cd0d_b.jpg",
           thumbnail: "https://farm3.staticflickr.com/2829/33989715352_ace590cd0d_b.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212
   },
   {
           src: "https://farm3.staticflickr.com/2938/34105905836_bd619b69c9_c.jpg",
           thumbnail: "https://farm3.staticflickr.com/2938/34105905836_bd619b69c9_c.jpg",
           thumbnailWidth: 200,
           thumbnailHeight: 174,
   },
   {
           src: "https://farm3.staticflickr.com/2942/33762496960_0484b1d204_b.jpg",
           thumbnail: "https://farm3.staticflickr.com/2942/33762496960_0484b1d204_b.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212,
   },
   {
           src: "https://farm3.staticflickr.com/2948/33989772432_bf72681d14_z.jpg",
           thumbnail: "https://farm3.staticflickr.com/2948/33989772432_bf72681d14_z.jpg",
           thumbnailWidth: 150,
           thumbnailHeight: 174,
   },
   {
           src: "https://farm3.staticflickr.com/2933/33304446064_9e0a6ed9f8_c.jpg",
           thumbnail: "https://farm3.staticflickr.com/2933/33304446064_9e0a6ed9f8_c.jpg",
           thumbnailWidth: 320,
           thumbnailHeight: 212,
   },
 ]
}
