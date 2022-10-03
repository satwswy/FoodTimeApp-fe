export const nav = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "services",
    path: "/services",
  },
  {
    text: "blog",
    path: "/blog",
  },
  {
    text: "contact",
    path: "/contact",
  },
]
export const featured = [
  {
    cover: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
    name: "Pizza",
    total: "122 Restaurants",
  },
  {
    cover: "https://cdn.iconscout.com/icon/premium/png-256-thumb/food-time-3970087-3282549.png",
    name: "Burgers",
    total: "155 Restaurants",
  },
  {
    cover: "https://iconarchive.com/download/i99095/icons-land/3d-food/Dish-Pasta-Spaghetti.ico",
    name: "Pasta",
    total: "300 Restaurants",
  },
  {
    cover: "https://cdn-icons-png.flaticon.com/128/3106/3106126.png",
    name: "Grill",
    total: "80 Restaurants",
  },
  {
    cover: "https://t4.ftcdn.net/jpg/03/67/35/85/360_F_367358597_A0GR2r5h4tw4JD40XmdxcVmGaNf3t8Ru.jpg",
    name: "SeaFood",
    total: "80 Restaurants",
  },
  
]
const topNav = [
  { id: 1, label: "Home", href: "#" },
  { id: 2, label: "About", href: "#" },
  { id: 3, label: "Skills", href: "#" },
  { id: 5, label: "Portfolio", href: "#" },
  { id: 5, label: "Contact", href: "#" },
];

export const getTopNav = () => {
  return topNav;
};