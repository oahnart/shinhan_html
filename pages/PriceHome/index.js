// Lấy tất cả các nút tab và nội dung tab
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// Lặp qua các nút tab để thêm sự kiện click
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Xóa lớp active khỏi tất cả các nút tab
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    // Thêm lớp active cho nút tab được click
    button.classList.add("active");

    // Ẩn tất cả nội dung các tab
    tabContents.forEach((content) => content.classList.remove("active"));
    // Hiển thị nội dung của tab được click
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});
