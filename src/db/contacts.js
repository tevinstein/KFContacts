//@flow

type Contact = {
  id: number;
  name: string;
  address: string;
  phoneNo: string;
  images: Array<string>;
};

type Contacts = Array<Contact>;

const IMAGES_SIMON: Array<string> = [
  'http://imgur.com/GMTjYzT.jpg',
  'http://imgur.com/qwyQsFS.jpg',
  'http://imgur.com/0XMjXdY.jpg',
  'http://imgur.com/Ibogdg5.jpg',
  'http://imgur.com/4Eb52As.jpg',
  'http://imgur.com/59L8nSP.jpg'
];

const IMAGES_ARYA: Array<string> = [
  'http://imgur.com/3DvpqqZ.jpg',
  'http://imgur.com/DKQXr0T.jpg',
  'http://imgur.com/h4JdLXm.jpg',
  'http://imgur.com/Ov0FPCU.jpg',
  'http://imgur.com/B5OgBIJ.jpg',
  'http://imgur.com/jmZsIY6.jpg'
];

const IMAGES_BJ: Array<string> = [
  'http://imgur.com/ddh9bE5.jpg',
  'http://imgur.com/XyBRrY6.jpg',
  'http://imgur.com/BX4jhUu.jpg',
  'http://imgur.com/WCBvGqJ.jpg',
  'http://imgur.com/lNAExGW.jpg',
  'http://imgur.com/3W5whWG.jpg'
];

const IMAGES_DOMINGGUS: Array<string> = [
  'http://imgur.com/xEmvQAF.jpg',
  'http://imgur.com/JnLNkGo.jpg',
  'http://imgur.com/J78S6vq.jpg',
  'http://imgur.com/J6bKWwd.jpg',
  'http://imgur.com/rAXiXcb.jpg',
  'http://imgur.com/wW7RUsg.jpg'
];

const IMAGES_ADI: Array<string> = [
  'http://imgur.com/HgGkZGT.jpg',
  'http://imgur.com/PLsdOwl.jpg',
  'http://imgur.com/uU7qdx0.jpg',
  'http://imgur.com/Cr2C8QH.jpg',
  'http://imgur.com/ZO8AbC0.jpg',
  'http://imgur.com/BX9Hxda.jpg'
];

const IMAGES_YOAN: Array<string> = [
  'http://imgur.com/VMPuctD.jpg',
  'http://imgur.com/j1Lq97d.jpg',
  'http://imgur.com/HzmX9FP.jpg',
  'http://imgur.com/tmljwBT.jpg',
  'http://imgur.com/4lR2Lks.jpg',
  'http://imgur.com/oRcJcGi.jpg'
];

const CONTACTS: Contacts = [
  {id: '1', name: 'Simon', address: 'Jl Jeruk', phoneNo: '+62 812 425 0647', images: IMAGES_SIMON},
  {id: '2', name: 'Adi', address: 'Jl Apel', phoneNo: '+62 812 425 0647', images: IMAGES_ADI},
  {id: '3', name: 'Tian', address: 'Jl Rambutan', phoneNo: '+62 812 425 0647', images: IMAGES_ARYA},
  {id: '4', name: 'BJ', address: 'Jl Mangga', phoneNo: '+62 812 425 0647', images: IMAGES_BJ},
  {id: '5', name: 'Dominggus', address: 'Jl Pisang', phoneNo: '+62 812 425 0647', images: IMAGES_DOMINGGUS},
  {id: '6', name: 'Yoan', address: 'Jl Durian', phoneNo: '+62 812 425 0647', images: IMAGES_YOAN},
];

export default CONTACTS;
