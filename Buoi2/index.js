// * Bài 1: (Vòng lặp)
// Viết chương trình in ra tất cả số từ 1 đến 100, nếu số chia hết cho 3 thì in "Fizz", chia hết cho 5 thì in "Buzz", chia hết cho cả 3 và 5 thì in "FizzBuzz".

// const printWithConditions = () => {
//   for (let i = 3; i <= 100; i++) {
//     if (i % 3 == 0) {
//       console.log("Fizz", i);
//     } else if (i % 5 == 0) {
//       console.log("Buzz", i);
//     } else if (i % 3 == 0 && i % 5 == 0) {
//       console.log("FizzBuzz", i);
//     }
//   }
// };

// * Bài 2: (Mảng + Object)
// Tìm học sinh có điểm cao nhất trong mảng.
// const students = [
//   { name: "Hùng", score: 75 },
//   { name: "Mai", score: 85 },
//   { name: "Lan", score: 90 },
// ];

// const findHighestScore = (students) => {
//   const scores = students.map((student) => student.score);
//   const max = Math.max(...scores);
//   return students.find((student) => student.score == max);
// };
// console.log(findHighestScore(students));

// Bài 3
// Viết một chương trình quản lý danh sách sản phẩm với các chức năng:
// Thêm sản phẩm mới vào danh sách.
// Hiển thị danh sách sản phẩm.
// Tìm kiếm sản phẩm theo tên.
// Tính tổng giá trị các sản phẩm.
let products = [
  { name: "Laptop", price: 1500 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 400 },
];

const addProduct = (products) => {
  const name = prompt("Nhập tên sản phẩm: ");
  const price = Number(prompt("Nhập giá sản phẩm: "));
  products.push({ name, price });
  return products;
};

const showProducts = (products) => {
  const items = products.forEach((p) => {
    console.log(`${p.name} - ${p.price}$`);
  });
  return items;
};

const searchProductsByName = (products) => {
  const key = prompt("Nhập sản phẩm bạn muốn tìm: ");
  const result = products.filter((product) =>
    product.name.toLowerCase().includes(key.toLowerCase())
  );
  if (result.length == 0) {
    console.log(key + "Not found");
    return;
  }
  console.log(result);
};

const calcSumPriceProducts = (products) => {
  const prices = products.map((product) => product.price);
  const total = prices.reduce((sum, val) => sum + val, 0);
  console.log(total)
};

const menu = () => {
  let choice;

  do {
    choice = prompt(
      "=== MENU ===\n" +
        "1. Thêm sản phẩm\n" +
        "2. Hiển thị danh sách sản phẩm\n" +
        "3. Tìm sản phẩm theo tên\n" +
        "4. Tính tổng giá trị sản phẩm\n" +
        "0. Thoát\n" +
        "Chọn chức năng: "
    );
    if (choice === null) {
      console.log("Thoát menu");
      break;
    }

    switch (choice) {
      case "1":
        addProduct(products);
        break;
      case "2":
        showProducts(products);
        break;
      case "3":
        searchProductsByName(products);
        break;
      case "4":
        calcSumPriceProducts(products);
        break;
      case "0":
        console.log("Thoát chương trình!");
        break;
      default:
        console.log("Lựa chọn không hợp lệ!");
    }
  } while (choice !== "0");
};

document.getElementById("runMenu").addEventListener("click", () => {
  menu();
});
