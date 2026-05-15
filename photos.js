const photos = [
{ category: 'chitradurga', src: 'images/Chitradurga11.jpg', alt: 'images' },
{ category: 'kali', src: 'images/kale1.jpg', alt: 'images' },
{ category: 'academics', src: 'images/academics/image_10.jpg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/image_11.jpg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/image_12.jpg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/image_13.jpg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/image_14.jpg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/image_15.jpg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/image_16.jpg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/image_17.jpg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/image_20.jpg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/image_21.jpg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/image_22.jpg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/image_23.jpg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/image_3.png', alt: 'academics' },
{ category: 'academics', src: 'images/academics/image_4.jpg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/image_5.jpg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/image_6.jpg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/image_8.jpg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/image_9.jpg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/img.avif', alt: 'academics' },
{ category: 'academics', src: 'images/academics/img2.avif', alt: 'academics' },
{ category: 'academics', src: 'images/academics/img3.avif', alt: 'academics' },
{ category: 'academics', src: 'images/academics/IMG_20200507_120703 (1).jpg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/WhatsApp Image 2021-05-20 at 23.11.39.jp.jpeg', alt: 'academics' },
{ category: 'academics', src: 'images/academics/WhatsApp Image 2021-05-20 at 23.12.11.jp.jpeg', alt: 'academics' },
{ category: 'adcl', src: 'images/adcl/aca.webp.png', alt: 'adcl' },
{ category: 'adcl', src: 'images/adcl/adcl1.webp.png', alt: 'adcl' },
{ category: 'adcl', src: 'images/adcl/adcl10.webp.png', alt: 'adcl' },
{ category: 'adcl', src: 'images/adcl/adcl11.webp.png', alt: 'adcl' },
{ category: 'ayush-photos', src: 'images/ayush-photos/0165160e-83e1-4859-9654-6eb243b989a1.jpeg', alt: 'ayush-photos' },
{ category: 'ayush-photos', src: 'images/ayush-photos/12e81100-0fcd-4f5b-adba-c5fcfb1e537c.jpeg', alt: 'ayush-photos' },
{ category: 'ayush-photos', src: 'images/ayush-photos/62690832-d4bc-4c1f-81f6-39d533a9b1d8.jpeg', alt: 'ayush-photos' },
{ category: 'ayush-photos', src: 'images/ayush-photos/ANP_6190.JPG.jpg', alt: 'ayush-photos' },
{ category: 'ayush-photos', src: 'images/ayush-photos/ANP_6194.JPG.jpg', alt: 'ayush-photos' },
{ category: 'ayush-photos', src: 'images/ayush-photos/ANP_6221.JPG.jpg', alt: 'ayush-photos' },
{ category: 'ayush-photos', src: 'images/ayush-photos/ANP_6230.JPG.jpg', alt: 'ayush-photos' },
{ category: 'ayush-photos', src: 'images/ayush-photos/ANP_6401.JPG.jpg', alt: 'ayush-photos' },
{ category: 'ayush-photos', src: 'images/ayush-photos/ANP_6418.JPG.jpg', alt: 'ayush-photos' },
{ category: 'ayush-photos', src: 'images/ayush-photos/b6593dd4-feb5-4974-b1d9-46e2a3cdf6cc.jpeg', alt: 'ayush-photos' },
{ category: 'ayush-photos', src: 'images/ayush-photos/PHOTO-2024-03-27-07-02-15 (1).jpg', alt: 'ayush-photos' },
{ category: 'ayush-photos', src: 'images/ayush-photos/Screenshot 2024-01-11 124146.png', alt: 'ayush-photos' },
{ category: 'ayush-photos', src: 'images/ayush-photos/WhatsApp Image 2024-01-21 at 10.44.59.jpeg', alt: 'ayush-photos' },
{ category: 'ayush-photos', src: 'images/ayush-photos/WhatsApp Image 2024-01-21 at 10.45.41.jpeg', alt: 'ayush-photos' },
{ category: 'family', src: 'images/family/image_10.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_11.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_12.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_13.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_14.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_15.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_16.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_17.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_18.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_19.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_20.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_21.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_22.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_23.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_24.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_25.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_26.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_27.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_28.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_29.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_3.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_30.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_31.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_32.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_33.png', alt: 'family' },
{ category: 'family', src: 'images/family/image_34.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_35.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_36.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_37.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_38.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_39.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_4.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_40.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_41.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_42.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_43.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_44.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_45.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_46.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_47.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_48.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_49.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_5.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_50.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_51.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_52.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_53.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_54.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_55.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_56.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_57.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_58.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_59.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_6.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_60.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_61.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_62.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_63.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_64.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_65.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_66.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_67.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_68.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_69.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_7.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_70.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_71.jpg', alt: 'family' },
{ category: 'family', src: 'images/family/image_8.jpeg', alt: 'family' },
{ category: 'family', src: 'images/family/image_9.jpeg', alt: 'family' },
{ category: 'forestdeptphotos', src: 'images/forestDeptPhotos/ktr.webp.png', alt: 'forestdeptphotos' },
{ category: 'forestdeptphotos', src: 'images/forestDeptPhotos/ktr2.webp.png', alt: 'forestdeptphotos' },
{ category: 'forestdeptphotos', src: 'images/forestDeptPhotos/ktr3.webp.png', alt: 'forestdeptphotos' },
{ category: 'honours', src: 'images/honours/A C 1.jpg', alt: 'honours' },
{ category: 'honours', src: 'images/honours/A C 2.jpg', alt: 'honours' },
{ category: 'honours', src: 'images/honours/A C 3.jpg', alt: 'honours' },
{ category: 'honours', src: 'images/honours/A C 4.jpg', alt: 'honours' },
{ category: 'honours', src: 'images/honours/AMZ_0019.JPG.jpg', alt: 'honours' },
{ category: 'honours', src: 'images/honours/AMZ_0175.jpg', alt: 'honours' },
{ category: 'honours', src: 'images/honours/Asia Book of Records.jpeg', alt: 'honours' },
{ category: 'honours', src: 'images/honours/IMG_0850.HEIC.jpeg', alt: 'honours' },
{ category: 'honours', src: 'images/honours/IMG_2176.HEIC.jpeg', alt: 'honours' },
{ category: 'honours', src: 'images/honours/IMG_5774.JPG.jpg', alt: 'honours' },
{ category: 'honours', src: 'images/honours/IMG_5777.JPG.jpg', alt: 'honours' },
{ category: 'honours', src: 'images/honours/Launched rapid response vehicles to strengthen regulatory responsibility of board..jpeg', alt: 'honours' },
{ category: 'honours', src: 'images/honours/mobileapp.JPG.jpg', alt: 'honours' },
{ category: 'honours', src: 'images/honours/WhatsApp Image 2021-03-12 at 11.38.05.jp.jpeg', alt: 'honours' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/2-min.JPG.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/3-min.JPG.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/4-min.JPG.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/5 (1)-min.JPG.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/5-min.JPG.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/A C 1.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/A C 2.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/A C 3.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/A C 4.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/AMZ_0019.JPG.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/AMZ_0175.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/Asia Book of Records.jpeg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/BV9A8047.jfif.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/BV9A8110.jfif.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/BV9A8116.jfif.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/IMG-0144.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/IMG-7578.JPG.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/IMG-7603.JPG.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/IMG_0850.HEIC.jpeg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/IMG_2106-min.JPG.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/IMG_2133-min.JPG.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/IMG_2170-min.JPG.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/IMG_2176.HEIC.jpeg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/IMG_2364-min.JPG.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/IMG_2813-min.JPG.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/IMG_5774.JPG.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/IMG_5777.JPG.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/Launched rapid response vehicles to strengthen regulatory responsibility of board..jpeg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/mobileapp.JPG.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/photos 1704-min.jpg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/WhatsApp Image 2020-11-05 at 09.14.57.jp.jpeg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/WhatsApp Image 2021-03-12 at 11.36.32.jp.jpeg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/WhatsApp Image 2021-03-12 at 11.38.05.jp.jpeg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/WhatsApp Image 2021-04-06 at 10.42.23 (1.jpeg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/WhatsApp Image 2021-04-06 at 10.42.23 (2.jpeg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/WhatsApp Image 2021-04-06 at 10.42.23 (3.jpeg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/WhatsApp Image 2021-04-06 at 10.42.23.jp.jpeg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/WhatsApp Image 2021-04-06 at 10.50.42.jp (1).jpeg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/WhatsApp Image 2021-04-06 at 10.50.42.jp.jpeg', alt: 'kspcb-photos' },
{ category: 'kspcb-photos', src: 'images/kspcb-Photos/WhatsApp Image 2021-07-01 at 13.53.31.jpeg', alt: 'kspcb-photos' },
{ category: 'shimoga', src: 'images/shimoga/shimoga.webp.png', alt: 'shimoga' },
{ category: 'shimoga', src: 'images/shimoga/shimoga10.webp.png', alt: 'shimoga' },
{ category: 'shimoga', src: 'images/shimoga/shimoga12.webp.png', alt: 'shimoga' },
{ category: 'shimoga', src: 'images/shimoga/shimoga13.webp.png', alt: 'shimoga' },
{ category: 'shimoga', src: 'images/shimoga/shimoga14.webp.png', alt: 'shimoga' },
{ category: 'shimoga', src: 'images/shimoga/shimoga15.webp.png', alt: 'shimoga' },
{ category: 'shimoga', src: 'images/shimoga/shimoga16.webp.png', alt: 'shimoga' },
{ category: 'shimoga', src: 'images/shimoga/shimoga18.webp.png', alt: 'shimoga' },
{ category: 'shimoga', src: 'images/shimoga/shimoga2.webp.png', alt: 'shimoga' },
{ category: 'shimoga', src: 'images/shimoga/shimoga3.webp.png', alt: 'shimoga' },
{ category: 'shimoga', src: 'images/shimoga/shimoga4.webp.png', alt: 'shimoga' },
{ category: 'shimoga', src: 'images/shimoga/shimoga5.webp.png', alt: 'shimoga' },
{ category: 'shimoga', src: 'images/shimoga/shimoga6.webp.png', alt: 'shimoga' },
{ category: 'shimoga', src: 'images/shimoga/shimoga7.webp.png', alt: 'shimoga' },
{ category: 'shimoga', src: 'images/shimoga/shimoga9.webp.png', alt: 'shimoga' },
];
const photoGrid = document.getElementById('photoGrid');
const tabs = document.querySelectorAll('.filter-tab');
let currentCategory = 'all';
let visibleCount = 12;
const loadStep = 12;

/* Render Photos */
function renderPhotos(reset = false) {

  if (reset) {
    photoGrid.innerHTML = '';
  }
  const filtered =
    currentCategory === 'all'
      ? photos
      : photos.filter(
          photo => photo.category === currentCategory
        );
  const photosToShow =
    filtered.slice(0, visibleCount);
  photoGrid.innerHTML = '';
  photosToShow.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.alt;
    img.loading = 'lazy';
    photoGrid.appendChild(img);
  });

  updateLoadMore(filtered.length);

}

/* Load More Button */
function updateLoadMore(total) {

  let btn =
    document.getElementById('loadMoreBtn');
  if (visibleCount >= total) {
    if (btn) btn.style.display = 'none';
    return;
  }

  if (!btn) {

    btn = document.createElement('button');
    btn.id = 'loadMoreBtn';
    btn.className = 'load-more-btn';
    btn.textContent = 'Load More Photos';
    photoGrid.after(btn);
    btn.addEventListener('click', () => {
      visibleCount += loadStep;
      renderPhotos();
    });
  }
  btn.style.display = 'inline-flex';
}

/* Category Tabs */
tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    tabs.forEach(t =>
      t.classList.remove('active')
    );
    tab.classList.add('active');
    currentCategory =
      tab.id.replace('tab-', '');
    visibleCount = loadStep;
    renderPhotos(true);
  })
});

/* Initial Load */
renderPhotos(true);