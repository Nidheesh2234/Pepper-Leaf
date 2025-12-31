export interface Product {
    id: number
    name: string
    description: string
    price: number
    heat: number
    image: string
    tag: "Classic" | "Spicy" | "Best Seller" | "New"
}

export const products: Product[] = [
    // Best Sellers (Original 6)
    {
        id: 1,
        name: "Gongura Pickle",
        description: "Tangy sorrel leaves with Guntur chilli.",
        price: 349,
        heat: 4,
        image: "/images/products/gongura-pickle.png",
        tag: "Best Seller"
    },
    {
        id: 2,
        name: "Avakaya Pickle",
        description: "The legendary Andhra mango pickle.",
        price: 349,
        heat: 5,
        image: "/images/products/avakaya-pickle.png",
        tag: "Best Seller"
    },
    {
        id: 3,
        name: "Garlic Podi",
        description: "Crunchy, spicy garlic sprinkle.",
        price: 249,
        heat: 3,
        image: "/images/products/garlic-podi.png",
        tag: "Classic"
    },
    {
        id: 4,
        name: "Sambar Masala",
        description: "Traditional slow-roast blend.",
        price: 199,
        heat: 2,
        image: "/images/products/sambar-masala.png",
        tag: "Classic"
    },
    {
        id: 5,
        name: "Chettinad Masala",
        description: "Complex, aromatic, and bold.",
        price: 229,
        heat: 4,
        image: "/images/products/chettinad-masala.png",
        tag: "Spicy"
    },
    {
        id: 6,
        name: "Curry Leaf Podi",
        description: "Aromatic karivepaku powder.",
        price: 249,
        heat: 2,
        image: "/images/products/curry-leaf-podi.png",
        tag: "Classic"
    },
    // New Pickles
    {
        id: 7,
        name: "Tomato Pickle",
        description: "Sun-dried tomatoes with mustard oil.",
        price: 299,
        heat: 3,
        image: "/images/products/gongura-pickle.png",
        tag: "Classic"
    },
    {
        id: 8,
        name: "Lemon Pickle",
        description: "Aged lime in spicy brine.",
        price: 289,
        heat: 3,
        image: "/images/products/avakaya-pickle.png",
        tag: "Classic"
    },
    {
        id: 9,
        name: "Red Chilli Pickle",
        description: "Pandu Mirapakaya Pachadi.",
        price: 329,
        heat: 5,
        image: "/images/products/gongura-pickle.png",
        tag: "Spicy"
    },
    {
        id: 10,
        name: "Amla Pickle",
        description: "Indian gooseberry with fenugreek.",
        price: 319,
        heat: 2,
        image: "/images/products/avakaya-pickle.png",
        tag: "Classic"
    },
    {
        id: 11,
        name: "Ginger Pickle",
        description: "Zesty ginger relish, great with idli.",
        price: 299,
        heat: 3,
        image: "/images/products/gongura-pickle.png",
        tag: "Classic"
    },
    {
        id: 12,
        name: "Drumstick Pickle",
        description: "Unique texture, burst of flavor.",
        price: 349,
        heat: 3,
        image: "/images/products/avakaya-pickle.png",
        tag: "New"
    },
    // Podis (Powders)
    {
        id: 13,
        name: "Idli Podi",
        description: "Gunpowder for your breakfast.",
        price: 199,
        heat: 3,
        image: "/images/products/garlic-podi.png",
        tag: "Best Seller"
    },
    {
        id: 14,
        name: "Peanut Podi",
        description: "Roasted peanut spice mix.",
        price: 219,
        heat: 1,
        image: "/images/products/curry-leaf-podi.png",
        tag: "Classic"
    },
    {
        id: 15,
        name: "Sesame Podi",
        description: "Nuvvula Podi, rich and nutty.",
        price: 229,
        heat: 1,
        image: "/images/products/garlic-podi.png",
        tag: "Classic"
    },
    {
        id: 16,
        name: "Kandipoppu Podi",
        description: "Spiced lentil powder for rice.",
        price: 199,
        heat: 1,
        image: "/images/products/curry-leaf-podi.png",
        tag: "Classic"
    },
    {
        id: 17,
        name: "Mint Leaf Podi",
        description: "Refreshing pudina spice mix.",
        price: 249,
        heat: 2,
        image: "/images/products/garlic-podi.png",
        tag: "New"
    },
    {
        id: 18,
        name: "Coriander Podi",
        description: "Kothimeera karam.",
        price: 249,
        heat: 3,
        image: "/images/products/curry-leaf-podi.png",
        tag: "Classic"
    },
    // Masalas
    {
        id: 19,
        name: "Rasam Powder",
        description: "For the perfect comfort soup.",
        price: 189,
        heat: 3,
        image: "/images/products/sambar-masala.png",
        tag: "Classic"
    },
    {
        id: 20,
        name: "Garam Masala",
        description: "Premium whole spice blend.",
        price: 299,
        heat: 4,
        image: "/images/products/chettinad-masala.png",
        tag: "Best Seller"
    },
    {
        id: 21,
        name: "Biryani Masala",
        description: "Hyderabadi style aromatic mix.",
        price: 349,
        heat: 4,
        image: "/images/products/sambar-masala.png",
        tag: "Spicy"
    },
    {
        id: 22,
        name: "Fish Fry Masala",
        description: "Coastal style marinade mix.",
        price: 249,
        heat: 4,
        image: "/images/products/chettinad-masala.png",
        tag: "Spicy"
    },
    {
        id: 23,
        name: "Chicken Masala",
        description: "Homestyle curry powder.",
        price: 249,
        heat: 4,
        image: "/images/products/sambar-masala.png",
        tag: "Classic"
    },
    {
        id: 24,
        name: "Mutton Masala",
        description: "Robust blend for red meats.",
        price: 299,
        heat: 5,
        image: "/images/products/chettinad-masala.png",
        tag: "New"
    },
    // Combos & Specials
    {
        id: 25,
        name: "Spicy Trio Pack",
        description: "Gongura, Avakaya, and Red Chilli.",
        price: 899,
        heat: 5,
        image: "/images/products/gongura-pickle.png",
        tag: "Best Seller"
    },
    {
        id: 26,
        name: "Breakfast Kit",
        description: "Idli Podi, Sambar Masala, Chutney Powder.",
        price: 599,
        heat: 2,
        image: "/images/products/garlic-podi.png",
        tag: "New"
    },
    {
        id: 27,
        name: "Student Essentials",
        description: "3 Podis for quick meals.",
        price: 649,
        heat: 2,
        image: "/images/products/curry-leaf-podi.png",
        tag: "Classic"
    },
    {
        id: 28,
        name: "Grandma's Pickles",
        description: "Gift box of 3 traditional pickles.",
        price: 999,
        heat: 4,
        image: "/images/products/avakaya-pickle.png",
        tag: "New"
    },
    {
        id: 29,
        name: "South India Tour",
        description: "6 assorted spice blends.",
        price: 1299,
        heat: 3,
        image: "/images/products/chettinad-masala.png",
        tag: "New"
    },
    {
        id: 30,
        name: "Chilli Powder",
        description: "Pure Guntur Red Chilli Powder.",
        price: 199,
        heat: 5,
        image: "/images/products/chettinad-masala.png",
        tag: "Classic"
    }
]
