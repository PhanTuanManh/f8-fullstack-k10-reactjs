export default function Header() {
  // Gọi hook ở đây

  return (
    <header
      id="header"
      class="bg-white header z-[50] fixed top-0 left-0 right-0 md:px-10 px-5 xl:py-5 py-8 text-primary uppercase transition-all trasition-ease-in-out duration-500 "
    >
      <nav class="flex flex-row justify-between items-center">
        <div class="basis-2/6 text-xl xl:hidden">
          <i class="cursor-pointer bar-icon fa-solid fa-bars-staggered"></i>
        </div>

        <ul class="motion-preset-rebound-down hidden xl:flex text-sm xl:flex-row xl:justify-start xl:gap-6 2xl:gap-8 py-4 basis-2/6">
          <li class="mp-top-menu-item">
            <a href="../index.html" class="mp-top-menu-item-a-active">
              HOME
            </a>
          </li>
          <li class="mp-top-menu-item group">
            <a href="../category.html" class="mp-top-menu-item-a-active">
              Shop{" "}
              <i class="fa-solid fa-caret-right mp-transition-5 group-hover:rotate-90"></i>
            </a>
            <div class="sub-nav absolute flex top-[60px] left-0 bg-white flex-row justify-between w-[700px] shadow-lg shadow-gray-500/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible mp-transition-3">
              <div class="py-[20px] text-[13px] w-[400px]">
                <h4 class="my-[20px] px-[40px]">Categories</h4>
                <ul class="category-list capitalize font text-gray-500 grid grid-cols-2 my-[20px] px-[40px] gap-x-[80px] gap-y-[20px]"></ul>
              </div>
              <img src="./assets/images/shop-menu.jpg" alt="" />
            </div>
          </li>
          <li class="mp-top-menu-item">
            <a href="../404.html" class="mp-top-menu-item-a-active">
              FEATURES
            </a>
          </li>
          <li class="mp-top-menu-item">
            <a href="../404.html" class="mp-top-menu-item-a-active">
              PAGES
            </a>
          </li>
          <li class="mp-top-menu-item">
            <a href="../404.html" class="mp-top-menu-item-a-active">
              BLOG
            </a>
          </li>
        </ul>

        <a
          href="../index.html"
          aria-label="Trang chủ"
          class="motion-preset-rebound-down basis-2/6"
        >
          <div class="logo-wrapper flex flex-row items-center justify-center">
            <img loading="lazy" src="../assets/icon/logo.svg" alt="" class="" />
          </div>
        </a>

        <div class="motion-preset-rebound-down flex flex-row gap-4 justify-end items-center basis-2/6 pr-2.5">
          <div class="flex flex-row p-4 hidden xl:block">
            <input
              type="search"
              class="border-0 outline-0 2xl:w-52 pb-1 w-40 bg-transparent focus:border-b border-b-0 border-transparent focus:border-primary mp-transition-5"
              id="searchInput"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="searchIcon">
              <i class="fas fa-search"></i>
            </span>
          </div>

          <div class="text-xl flex flex-row justify-between items-center gap-6">
            <a href="../404.html">
              <i class="fa-regular fa-user hidden xl:block"></i>
            </a>

            <a href="../404.html">
              <i class="fa-regular fa-heart"></i>
            </a>

            <a href="../404.html">
              <i class="fa-solid fa-bag-shopping relative">
                <div class="absolute px-2 -top-4 -right-5 bg-gray-400 text-white rounded-full text-xs font-extralight border border-white flex justify-center items-center font-roboto">
                  99
                </div>
              </i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

/**
 * useState
 * 1. Giá trị state
 * 2. Hàm cập nhật sate
 *
 * const result = useState(initialValue)
 */
