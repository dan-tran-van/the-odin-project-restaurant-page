const content = document.querySelector("#content");

function makeTabNavigation() {
  const tabNavigation = document.createElement("div");
  tabNavigation.classList.add("tab-navigation");

  const homepageTab = document.createElement("span");
  homepageTab.classList.add("home-page-tab", "tab");
  homepageTab.textContent = "ホームページ";

  const menuTab = document.createElement("span");
  menuTab.classList.add("menu-tab", "tab", "current-tab");
  menuTab.textContent = "メニュー";

  const contactTab = document.createElement("span");
  contactTab.classList.add("contact-tab", "tab");
  contactTab.textContent = "連絡";

  tabNavigation.appendChild(homepageTab);
  tabNavigation.appendChild(menuTab);
  tabNavigation.appendChild(contactTab);

  content.appendChild(tabNavigation);
}

function makeMain() {
  const main = document.createElement("main");
  main.innerHTML = `<div class="menu-item">
        <img
          src="https://images.unsplash.com/photo-1554980291-c3e7cea75872?auto=format&fit=crop&q=80&w=1996&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="ビーガンポテトスープ">

        <span class="item-name">ビーガンポテトスープ</span>

        <div class="price">
          <span class="dollar horizontal-lr">$</span>
          <span class="ammount horizontal-lr">3.99</span>
        </div>
      </div>

      <div class="menu-item">
        <img
          src="https://images.unsplash.com/photo-1534352211968-8d25dbe0e951?auto=format&fit=crop&q=80&w=1929&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="ビーガンサンドイッチ">

        <span class="item-name">ビーガンサンドイッチ</span>

        <div class="price">
          <span class="dollar horizontal-lr">$</span>
          <span class="ammount horizontal-lr">2.99</span>
        </div>

      </div>

      <div class="menu-item">
        <img
          src="https://images.unsplash.com/photo-1631311695255-8dde6bf96cb5?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="ビーガンサラダボウル">

        <span class="item-name">ビーガンサラダボウル</span>

        <div class="price">
          <span class="dollar horizontal-lr">$</span>
          <span class="ammount horizontal-lr">3.99</span>
        </div>

      </div>

      <div class="menu-item">
        <img
          src="https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="ビーガン巻き寿司">

        <span class="item-name">ビーガン巻き寿司</span>

        <div class="price">
          <span class="dollar horizontal-lr">$</span>
          <span class="ammount horizontal-lr">4.99</span>
        </div>


      </div>`;

  content.appendChild(main);
}

function makeFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `<span class="credit flex-none">
        <span class="horizontal-lr">Unsplash</span>
        <span>の</span>
        <span class="horizontal-lr"><a href="https://unsplash.com/photos/cooked-food-wSh0Exrb62g"
            class="horizontal-lr">Victoria</a></span>
        <span>　</span>
        <span class="horizontal-lr"><a href="https://unsplash.com/photos/cooked-food-wSh0Exrb62g"
            class="horizontal-lr">Shes</a></span>
        <span>、</span>

        <span class="horizontal-lr"><a href="https://unsplash.com/photos/vegetable-sandwich-MAbhhj3QCXQ"
            class="horizontal-lr">Alexandra</a></span>
        <span>　</span>
        <span class="horizontal-lr"><a href="https://unsplash.com/photos/vegetable-sandwich-MAbhhj3QCXQ"
            class="horizontal-lr">Golovac</a></span>
        <span>、</span>

        <span class="horizontal-lr"><a href="https://unsplash.com/photos/a-bowl-filled-with-vegetables-and-dressing-next-to-a-glass-of-milk-Pqt1yIF-Fw0"
            class="horizontal-lr">Caroline</a></span>
        <span>　</span>
        <span class="horizontal-lr"><a href="https://unsplash.com/photos/a-bowl-filled-with-vegetables-and-dressing-next-to-a-glass-of-milk-Pqt1yIF-Fw0"
            class="horizontal-lr">Green</a></span>
        <span>、</span>

        <span class="horizontal-lr"><a href="https://unsplash.com/photos/vegetable-salad-served-on-white-bowl-6UxD0NzDywI"
            class="horizontal-lr">Ella</a></span>
        <span>　</span>
        <span class="horizontal-lr"><a href="https://unsplash.com/photos/vegetable-salad-served-on-white-bowl-6UxD0NzDywI"
            class="horizontal-lr">Olsson</a></span>

        <span>による写真</span>
      </span>

      <span class="github horizontal-lr">Github</span>`;

  content.appendChild(footer);
}

export function renderMenu() {
  makeTabNavigation();
  makeMain();
  makeFooter();
}
