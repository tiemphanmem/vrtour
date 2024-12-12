function togglePopup(title, description, images) {
  const thumbailSrc = images[0];

  const card = `<div role="dialog" aria-modal="true" class="ant-modal css-szdez9 css-126h5b1"
    style="width: 520px; transform-origin: 323.226px 350.009px;" aria-labelledby=":r22:">
    <div tabindex="0" aria-hidden="true" style="width: 0px; height: 0px; overflow: hidden; outline: none;"></div>
    <div tabindex="-1" style="outline: none;">
      <div class="ant-modal-content">

        <div class="ant-modal-header">
          <div class="ant-modal-title" id=":r22:">Thông tin chi tiết</div>
          <button type="button" aria-label="Close" class="ant-modal-close"><span class="ant-modal-close-x"><span
                role="img" aria-label="close" class="anticon anticon-close ant-modal-close-icon"><svg
                  fill-rule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em"
                  height="1em" fill="currentColor" aria-hidden="true">
                  <path
                    d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z">
                  </path>
                </svg></span></span></button>
        </div>
        <div class="ant-modal-body">
          <div>
            <div class="css-48s7n1 ant-flex css-szdez9">
              <div style="flex: 1.4 1 0%;">
                <div class="ant-image css-szdez9 thumb"><img class="ant-image-img thumbnail css-szdez9"
                    src="${thumbailSrc}" width="100%" height="390" style="">

                </div>
                <div class="ant-flex css-szdez9 ant-flex-justify-center more-images" style="margin-top: 20px;">
                  <div class="ant-image css-szdez9"><img class="ant-image-img css-szdez9"
                      src="https://s3.yootek.com.vn/yootek/1730903557796-9829.png" width="60" height="60">
                  </div>
                  <div class="ant-image css-szdez9"><img class="ant-image-img css-szdez9"
                      src="https://s3.yootek.com.vn/yootek/1730903557796-9829.png" width="60" height="60">
                  </div>
                  <div class="ant-image css-szdez9"><img class="ant-image-img css-szdez9"
                      src="https://s3.yootek.com.vn/yootek/1730903557796-9829.png" width="60" height="60">
                  </div>
                </div>
              </div>
              <div class="content" style="flex: 1 1 0%;">
                <article class="ant-typography title css-szdez9">${title}</article>
                <p>${description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div tabindex="0" aria-hidden="true" style="width: 0px; height: 0px; overflow: hidden; outline: none;"></div>
  </div>`;


  const titleE = document.querySelector("#popup-title");
  const descriptionE = document.querySelector("#popup .content p");
  const thumbE = document.querySelector("#popup .thumbnail");

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