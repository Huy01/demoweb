/* changeImage*/
var index = 2
changeImage=function(){
    var imgs =["https://kawasakisaigon.com/upload/hinhanh/slider-25980.jpg", 
                "https://kawasakisaigon.com/upload/hinhanh/zx25822r.jpg", 
                "https://kawasakisaigon.com/upload/hinhanh/slider-31740.jpg",
                "https://kawasakisaigon.com/upload/hinhanh/slider-44280.jpg",
                "https://kawasakisaigon.com/upload/hinhanh/z6505360.jpg",
                "https://kawasakisaigon.com/upload/hinhanh/zh24392.jpg",
                "https://kawasakisaigon.com/upload/hinhanh/vucans608s.jpg",
                "https://kawasakisaigon.com/upload/hinhanh/zx10r720.jpg"];
    document.getElementById('img').src= imgs[index];
    index++
    if(index==8){
        index = 0;
    }
}
setInterval(changeImage,1500);