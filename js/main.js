let isMobile = false;
// Kiểm tra nếu là thiết bị di động thì phóng to bằng cách giảm hfov
if (window.innerWidth < 768) {
  isMobile = true;
}
if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  isMobile = true;
}

// Hàm để tạo tooltip chứa video
function addVideoTooltip(hotSpotDiv, args) {
  hotSpotDiv.classList.add("custom-tooltip");
  const iframe = document.createElement("iframe");
  iframe.width = isMobile ? "600" : "300";
  iframe.height = isMobile ? "400" : "200";
  // iframe.src = `https://www.youtube.com/embed/${args.videoId}`; https://www.youtube.com/embed/mgRCwTPyc2o?si=dGjruFfjfO91XV-c
  iframe.src = `https://www.youtube.com/embed/mgRCwTPyc2o?si=dGjruFfjfO91XV-c`;
  iframe.frameBorder = "0";
  iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;

  hotSpotDiv.appendChild(iframe);

  if (isMobile) {
    const customHotspot = document.querySelector('.custom-hotspot');
    customHotspot.style.width = '500px';
    customHotspot.style.height = '300px';
  }
}


function addArrow(hotSpotDiv, args) {
  hotSpotDiv.classList.add("custom-tooltip");
  const element = document.createElement('div');
  element.className = 'arrow';
  element.innerHTML = '<span></span><span></span><span></span>';
  element.style.rotate = `${args.rotate}deg`;

  hotSpotDiv.appendChild(element);
  hotSpotDiv.classList.remove('pnlm-sprite');
}

function addInfor(hotSpotDiv, args) {
  hotSpotDiv.classList.add("custom-tooltip");
  const element = document.createElement('div');
  element.className = 'infor-btn';
  element.innerHTML = ` <div class="wrap">
    <button class="infor">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-info-circle"
        viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path
          d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      </svg>
      </a>
  </div> `;

  hotSpotDiv.appendChild(element);
  hotSpotDiv.classList.remove('pnlm-sprite');
}



// Hàm tạo tooltip với video ở dạng 3D
function add3DVideoTooltip(hotSpotDiv, args) {
  hotSpotDiv.classList.add("custom-3d-hotspot");

  const iframe = document.createElement("iframe");
  iframe.width = "400";
  iframe.height = "225";
  iframe.src = `https://www.youtube.com/embed/${args.videoId}`;
  iframe.frameBorder = "0";
  iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;

  hotSpotDiv.appendChild(iframe);
}
// Hàm tạo hotspot video với biến dạng động
function addVideoHotspot(hotSpotDiv, args) {
  // Tạo iframe và thiết lập src video
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/mgRCwTPyc2o?si=dGjruFfjfO91XV-c`;
  iframe.width = "560"; // Kích thước tạm thời, bạn có thể điều chỉnh
  iframe.height = "315";
  iframe.allow = "autoplay; encrypted-media";
  iframe.setAttribute("allowfullscreen", "");

  // Thêm iframe vào hotspot
  hotSpotDiv.appendChild(iframe);
  hotSpotDiv.classList.add("video-hotspot");

  // Cập nhật biến dạng video dựa trên góc nhìn
  viewer.on("viewchange", () => updateHotspotTransform(hotSpotDiv));
}

function updateHotspotTransform(hotSpotDiv) {
  const pitch = viewer.getPitch();
  const yaw = viewer.getYaw();

  // Tính toán độ nghiêng và xoay dựa trên pitch và yaw
  hotSpotDiv.style.transform = `rotateX(${pitch}deg) rotateY(${yaw}deg)`;
}