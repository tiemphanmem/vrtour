function togglePopup(title, description, images) {
  const thumbailSrc = images[0];
  const titleE = document.querySelector("#popup-title");
  const descriptionE = document.querySelector("#popup .content p");
  const thumbE = document.querySelector("#popup .thumbnail");
  const moreImages = document.querySelector("#popup .ant-modal-body .more-images");

  console.log(images)

  // Tạo HTML cho từng ảnh trong mảng
  const imageDetails = images.map(imageSrc => `
    <div class="ant-image css-szdez9" onClick="showDetailsImage('${imageSrc}')">
      <img class="ant-image-img css-szdez9" src="${imageSrc}" width="60" height="60">
    </div>
  `).join(""); // Nối tất cả các chuỗi lại với nhau


  moreImages.innerHTML = imageDetails;

  thumbE.src = thumbailSrc;
  titleE.textContent = title;
  descriptionE.textContent = description;

  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  popup.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('popup-open');
}

function closePopup() {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  popup.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('popup-open');
}

function showDetailsImage(src) {
  console.log(src)
  const thumbE = document.querySelector("#popup .thumbnail");
  thumbE.src = src;
}