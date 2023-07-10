// import img1 from '../../public/resources/product_1.png';
// import img2 from '../../public/resources/product_2.png';
// import img3 from '../../public/resources/product_3.png';
// import img4 from '../../public/resources/product_4.png';
// import img5 from '../../public/resources/product_5.png';
const imgs = Array.from({length: 5}).reduce((imgs,_,i) => [...imgs, import(`../../public/resources/product_${i+1}.png`)]);

// const imgs = [img1, img2, img3, img4, img5];
export default imgs