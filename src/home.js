const content = document.querySelector("#content");

function makeTabNavigation() {
  const tabNavigation = document.createElement("div");
  tabNavigation.classList.add("tab-navigation");

  const homepageTab = document.createElement("span");
  homepageTab.classList.add("home-page-tab", "tab", "current-tab");
  homepageTab.textContent = "ホームページ";

  const menuTab = document.createElement("span");
  menuTab.classList.add("menu-tab", "tab");
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

  const heroHeading = document.createElement("h2");
  heroHeading.innerHTML = `<span class="horizontal-lr">Alex</span>
        <span>　</span>
        <span class="horizontal-lr">Harley</span>
        <span>と</span>
        <span class="horizontal-rl">قنبلة</span>
        <span>　</span>
        <span class="horizontal-rl">جي</span>
        <span>　</span>
        <span class="horizontal-rl">سي</span>
        <span>　</span>
        <span class="horizontal-rl">إس</span>
        <span>のレストランへようこそ！</span>`;

  const homepagePhoto = document.createElement("img");
  homepagePhoto.classList.add("home-page-photo");
  homepagePhoto.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1667604987970-4bbd6ed51d0d?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  homepagePhoto.setAttribute("alt", "レストランの写真");

  const locationHeading = document.createElement("h3");
  locationHeading.innerHTML = `<span class="location-heading">位置</span>`;

  const location = document.createElement("span");
  location.classList.add("location");
  location.textContent = "震電社３号船（東京〜ロサンゼルス）";

  main.appendChild(heroHeading);
  main.appendChild(homepagePhoto);
  main.appendChild(locationHeading);
  main.appendChild(location);

  content.appendChild(main);
}

function makeFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `<span class="credit flex-none">
        <span class="horizontal-lr">Unsplash</span>
        <span>の</span>
        <span class="horizontal-lr"><a
            href="https://unsplash.com/photos/a-table-with-glasses-and-bottles-on-it-by-a-window-with-water-qbW9KLqWDiQ"
            class="horizontal-lr">Jannik</a></span>
        <span>による写真</span>
      </span>

      <span class="github horizontal-lr">Github</span>`;
  
  content.appendChild(footer);
}

export function renderHomepage() {
  makeTabNavigation();
  makeMain();
  makeFooter();
}
