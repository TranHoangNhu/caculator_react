import { useState } from "react";

export default function Calc() {
  // Khởi tạo state để lưu giá trị hiện tại của máy tính
  const [currentValue, setCurrentValue] = useState("0");

  // Hàm xử lý khi nhấn các phím số hoặc phép tính
  const handleButtonClick = (value) => {
    // Kiểm tra nếu giá trị hiện tại là "0" hoặc kết quả trước đó là kết quả cuối cùng
    if (currentValue === "0" || currentValue === "Result") {
      // Đặt giá trị mới là giá trị của phím được nhấn
      setCurrentValue(value);
    } else {
      // Nếu không, thêm giá trị của phím được nhấn vào giá trị hiện tại
      setCurrentValue(currentValue + value);
    }
  };

  // Hàm xử lý khi nhấn nút "=" để tính toán kết quả
  const handleCalculate = () => {
    try {
      // Sử dụng hàm eval để tính toán biểu thức trong giá trị hiện tại
      let result = eval(currentValue);
      let numberAsString = result.toString();
      let decimalIndex = numberAsString.indexOf(".");
      if (decimalIndex !== -1) {
        // Lấy độ dài của phần sau dấu chấm thập phân bằng cách trừ đi vị trí của dấu chấm từ độ dài tổng cộng của chuỗi
        const lengthAfterDecimal = numberAsString.length - decimalIndex - 1;
        if (parseInt(lengthAfterDecimal) > 2) {
          result = parseFloat(result.toFixed(2));
        }
      }
      // Đặt giá trị mới là kết quả tính toán
      setCurrentValue(result.toString());
    } catch (error) {
      // Xử lý lỗi nếu có
      setCurrentValue("Error");
    }
  };

  // Hàm xử lý khi nhấn nút "Clear" để xóa giá trị hiện tại
  const handleClear = () => {
    setCurrentValue("0");
  };

  return { currentValue, handleClear, handleCalculate, handleButtonClick };
}
