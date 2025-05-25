// Kiem tra email hop le
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

//Kiem tra so dien thoai vietnam(bat dau bang 0 hoac +84)
export function isValidPhoneNumber(phone) {
  const regex = /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/;
  return regex.test(phone);
}

// Kiem tra password co it nhat 6 ky tu
export function isStrongPassword(password) {
  return typeof password === "string" && password.length >= 6;
}

// Kiểm tra CCCD (12 số)
export function isValidCCCD(cccd) {
  const regex = /^\d{12}$/;
  return regex.test(cccd);
}

// Kiểm tra mã ZIP (VN: 5 hoặc 6 chữ số)
export function isValidZipCode(zip) {
  const regex = /^\d{5,6}$/;
  return regex.test(zip);
}

// kiem tra gia tri khong rong
export function isNotEmpty(value) {
  return (
    value !== undefined && value !== null && value.toString().trim() !== ""
  );
}
