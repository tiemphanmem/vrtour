// Hàm để tạo tooltip chứa video
function addVideoTooltip(hotSpotDiv, args) {
  hotSpotDiv.classList.add("custom-tooltip");

  const iframe = document.createElement("iframe");
  iframe.width = "300";
  iframe.height = "200";
  // iframe.src = `https://www.youtube.com/embed/${args.videoId}`; https://www.youtube.com/embed/mgRCwTPyc2o?si=dGjruFfjfO91XV-c
  iframe.src = `https://www.youtube.com/embed/mgRCwTPyc2o?si=dGjruFfjfO91XV-c`;
  iframe.frameBorder = "0";
  iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;

  hotSpotDiv.appendChild(iframe);
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