export const getFolder = (tenLoaiSach) => {
  switch (tenLoaiSach) {
    case "Sách kinh tế":
      return "economic-book";
    case "Sách ngoại ngữ":
      return "forgein-book";
    case "Sách lịch sử":
      return "history-book";
    case "Sách thiếu nhi":
      return "kid-books";
    case "Kỹ năng sống":
      return "life-skill";
    case "Truyện tranh":
      return "manga";
    case "Tiểu thuyết":
      return "novel";
    case "Tâm lý học":
      return "psy-book";
    case "Khoa học":
      return "science";
    case "Giáo khoa":
      return "textbook";
    default:
      return "unknown";
  }
};
