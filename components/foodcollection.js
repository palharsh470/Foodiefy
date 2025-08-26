const menuItems = {
 burger: [
  {
    name: "Chicken Burger",
    star: require("../assets/images/Star.png"),
    price: 20,
    description: "100 gr chicken + tomato + cheese + lettuce",
    image: require("../assets/images/burger1.png"),
    detailsimage: require("../assets/images/detail.jpg"),
    logo: require("../assets/images/burger2.png"),
    shopName: "Burger Palace",
    details:
      "Our Chicken Burger is made with a juicy 100-gram chicken patty grilled to perfection. Fresh lettuce, tomato, and melted cheese enhance the flavors. Served with a signature sauce that balances tang and creaminess. Perfect for anyone who loves a light yet satisfying meal.",
  },
  {
    name: "Veggie Burger",
    star: require("../assets/images/Star.png"),
    price: 18,
    description: "Grilled veggies + cheese + lettuce + mayo",
    image: require("../assets/images/burger1.png"),
    detailsimage: require("../assets/images/detail.jpg"),
    logo: require("../assets/images/burger2.png"),
    shopName: "Green Bite Burgers",
    details:
      "A wholesome burger filled with grilled vegetables and topped with fresh lettuce and creamy mayo. Perfect for vegetarians seeking bold flavors. Our cheese blend adds an extra layer of taste and richness. Served fresh to give you a guilt-free indulgence.",
  },
  {
    name: "Double Beef Burger",
    star: require("../assets/images/Star.png"),
    price: 25,
    description: "200 gr beef patty + double cheese + onion",
    image: require("../assets/images/burger1.png"),
    detailsimage: require("../assets/images/detail.jpg"),
    logo: require("../assets/images/burger2.png"),
    shopName: "Beefy Treats",
    details:
      "Loaded with a double 200-gram beef patty for ultimate satisfaction. Generous layers of cheese and fresh onions bring balance and texture. A must-try for meat lovers craving something bold and filling. Served with our house seasoning for a smoky finish.",
  },
  {
    name: "Cheese Burst Burger",
    star: require("../assets/images/Star.png"),
    price: 22,
    description: "Juicy patty + cheese burst + lettuce + mayo",
    image: require("../assets/images/burger1.png"),
    detailsimage: require("../assets/images/detail.jpg"),
    logo: require("../assets/images/burger2.png"),
    shopName: "Cheesy Heaven",
    details:
      "A burger created for cheese lovers with an extra burst of molten cheese inside. Juicy patty paired with crisp lettuce and creamy mayo adds freshness. Rich in flavors and incredibly satisfying. Best paired with fries and a cool beverage.",
  },
  {
    name: "Spicy Chicken Burger",
    star: require("../assets/images/Star.png"),
    price: 21,
    description: "Spicy grilled chicken + jalapenos + cheese",
    image: require("../assets/images/burger1.png"),
    detailsimage: require("../assets/images/detail.jpg"),
    logo: require("../assets/images/burger2.png"),
    shopName: "Spice Hub Burgers",
    details:
      "Packed with spicy flavors, this burger features grilled chicken, fiery jalapenos, and gooey cheese. Perfect for spice lovers seeking a flavorful kick. Balanced with lettuce and signature sauces. A bold take on a classic chicken burger.",
  },
  {
    name: "Crispy Fish Burger",
    star: require("../assets/images/Star.png"),
    price: 24,
    description: "Crispy fish fillet + tartar sauce + lettuce",
    image: require("../assets/images/burger1.png"),
    detailsimage: require("../assets/images/detail.jpg"),
    logo: require("../assets/images/burger2.png"),
    shopName: "Ocean Grill",
    details:
      "Our Crispy Fish Burger offers a perfectly fried fish fillet topped with tangy tartar sauce. Crisp lettuce adds freshness to every bite. Ideal for seafood lovers looking for a twist. A light yet flavorful meal option.",
  },
  {
    name: "Classic Beef Burger",
    star: require("../assets/images/Star.png"),
    price: 19,
    description: "Beef patty + cheddar cheese + pickles",
    image: require("../assets/images/burger1.png"),
    detailsimage: require("../assets/images/detail.jpg"),
    logo: require("../assets/images/burger2.png"),
    shopName: "Classic Grill",
    details:
      "An all-time favorite with a seasoned beef patty and melted cheddar. Pickles and fresh veggies provide a tangy crunch. Simple yet satisfying, perfect for a quick bite. A staple for burger enthusiasts.",
  },
  {
    name: "BBQ Chicken Burger",
    star: require("../assets/images/Star.png"),
    price: 23,
    description: "Grilled chicken + BBQ sauce + cheddar",
    image: require("../assets/images/burger1.png"),
    detailsimage: require("../assets/images/detail.jpg"),
    logo: require("../assets/images/burger2.png"),
    shopName: "Smokey Bites",
    details:
      "A smoky, savory experience with BBQ sauce over juicy grilled chicken. Topped with cheddar cheese for a creamy touch. Brings together sweet, tangy, and savory flavors. Perfect for those who crave BBQ goodness.",
  },
  {
    name: "Paneer Burger",
    star: require("../assets/images/Star.png"),
    price: 17,
    description: "Paneer tikka + onion + lettuce + mayo",
    image: require("../assets/images/burger1.png"),
    detailsimage: require("../assets/images/detail.jpg"),
    logo: require("../assets/images/burger2.png"),
    shopName: "Indian Grill",
    details:
      "An Indian twist to the classic burger with flavorful paneer tikka. Onion slices and lettuce add crunch and freshness. Mayo enhances creaminess, making it a favorite among vegetarians. A wholesome and spicy delight.",
  },
  {
    name: "Mushroom Cheese Burger",
    star: require("../assets/images/Star.png"),
    price: 20,
    description: "Grilled mushrooms + mozzarella + lettuce",
    image: require("../assets/images/burger1.png"),
    detailsimage: require("../assets/images/detail.jpg"),
    logo: require("../assets/images/burger2.png"),
    shopName: "Mushroom Point",
    details:
      "Earthy grilled mushrooms paired with creamy mozzarella and crisp lettuce. A unique blend for those who love something different. Rich in taste yet light on the palate. A great vegetarian option with a gourmet touch.",
  },
],


  pizza: [
  {
    name: "Margherita Pizza",
    star: require("../assets/images/Star.png"),
    price: 15,
    description: "Classic cheese + tomato + basil topping",
    image: require("../assets/images/pizza2.png"),
    detailsimage: require("../assets/images/detail2.png"),
    logo: require("../assets/images/pizza2.png"),
    shopName: "Italiano Pizzeria",
    details:
      "A timeless favorite with a perfectly baked crust topped with rich tomato sauce, fresh basil leaves, and melted mozzarella cheese. Ideal for those who love simplicity with authentic Italian flavors."
  },
  {
    name: "Pepperoni Pizza",
    star: require("../assets/images/Star.png"),
    price: 18,
    description: "Loaded with pepperoni + mozzarella cheese",
    image: require("../assets/images/pizza2.png"),
    detailsimage: require("../assets/images/detail2.png"),
    logo: require("../assets/images/pizza2.png"),
    shopName: "Pepperoni Hub",
    details:
      "Generously loaded with spicy pepperoni slices and gooey mozzarella cheese on a crispy crust. A perfect choice for meat lovers craving a rich and savory pizza experience."
  },
  {
    name: "Veggie Supreme",
    star: require("../assets/images/Star.png"),
    price: 17,
    description: "Tomatoes + olives + onions + bell peppers",
    image: require("../assets/images/pizza2.png"),
    detailsimage: require("../assets/images/detail2.png"),
    logo: require("../assets/images/pizza2.png"),
    shopName: "Veggie Treats",
    details:
      "Packed with fresh vegetables including bell peppers, olives, onions, and tomatoes, this pizza offers a burst of flavor and crunch in every bite, perfect for veggie lovers."
  },
  {
    name: "BBQ Chicken Pizza",
    star: require("../assets/images/Star.png"),
    price: 20,
    description: "Grilled chicken + BBQ sauce + cheese",
    image: require("../assets/images/pizza2.png"),
    detailsimage: require("../assets/images/detail2.png"),
    logo: require("../assets/images/pizza2.png"),
    shopName: "Smokey Pizza House",
    details:
      "Smoky grilled chicken chunks layered over tangy BBQ sauce, topped with mozzarella cheese. A mouthwatering option for those who enjoy bold and smoky flavors."
  },
  {
    name: "Four Cheese Pizza",
    star: require("../assets/images/Star.png"),
    price: 22,
    description: "Mozzarella + cheddar + parmesan + blue cheese",
    image: require("../assets/images/pizza2.png"),
    detailsimage: require("../assets/images/detail2.png"),
    logo: require("../assets/images/pizza2.png"),
    shopName: "Cheese Corner",
    details:
      "A cheese lover's dream, combining four premium cheeses—mozzarella, cheddar, parmesan, and blue cheese—for a creamy, savory, and rich pizza experience."
  },
  {
    name: "Spicy Paneer Pizza",
    star: require("../assets/images/Star.png"),
    price: 19,
    description: "Paneer tikka + capsicum + spicy sauce",
    image: require("../assets/images/pizza2.png"),
    detailsimage: require("../assets/images/detail2.png"),
    logo: require("../assets/images/pizza2.png"),
    shopName: "Spicy India Pizza",
    details:
      "A perfect fusion of Indian spices and Italian crust, featuring marinated paneer cubes, fresh capsicum, and a spicy sauce that adds a punch of heat."
  },
  {
    name: "Hawaiian Pizza",
    star: require("../assets/images/Star.png"),
    price: 21,
    description: "Pineapple + ham + mozzarella cheese",
    image: require("../assets/images/pizza2.png"),
    detailsimage: require("../assets/images/detail2.png"),
    logo: require("../assets/images/pizza2.png"),
    shopName: "Tropical Slice",
    details:
      "A sweet and savory combination of juicy pineapple, savory ham, and creamy mozzarella. A tropical twist on the classic pizza for adventurous taste buds."
  },
  {
    name: "Mushroom Delight",
    star: require("../assets/images/Star.png"),
    price: 16,
    description: "Mushrooms + onion + garlic + cheese",
    image: require("../assets/images/pizza2.png"),
    detailsimage: require("../assets/images/detail2.png"),
    logo: require("../assets/images/pizza2.png"),
    shopName: "Mushroom Oven",
    details:
      "Loaded with sautéed mushrooms, onions, and a hint of garlic, this pizza is a treat for mushroom lovers, offering earthy flavors balanced with creamy cheese."
  },
  {
    name: "Chicken Sausage Pizza",
    star: require("../assets/images/Star.png"),
    price: 23,
    description: "Chicken sausage + onion + tomato + cheese",
    image: require("../assets/images/pizza2.png"),
    detailsimage: require("../assets/images/detail2.png"),
    logo: require("../assets/images/pizza2.png"),
    shopName: "Sausage Pizza Point",
    details:
      "A hearty pizza topped with flavorful chicken sausages, onions, and fresh tomatoes, balanced with gooey cheese for a satisfying bite every time."
  },
  {
    name: "Mexican Green Wave",
    star: require("../assets/images/Star.png"),
    price: 20,
    description: "Onions + capsicum + jalapeno + extra cheese",
    image: require("../assets/images/pizza2.png"),
    detailsimage: require("../assets/images/detail2.png"),
    logo: require("../assets/images/pizza2.png"),
    shopName: "Mexican Slice",
    details:
      "Spicy and tangy, this pizza features jalapenos, onions, and capsicum topped with extra cheese. A fiery option for those who love bold Mexican flavors."
  }
],

  sandwich: [
  {
    name: "Classic Veg Sandwich",
    star: require("../assets/images/Star.png"),
    price: 12,
    description: "Fresh veggies + cheese + mayo in soft bread",
    image: require("../assets/images/pizza1.png"),
    detailsimage: require("../assets/images/detail3.png"),
    logo: require("../assets/images/pizza1.png"),
    shopName: "Veggie Fresh",
    details:
      "A perfect vegetarian snack packed with fresh vegetables, creamy mayonnaise, and soft bread. Ideal for light lunches or snacks. This sandwich is a refreshing combination of flavors and textures, making it a favorite among health-conscious foodies."
  },
  {
    name: "Grilled Chicken Sandwich",
    star: require("../assets/images/Star.png"),
    price: 15,
    description: "Grilled chicken + lettuce + cheese + mayo",
    image: require("../assets/images/pizza1.png"),
    detailsimage: require("../assets/images/detail3.png"),
    logo: require("../assets/images/pizza1.png"),
    shopName: "Grill House",
    details:
      "Juicy grilled chicken slices layered with crisp lettuce, cheese, and creamy mayo. A perfect blend of smoky and tangy flavors for meat lovers. Best enjoyed warm for a satisfying bite."
  },
  {
    name: "Paneer Tikka Sandwich",
    star: require("../assets/images/Star.png"),
    price: 14,
    description: "Paneer tikka + onion + capsicum + chutney",
    image: require("../assets/images/pizza1.png"),
    detailsimage: require("../assets/images/detail3.png"),
    logo: require("../assets/images/pizza1.png"),
    shopName: "Indian Sandwich Hub",
    details:
      "Indian flavors meet a western twist with spicy paneer tikka, crunchy onions, capsicum, and tangy chutney. A delightful vegetarian treat for spice enthusiasts."
  },
  {
    name: "Club Sandwich",
    star: require("../assets/images/Star.png"),
    price: 16,
    description: "Triple layer bread + chicken + lettuce + tomato",
    image: require("../assets/images/pizza1.png"),
    detailsimage: require("../assets/images/detail3.png"),
    logo: require("../assets/images/pizza1.png"),
    shopName: "Club Treats",
    details:
      "A classic multi-layered sandwich filled with chicken, lettuce, tomatoes, and creamy dressing. Perfect for brunches and hearty meals, delivering a balance of taste and nutrition."
  },
  {
    name: "Cheese Burst Sandwich",
    star: require("../assets/images/Star.png"),
    price: 13,
    description: "Loaded with molten cheese + onion + tomato",
    image: require("../assets/images/pizza1.png"),
    detailsimage: require("../assets/images/detail3.png"),
    logo: require("../assets/images/pizza1.png"),
    shopName: "Cheese Lovers",
    details:
      "An indulgent treat bursting with gooey cheese, fresh onions, and tomatoes. A dream come true for cheese enthusiasts, delivering every bite with creamy richness."
  },
  {
    name: "Egg Mayo Sandwich",
    star: require("../assets/images/Star.png"),
    price: 14,
    description: "Boiled egg + mayo + lettuce in soft bread",
    image: require("../assets/images/pizza1.png"),
    detailsimage: require("../assets/images/detail3.png"),
    logo: require("../assets/images/pizza1.png"),
    shopName: "Eggy Delights",
    details:
      "A protein-rich sandwich made with boiled eggs, creamy mayo, and lettuce. Ideal for breakfast or quick snacks, offering a balance of taste and energy."
  },
  {
    name: "BBQ Chicken Sandwich",
    star: require("../assets/images/Star.png"),
    price: 17,
    description: "Chicken + BBQ sauce + cheese + lettuce",
    image: require("../assets/images/pizza1.png"),
    detailsimage: require("../assets/images/detail3.png"),
    logo: require("../assets/images/pizza1.png"),
    shopName: "Smokey Sandwiches",
    details:
      "Smoky BBQ chicken with creamy cheese and fresh lettuce, packed in toasted bread. A perfect combination for those who love bold, smoky flavors."
  },
  {
    name: "Tuna Sandwich",
    star: require("../assets/images/Star.png"),
    price: 18,
    description: "Tuna flakes + mayo + onion + lettuce",
    image: require("../assets/images/pizza1.png"),
    detailsimage: require("../assets/images/detail3.png"),
    logo: require("../assets/images/pizza1.png"),
    shopName: "Tuna Fresh",
    details:
      "Fresh tuna flakes mixed with creamy mayo, onions, and lettuce create this delicious seafood sandwich. Perfect for lunch or evening snacks."
  },
  {
    name: "Corn & Cheese Sandwich",
    star: require("../assets/images/Star.png"),
    price: 11,
    description: "Sweet corn + molten cheese + butter bread",
    image: require("../assets/images/pizza1.png"),
    detailsimage: require("../assets/images/detail3.png"),
    logo: require("../assets/images/pizza1.png"),
    shopName: "Corny Bites",
    details:
      "A cheesy delight with sweet corn and molten cheese in buttery bread. Light, tasty, and loved by kids and adults alike. A perfect teatime snack."
  },
  {
    name: "Spicy Paneer Sandwich",
    star: require("../assets/images/Star.png"),
    price: 15,
    description: "Paneer cubes + spicy sauce + onion + capsicum",
    image: require("../assets/images/pizza1.png"),
    detailsimage: require("../assets/images/detail3.png"),
    logo: require("../assets/images/pizza1.png"),
    shopName: "Spicy India Sandwich",
    details:
      "A fiery combination of paneer cubes tossed in spicy sauce with onions and capsicum. Perfect for those who love a punch of heat in every bite."
  },
]
};

export default menuItems;
