import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";

const router  = new Navigo("/" , {linksSelector: "a" });

const print = (content) => {
  document.querySelector("#app").innerHTML = content;
};

router.on({
  "/" : () => {
    print(HomePage);
  },
  "/about" : () => {
    print(AboutPage);
  },
})
router.resolve