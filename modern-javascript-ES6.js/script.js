// 3 - FILTER
// Filter between the elements of an array To regroup the elements
const array1 = [1, 2, 3, 4, 5];
const highNumbers = array1.filter((n) => {
    if (n >= 3) {
        return n;
    }
});
console.log(array1);
console.log(highNumbers);

const user = [
    {
        name: "Ravi",
        available: true
    },
    {
        name: "Felipe",
        available: false
    },
    {
        name: "Ana",
        available: true
    },
    {
        name: "Marta",
        available: false
    },
    {
        name: "Fernando",
        available: true
    }
]

const usersTrue = user.filter((user) => {
    if (user.available === true) {
        return user
    }
});

const usersFalse = user.filter((user) => {
    if (user.available === false) {
        return user;
    }
})

console.log(user);
console.log(usersTrue);
console.log(usersFalse);

//4 - MAP
// Iterates through all the elements of the array in order to modify the elements

const products = [
    {
        name: 'Shirt',
        price: 10.98,
        category: 'Clothes'
    },
    {
        name: 'Pants',
        price: 68.92,
        category: 'Clothes'
    },
    {
        name: 'Cap',
        price: 7.95,
        category: 'Clothes'
    },
    {
        name: 'Telephone',
        price: 5200.95,
        category: 'Electronics'
    }
]

products.map((product) => {
    if (product.category === 'Clothes') {
        product.onSale = true;
        product.price = product.price - 1.10;
    }
})

console.log(products);

// 5 - DESTRUCTURING
// It is a resource that can be used in arrays and objects.
// Transforms the items of one of these data into variables.

const fruits = ['Apple', 'Strawberry', 'Blackberry', 'Watermelon', 'Mango', 'Pineapple', 'Kiwifruit', 'Avocado', 'Cashew', 'Lemon', 'Banana'];

const [f0, f1, f2, f3] = fruits;
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);

const [
    { name: productName, price, category }
] = products;

console.log(productName);
console.log(price);
console.log(category);


// 6 - SPREAD OPERATOR
// It is possible to place the elements of an Array into another.
// Used to create new values ​​of this data in other Arrays and Objects. It is possible to join several arrays in a simple way or add values ​​from one object to another.

// It is possible to join several arrays in a simple way or add values ​​from one object to another, for example.

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];
console.log(a3);

const a4 = [1, 2, 3, ...a2, 7, 8];
console.log(a4);

// 7 - CLASS
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    };

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }
}

const shirt = new Product('Shirt Blue', 20);
const shoe = new Product('Shoe Blue', 220);
console.log(shirt);
console.log(shirt.name);
console.log(shirt.price);
console.log(shirt.productWithDiscount(50));

// 8 - Heritage
// extends, super
class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors;
    };

    showColors() {
        console.log("As cores são:")
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const pant = new ProductWithAttributes("Pant1", 200, ["Blue", "Green", "Black"]);
pant.showColors();