export type quiztype={[key:string]:{imgkeyword:string[]|string, ans:[string, string, string, string], correctans:number}}
export const mainquiz:quiztype = {
['Siapa nama murid terakhir dalam 12 Murid Yesus?']:{
    imgkeyword:['catholic','jesus','statue'],
    ans: ['Yakobus', 'Simon Petrus', 'Yudas Iskariot', 'Tadeus'],
    correctans:3
},
['Siapa yang melawan Goliath?']:{
    imgkeyword:'https://th.bing.com/th/id/OIF.Rm2eQB1xJJKyVpRnLZRscQ?rs=1&pid=ImgDetMain',
    ans: ['Daud', 'Saul', 'Yohannes', 'Prajurit'],
    correctans:1
},
['Alat apa yang digunakan Daud untuk melawan Goliath?']:{
    imgkeyword:'https://th.bing.com/th/id/OIF.Rm2eQB1xJJKyVpRnLZRscQ?rs=1&pid=ImgDetMain',
    ans: ['Ketapel', 'Umban', 'Pedang', 'Tombak'],
    correctans:2
},
['Siapa nama murid ke 3 dalam 12 Murid Yesus?']:{
    imgkeyword:'https://th.bing.com/th/id/OIP.XXrGhEC-YmB0SPYagSEQ0AHaE8?rs=1&pid=ImgDetMain',
    ans: ['Yohanes', 'Filipus', 'Matius', 'Yakobus'],
    correctans:4
},
['Pohon apa yang Zakheus panjat untuk melihat Yesus?']:{
    imgkeyword:'https://i.pinimg.com/originals/c8/cb/b3/c8cbb37061f29c484e04620f7f766160.jpg',
    ans:['Pohon Anggur', 'Pohon Jeruk', 'Pohon Ara', 'Pohon Palma'],
    correctans:3
},
['Tanggal berapakah untuk Hari Raya Natal?']:{
    imgkeyword:['christmas','tree','gifts'],
    ans:['25 Desember', '31 Oktober','1 Desember','14 Februari'],
    correctans:1
},
['Dimana tempat tinggalnya Adam dan Hawa?']:{
    imgkeyword:'https://th.bing.com/th/id/OIP.WcjNIuoaLz7kCBSOxxoJlgHaFL?rs=1&pid=ImgDetMain',
    ans:['Taman Getsemani', 'Taman Eden', 'Tanah Kanaan', 'Golgota'],
    correctans: 2
},
['Setelah Sakramen Baptis, selanjutnya apa lagi ya?']:{
    imgkeyword:'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1643188363/gjcb1glncevi4muzegiu.jpg',
    ans:['Sakramen Perkawinan', 'Sakramen Tobat', 'Sakramen Krisma', 'Sakramen Pengurapan Orang Sakit'],
    correctans: 3
},

}
export default mainquiz