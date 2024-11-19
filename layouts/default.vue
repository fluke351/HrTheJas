<template>
  <div>
    <div v-if="$route.path !== '/'" class="drawer drawer-mobile z-10">
      <!-- Toggle drawer with checkbox input -->
      <input id="my-drawer" type="checkbox" class="drawer-toggle" v-model="isDrawerOpen" />

      <div class="drawer-content">
        <div class="navbar bg-red-700">
          <div class="navbar-start">
            <!-- Button to open the drawer -->
            <label for="my-drawer" class="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
          </div>
          <div class="navbar-center">
            <a class=" text-3xl font-kanit  text-white ">HR The Jas</a>
          </div>
          <div class="navbar-end">
            <div class="dropdown dropdown-end">
              <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src="" />
                </div>
              </div>
              <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <a class="justify-between">
                 
                    <span class="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <div class="drawer-side h-full top-16">
        <label for="my-drawer" class="drawer-overlay" @click="closeDrawer"></label>
        <ul class="menu p-4 w-52 bg-base-100 text-base-content h-full">

          <li>
            <NuxtLink to="/branch" class="hover:text-gray-300" @click="closeDrawer">ข้อมูลสาขา</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/shop" class="hover:text-gray-300" @click="closeDrawer">ข้อมูลร้านค้า</NuxtLink>
          </li>

          <li>
            <details class="cursor-pointer">
              <summary>คูปอง</summary>
              <ul class="p-2 text-black">
                <li>
                  <NuxtLink to="/coupon" class="text-nowrap" @click="closeDrawer">ข้อมูลคูปอง</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/typecoupon" class="hover:text-gray-300" @click="closeDrawer">ประเภทคูปอง</NuxtLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NuxtLink to="/participating" class="hover:text-gray-300" @click="closeDrawer">ร้านค้าเข้าร่วม</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/couponusage" class="hover:text-gray-300" @click="closeDrawer">สิทธิ์คูปอง</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/credit" class="hover:text-gray-300" @click="closeDrawer">ข้อมูลเครดิต</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <main class="container m-auto p-4">
      <NuxtPage />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDrawerOpen: false,
      isDropdownOpen: false,
      storedName: "",
      // _data: useAuth().data,
      // user: _data._object["$sauth:data"].user
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDrawer() {
      this.isDrawerOpen = false;
    }
  },
  mounted() {

    this.storedName = localStorage.getItem('Nameuser');
  }
}
</script>
