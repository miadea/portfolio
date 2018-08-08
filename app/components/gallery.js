import React from 'react';
import Gallery from 'react-grid-gallery';

export default class _Gallery extends React.Component {
  constructor() {
    super()
    this.state = { tag: 'Wedding' }
  }
  render() {
    return (
      <div className="gallery-page">
        <div className="nav">
          {['Wedding', 'Portrait', 'Interior', 'Product', 'Nature'].map(tag => {
            let className = tag == this.state.tag ? 'link active' : 'link'
            return <div className={className} key={tag}>
              <a href='' onClick={(e) => this.onTag(e, tag)}>{tag}</a>
            </div>
          })}
        </div>
        <div className="container">
          <Gallery images={getImages(this.state.tag)} enableImageSelection={false}/>
        </div>
      </div>
    );
  }
  onTag(e, tag) {
    e.preventDefault()
    this.setState({tag})
  }
}


const getImages = (tag) => {
  if (!tag) return images;
  return images.filter(({catigories = []}) => catigories.includes(tag))
}


const images = [
 {
         src: "https://c1.staticflickr.com/1/914/42945624264_6a2d42fc60_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/914/42945624264_6a2d42fc60_h.jpg",
         thumbnailWidth: 130,
         thumbnailHeight: 174,
         catigories: ['product']
 },
 {
         src: "https://c1.staticflickr.com/1/919/28773953187_9e54d8052b_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/919/28773953187_9e54d8052b_h.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['product']
 },
 {
         src: "https://c1.staticflickr.com/1/839/42945623934_3fdf25d91c_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/839/42945623934_3fdf25d91c_h.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['product']
 },
 {
         src: "https://c1.staticflickr.com/1/935/42946058174_43838fc4b7_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/935/42946058174_43838fc4b7_h.jpg",
         thumbnailWidth: 150,
         thumbnailHeight: 174,
         catigories: ['product']
 },
 {
         src: "https://c1.staticflickr.com/1/846/42946058284_7cd5c5fdd8_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/846/42946058284_7cd5c5fdd8_h.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['product']
 },
 {
         src: "https://c1.staticflickr.com/1/931/43615989142_350af41c7a_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/931/43615989142_350af41c7a_h.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['product']
 },
 {
         src: "https://c1.staticflickr.com/1/941/42759972915_571e071083_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/941/42759972915_571e071083_h.jpg",
         thumbnailWidth: 130,
         thumbnailHeight: 174,
         catigories: ['port']
 },
 {
         src: "https://c1.staticflickr.com/1/941/28774457737_c3301bb414_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/941/28774457737_c3301bb414_h.jpg",
         thumbnailWidth: 130,
         thumbnailHeight: 174,
         catigories: ['port']
 },
 {
         src: "https://c1.staticflickr.com/1/932/28774456927_782480328d_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/932/28774456927_782480328d_h.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['port']
 },
 {
         src: "https://c1.staticflickr.com/1/835/42759689345_bf3e464918_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/835/42759689345_bf3e464918_h.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['port']
 },
 {
         src: "https://c1.staticflickr.com/1/926/29792861748_d9da3ae7ce_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/926/29792861748_d9da3ae7ce_h.jpg",
         thumbnailWidth: 120,
         thumbnailHeight: 174,
         catigories: ['port']
 },
 {
         src: "https://c1.staticflickr.com/1/846/41854762350_478b73ccef_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/846/41854762350_478b73ccef_h.jpg",
         thumbnailWidth: 150,
         thumbnailHeight: 174,
         catigories: ['port']
 },
 {
         src: "https://c1.staticflickr.com/1/842/42759735735_ececf34028_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/842/42759735735_ececf34028_h.jpg",
         thumbnailWidth: 110,
         thumbnailHeight: 174,
         catigories: ['port']
 },
 {
         src: "https://c1.staticflickr.com/1/850/28774509277_6c5555f456_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/850/28774509277_6c5555f456_h.jpg",
         thumbnailWidth: 230,
         thumbnailHeight: 174,
         catigories: ['port']
 },
 {
         src: "https://c1.staticflickr.com/1/917/29792779848_c26bac39ac_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/917/29792779848_c26bac39ac_h.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['port']
 },
 {
         src: "https://c1.staticflickr.com/1/929/43615960312_634d24bd72_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/929/43615960312_634d24bd72_h.jpg",
         thumbnailWidth: 130,
         thumbnailHeight: 174,
         catigories: ['port']
 },
 {
         src: "https://c1.staticflickr.com/1/861/43615960162_8ab34f6390_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/861/43615960162_8ab34f6390_h.jpg",
         thumbnailWidth: 120,
         thumbnailHeight: 174,
         catigories: ['port']
 },
 {
         src: "https://c1.staticflickr.com/1/933/28774045617_1c036bca64_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/933/28774045617_1c036bca64_h.jpg",
         thumbnailWidth: 150,
         thumbnailHeight: 174,
         catigories: ['nature']
 },
 {
         src: "https://c1.staticflickr.com/1/926/28774063027_cbbeeb12d3_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/926/28774063027_cbbeeb12d3_h.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['nature']
 },
 {
         src: "https://c1.staticflickr.com/1/915/43662080681_ef3d3d5126_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/915/43662080681_ef3d3d5126_h.jpg",
         thumbnailWidth: 190,
         thumbnailHeight: 174,
         catigories: ['nature']
 },
 {
         src: "https://c1.staticflickr.com/1/843/28774063467_31d553ca7e_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/843/28774063467_31d553ca7e_h.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['nature']
 },
 {
         src: "https://c1.staticflickr.com/1/920/43615597432_efc83b33eb_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/920/43615597432_efc83b33eb_h.jpg",
         thumbnailWidth: 350,
         thumbnailHeight: 174,
         catigories: ['nature']
 },
 {
         src: "https://c1.staticflickr.com/1/919/43662080811_fc9d578226_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/919/43662080811_fc9d578226_h.jpg",
         thumbnailWidth: 150,
         thumbnailHeight: 174,
         catigories: ['nature']
 },
 {
         src: "https://c1.staticflickr.com/1/931/42945724874_d0ed4d99f2_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/931/42945724874_d0ed4d99f2_h.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 174,
         catigories: ['nature']
 },
 {
         src: "https://c1.staticflickr.com/1/840/28774045187_73dea97530_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/840/28774045187_73dea97530_h.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['nature']
 },
 {
         src: "https://c1.staticflickr.com/1/846/43662081131_758f560540_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/846/43662081131_758f560540_h.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['nature']
 },
 {
         src: "https://c1.staticflickr.com/1/835/28774062597_8dcff60e15_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/835/28774062597_8dcff60e15_h.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['nature']
 },
 {
         src: "https://c1.staticflickr.com/1/923/43615596742_7501490cd0_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/923/43615596742_7501490cd0_h.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['nature']
 },
 {
         src: "https://farm3.staticflickr.com/2898/33762552560_435326384c_c.jpg",
         thumbnail: "https://farm3.staticflickr.com/2898/33762552560_435326384c_c.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['wedding']
 },
 {
         src: "https://farm3.staticflickr.com/2812/33336125113_5c198d2f61_c.jpg",
         thumbnail: "https://farm3.staticflickr.com/2812/33336125113_5c198d2f61_c.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 212,
         catigories: ['wedding']
 },

 {
         src: "https://farm3.staticflickr.com/2911/33336159073_e841ebe016_b.jpg",
         thumbnail: "https://farm3.staticflickr.com/2911/33336159073_e841ebe016_b.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 212,
         catigories: ['wedding']
 },
 {
         src: "https://farm3.staticflickr.com/2924/33762256630_7f91e6f995_b.jpg",
         thumbnail: "https://farm3.staticflickr.com/2924/33762256630_7f91e6f995_b.jpg",
         thumbnailWidth: 270,
         thumbnailHeight: 174,
         catigories: ['wedding', 'port']
 },
 {
         src: "https://farm3.staticflickr.com/2941/34105982336_c43198f870_b.jpg",
         thumbnail: "https://farm3.staticflickr.com/2941/34105982336_c43198f870_b.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 212,
         catigories: ['wedding', 'product']
 },

 {
         src: "https://farm3.staticflickr.com/2808/34147629465_f6560dfdc9_b.jpg",
         thumbnail: "https://farm3.staticflickr.com/2808/34147629465_f6560dfdc9_b.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 212,
         catigories: ['wedding']
 },
 {
         src: "https://farm3.staticflickr.com/2894/34146862445_6810655b59_z.jpg",
         thumbnail: "https://farm3.staticflickr.com/2894/34146862445_6810655b59_z.jpg",
         thumbnailWidth: 150,
         thumbnailHeight: 174,
         catigories: ['wedding', 'product']
 },
 {
         src: "https://farm3.staticflickr.com/2917/34016642001_8b25df6ce4_c.jpg",
         thumbnail: "https://farm3.staticflickr.com/2917/34016642001_8b25df6ce4_c.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 212,
         catigories: ['wedding']
 },

 {
         src: "https://farm3.staticflickr.com/2808/33762520410_988dc3ab59_c.jpg",
         thumbnail: "https://farm3.staticflickr.com/2808/33762520410_988dc3ab59_c.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 212,
         catigories: ['wedding']
 },
 {
         src: "https://farm3.staticflickr.com/2824/34105879566_40680855f6_z.jpg",
         thumbnail: "https://farm3.staticflickr.com/2824/34105879566_40680855f6_z.jpg",
         thumbnailWidth: 150,
         thumbnailHeight: 174,
         catigories: ['wedding', 'product']
 },
 {
         src: "https://farm3.staticflickr.com/2893/34105858026_caecc4cc33_z.jpg",
         thumbnail: "https://farm3.staticflickr.com/2893/34105858026_caecc4cc33_z.jpg",
         thumbnailWidth: 300,
         thumbnailHeight: 212,
         catigories: ['wedding', 'product']
 },

 {
         src: "https://farm3.staticflickr.com/2807/34106460416_523bd1a008_z.jpg",
         thumbnail: "https://farm3.staticflickr.com/2807/34106460416_523bd1a008_z.jpg",
         thumbnailWidth: 150,
         thumbnailHeight: 212,
         catigories: ['wedding']
 },
 {
         src: "https://farm3.staticflickr.com/2887/33762225490_677316f44b_c.jpg",
         thumbnail: "https://farm3.staticflickr.com/2887/33762225490_677316f44b_c.jpg",
         thumbnailWidth: 280,
         thumbnailHeight: 174,
         catigories: ['wedding', 'port']
 },
 {
         src: "https://farm3.staticflickr.com/2839/33762210570_518d15656e_b.jpg",
         thumbnail: "https://farm3.staticflickr.com/2839/33762210570_518d15656e_b.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 212,
         catigories: ['wedding', 'port']
 },

 {
         src: "https://farm3.staticflickr.com/2813/33335428613_c16e9d47b3_b.jpg",
         thumbnail: "https://farm3.staticflickr.com/2813/33335428613_c16e9d47b3_b.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 212,
         catigories: ['wedding']
 },
 {
         src: "https://farm3.staticflickr.com/2873/34016125831_da2e54ab26_z.jpg",
         thumbnail: "https://farm3.staticflickr.com/2873/34016125831_da2e54ab26_z.jpg",
         thumbnailWidth: 150,
         thumbnailHeight: 174,
         catigories: ['wedding']
 },
 {
         src: "https://farm3.staticflickr.com/2828/34016363411_2f8d800ffe_c.jpg",
         thumbnail: "https://farm3.staticflickr.com/2828/34016363411_2f8d800ffe_c.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 212,
         catigories: ['wedding', 'product']
 },
 {
         src: "https://farm3.staticflickr.com/2816/34016606391_b79e1d0b02_c.jpg",
         thumbnail: "https://farm3.staticflickr.com/2816/34016606391_b79e1d0b02_c.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['wedding']
 },
 {
         src: "https://farm3.staticflickr.com/2865/33989399252_d31a1a9629_b.jpg",
         thumbnail: "https://farm3.staticflickr.com/2865/33989399252_d31a1a9629_b.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 212,
         catigories: ['wedding']
 },

 {
         src: "https://farm3.staticflickr.com/2833/34016341861_f3411c0cb4_z.jpg",
         thumbnail: "https://farm3.staticflickr.com/2833/34016341861_f3411c0cb4_z.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 212,
         catigories: ['wedding', 'product']
 },
 {
         src: "https://farm3.staticflickr.com/2926/34016289511_1d75e75379_c.jpg",
         thumbnail: "https://farm3.staticflickr.com/2926/34016289511_1d75e75379_c.jpg",
         thumbnailWidth: 200,
         thumbnailHeight: 174,
         catigories: ['wedding']
 },
 {
         src: "https://farm3.staticflickr.com/2828/33989561732_fc9683b2a0_b.jpg",
         thumbnail: "https://farm3.staticflickr.com/2828/33989561732_fc9683b2a0_b.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 212,
         catigories: ['wedding', 'product']
 },

 {
         src: "https://farm3.staticflickr.com/2909/33304454924_a1af3e4b52_z.jpg",
         thumbnail: "https://farm3.staticflickr.com/2909/33304454924_a1af3e4b52_z.jpg",
         thumbnailWidth: 180,
         thumbnailHeight: 212,
         catigories: ['wedding']
 },
 {
         src: "https://farm3.staticflickr.com/2910/34106009126_542f80f909_b.jpg",
         thumbnail: "https://farm3.staticflickr.com/2910/34106009126_542f80f909_b.jpg",
         thumbnailWidth: 200,
         thumbnailHeight: 174,
         catigories: ['wedding', 'product']
 },
 {
         src: "https://farm3.staticflickr.com/2936/34016320551_1a89d018e3_b.jpg",
         thumbnail: "https://farm3.staticflickr.com/2936/34016320551_1a89d018e3_b.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 212,
         catigories: ['wedding', 'product']
 },

 {
         src: "https://farm4.staticflickr.com/3935/34146826525_84c926a7ea_b.jpg",
         thumbnail: "https://farm4.staticflickr.com/3935/34146826525_84c926a7ea_b.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 212,
         catigories: ['wedding', 'product']
 },
 {
         src: "https://farm3.staticflickr.com/2855/33335931383_7f9eed44b6_b.jpg",
         thumbnail: "https://farm3.staticflickr.com/2855/33335931383_7f9eed44b6_b.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 212,
         catigories: ['wedding']
 },
 {
         src: "https://farm4.staticflickr.com/3935/34105843376_8c40732379_b.jpg",
         thumbnail: "https://farm4.staticflickr.com/3935/34105843376_8c40732379_b.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['wedding', 'product']
 },
 {
         src: "https://farm3.staticflickr.com/2913/34146759885_aee55e5205_c.jpg",
         thumbnail: "https://farm3.staticflickr.com/2913/34146759885_aee55e5205_c.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 212,
         catigories: ['wedding']
 },

 {
         src: "https://farm3.staticflickr.com/2829/33989715352_ace590cd0d_b.jpg",
         thumbnail: "https://farm3.staticflickr.com/2829/33989715352_ace590cd0d_b.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 212,
         catigories: ['wedding']
 },
 {
         src: "https://farm3.staticflickr.com/2938/34105905836_bd619b69c9_c.jpg",
         thumbnail: "https://farm3.staticflickr.com/2938/34105905836_bd619b69c9_c.jpg",
         thumbnailWidth: 200,
         thumbnailHeight: 174,
         catigories: ['wedding', 'product']
 },
 {
         src: "https://farm3.staticflickr.com/2942/33762496960_0484b1d204_b.jpg",
         thumbnail: "https://farm3.staticflickr.com/2942/33762496960_0484b1d204_b.jpg",
         thumbnailWidth: 320,
         thumbnailHeight: 212,
         catigories: ['wedding']
 },
 {
         src: "https://farm3.staticflickr.com/2948/33989772432_bf72681d14_z.jpg",
         thumbnail: "https://farm3.staticflickr.com/2948/33989772432_bf72681d14_z.jpg",
         thumbnailWidth: 150,
         thumbnailHeight: 174,
         catigories: ['wedding']
 },
 {
         src: "https://c1.staticflickr.com/1/852/43661105951_46032e5ee4_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/852/43661105951_46032e5ee4_h.jpg",
         thumbnailWidth: 240,
         thumbnailHeight: 174,
         catigories: ['int']
 },
 {
         src: "https://c1.staticflickr.com/1/942/28773077877_4d67649b8f_c.jpg",
         thumbnail: "https://c1.staticflickr.com/1/942/28773077877_4d67649b8f_c.jpg",
         thumbnailWidth: 120,
         thumbnailHeight: 174,
         catigories: ['int']
 },
 {
         src: "https://c1.staticflickr.com/1/936/43661104491_6b583a444d_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/936/43661104491_6b583a444d_h.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['int']
 },
 {
         src: "https://c1.staticflickr.com/1/854/43661102871_f229f5149c_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/854/43661102871_f229f5149c_h.jpg",
         thumbnailWidth: 240,
         thumbnailHeight: 174,
         catigories: ['int']
 },
 {
         src: "https://c1.staticflickr.com/1/845/28773122867_216c200197_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/845/28773122867_216c200197_h.jpg",
         thumbnailWidth: 260,
         thumbnailHeight: 174,
         catigories: ['int']
 },
 {
         src: "https://c1.staticflickr.com/1/933/28773122587_d66e4af432_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/933/28773122587_d66e4af432_h.jpg",
         thumbnailWidth: 240,
         thumbnailHeight: 174,
         catigories: ['int']
 },
 {
         src: "https://c1.staticflickr.com/1/926/43614716822_10f7e2bc9d_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/926/43614716822_10f7e2bc9d_h.jpg",
         thumbnailWidth: 220,
         thumbnailHeight: 174,
         catigories: ['int']
 },
 {
         src: "https://c1.staticflickr.com/1/930/42758758265_4e70c995f9_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/930/42758758265_4e70c995f9_h.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['int']
 },
 {
         src: "https://c1.staticflickr.com/1/941/28773548327_3c0e875dfd_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/941/28773548327_3c0e875dfd_h.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['int']
 },
 {
         src: "https://c1.staticflickr.com/1/858/42758756655_c7e1525e28_h.jpg",
         thumbnail: "https://c1.staticflickr.com/1/858/42758756655_c7e1525e28_h.jpg",
         thumbnailWidth: 250,
         thumbnailHeight: 174,
         catigories: ['int']
 },
]
