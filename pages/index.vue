<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form class="card-body" @submit.prevent="login">
        <div class="form-control">
          <div class="text-center">
            <div class="flex items-center justify-center">
              <img src="https://example.com/logo.png" class="w-12 h-12 rounded-full" />
            </div>
            <span>เข้าสู่ระบบ</span>
          </div>
          <label class="label">
            <span class="label-text">ชื่อผู้ใช้</span>
          </label>
          <input type="name" v-model="Username" placeholder="email" class="input input-bordered h-8" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">รหัสผ่าน</span>
          </label>
          <input type="password" v-model="Password" placeholder="password" class="input input-bordered h-8" required />
        </div>
        <div class="form-control mt-6">
          <button type="submit" class="bg-red-600 text-center text-white border rounded-xl h-8">ล็อกอิน</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {

    return {
      Username: "",
      Password: "",

    };
  },
  methods: {
    async login() {
      try {
        console.log(this.Username)
        let { signIn } = useAuth()
        await signIn({ username: this.Username, password: this.Password }, { callbackUrl: '/branch' })
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.data-v-inspector {
  padding: 0px;
}
</style>
