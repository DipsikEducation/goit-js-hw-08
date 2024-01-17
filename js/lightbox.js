/*
preview — посилання на маленьку версію зображення для картки галереї
original — посилання на велику версію зображення для модального вікна
description — текстовий опис зображення, для атрибута alt малого зображення та підпису великого зображення в модалці.


*/

/*------------------------Array Images-----------*/



/*================Library========================*/



const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];



// const addListenerGallery = document.querySelector('.gallery');

// addListenerGallery.addEventListener('click', (event) => {
//   // go to link
//   event.preventDefault();

//   // Chek ivent click
//   if (event.target.classList.contains('gallery-image')) {
//     // Get data source
//     const largeImageSource = event.target.dataset.source;
    
//     // Выводим в консоль
//     console.log(largeImageSource);
//   }
// });




// // Імпорт бібліотеки basicLightbox
// import * as basicLightbox from 'basiclightbox';

// const addListenerGallery = document.querySelector('.gallery');

// addListenerGallery.addEventListener('click', (event) => {
//   event.preventDefault();

//   if (event.target.classList.contains('gallery-image')) {
//     const largeImageSource = event.target.dataset.source;

//     // Викликайте функцію, яка відкриває модальне вікно, передавши велике зображення
//     openModal(largeImageSource);
//   }
// });

// function openModal(imageSource) {
//   // Заміна атрибута src в модальному вікні перед відкриттям
//   document.getElementById('modal-image').src = imageSource;

//   // Відкриття модального вікна з великим зображенням
//   const modal = document.getElementById('modal');
//   basicLightbox.create(modal.innerHTML).show();
// }



try {
  require.resolve('basiclightbox');
  console.log('basiclightbox is installed.');
} catch (error) {
  console.error('basiclightbox is not installed.');
}