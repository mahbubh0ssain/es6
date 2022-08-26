//  যখন আমার সন্দেহ হবে যে কোন কিছু মনে হয় অব্জেক্টে না তাইলে তার আগে একটা ? চিহ্ন দিয়ে দিবো তাই আমাকে এরোর দিবে না।

const petOwner = {
  name: "Hero Alom",
  contact: {
    phone: "09376253",
    email: "xyz@gmail.com",
  },
  cat: {
    name: "Lofie",
    info: {
      color: "black",
      weight: "1.2kg",
    },
  },
};

// console.log(petOwner.cat?.info?.food?.price);

// console.log("hello world");\

const product = {
  name: "Laptop",
  model: "Yoga 3",
  price: 49000,
  dusk: "512SSD",
};

const { price } = product;
console.log(price);
