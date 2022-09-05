const imageArr = ['img-1.jpg', 'img-2.jpg', 'img-3.jpg']
const imageChange = document.querySelector('#change-image')
let i = 0

function changeImage() {
  if (i <= imageArr.length - 1) {
    imageChange.src = imageArr[i]
    console.log(i)
    i++
  } else {
    i = 0
    console.log('start');
  }
}

setInterval(changeImage, 2000)
