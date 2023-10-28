const content = document.querySelector("#content");

function makeTabNavigation() {
  const tabNavigation = document.createElement("div");
  tabNavigation.classList.add("tab-navigation");

  const homepageTab = document.createElement("span");
  homepageTab.classList.add("home-page-tab", "tab");
  homepageTab.textContent = "ホームページ";

  const menuTab = document.createElement("span");
  menuTab.classList.add("menu-tab", "tab");
  menuTab.textContent = "メニュー";

  const contactTab = document.createElement("span");
  contactTab.classList.add("contact-tab", "tab", "current-tab");
  contactTab.textContent = "連絡";

  tabNavigation.appendChild(homepageTab);
  tabNavigation.appendChild(menuTab);
  tabNavigation.appendChild(contactTab);

  content.appendChild(tabNavigation);
}

function makeMain() {
  const main = document.createElement("main");
  main.innerHTML = `<div class="contact-item">
        <img
          src="https://images.unsplash.com/photo-1572715376701-98568319fd0b?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

        <div class="contact-name">
          <span class="horizontal-lr">Alex</span>
          <span>　</span>
          <span class="horizontal-lr">Harley</span>
        </div>

        <div class="contact-description">料理長</div>
      </div>

      <div class="contact-item">
        <img
          src="https://images.unsplash.com/photo-1604328471151-b52226907017?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

        <div class="contact-name">
          <span class="horizontal-rl">قنبلة</span>
          <span>　</span>
          <span class="horizontal-rl">جي</span>
          <span>　</span>
          <span class="horizontal-rl">سي</span>
          <span>　</span>
          <span class="horizontal-rl">إس</span>
        </div>

        <div class="contact-description">アシスタントシェフ</div>
      </div>

      <div class="contact-item">
        <img
          src="https://images.unsplash.com/photo-1621494268492-d01b98eba7e4?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">

        <div class="contact-name">
          <span>にの・みやき</span>
        </div>

        <div class="contact-description">アシスタントシェフ</div>
      </div>`;

  content.appendChild(main);
}

function makeFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `<span class="credit flex-none">
        <span class="horizontal-lr">Unsplash</span>
        <span>の</span>
        <span class="horizontal-lr"><a
            href="https://unsplash.com/photos/man-standing-front-of-plate-with-vegetable--eKZLpj7U0E"
            class="horizontal-lr">Jason</a></span>
        <span>　</span>
        <span class="horizontal-lr"><a
            href="https://unsplash.com/photos/man-standing-front-of-plate-with-vegetable--eKZLpj7U0E"
            class="horizontal-lr">Leung</a></span>
        <span>、</span>

        <span class="horizontal-lr"><a
            href="https://unsplash.com/photos/person-holding-stainless-steel-fork-R8HoXig87p8"
            class="horizontal-lr">Edward</a></span>
        <span>　</span>
        <span class="horizontal-lr"><a
            href="https://unsplash.com/photos/person-holding-stainless-steel-fork-R8HoXig87p8"
            class="horizontal-lr">Howell</a></span>
        <span>、</span>

        <span class="horizontal-lr"><a
            href="https://unsplash.com/photos/person-holding-stainless-steel-spoon-and-fork-eating-on-black-table--g5jWce3HUQ"
            class="horizontal-lr">Duane</a></span>
        <span>　</span>
        <span class="horizontal-lr"><a
            href="https://unsplash.com/photos/person-holding-stainless-steel-spoon-and-fork-eating-on-black-table--g5jWce3HUQ"
            class="horizontal-lr">Mendes</a></span>

        <span>による写真</span>
      </span>

      <span class="github horizontal-lr">Github</span>`;
  content.appendChild(footer);
};

export function renderContact() {
  makeTabNavigation();
  makeMain();
  makeFooter();
}
