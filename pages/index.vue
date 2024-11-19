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
        const response = await axios.post(
          "http://localhost:7735/Hr_Stamp/Login",
          {
            username: this.Username,
            password: this.Password,
          },
          {
            // headers: {
            //   authorization: "x3oimG1HoVEHPHF7mi61",
            // },
          }
        );
        console.log("Response Data:", response.data);
        if (response.data.message === "Success") {
          this.getUser(this.Username, this.Password, response.data.token)
          let { signIn } = useAuth()
          signIn(this.Username, this.Password)
          this.$router.push("/branch");
        } else {
          alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
        }
      } catch (error) {
        console.error("Login Error:", error);

      }
    },
    async getUser(u, p, token) {
  try {
    const response = await axios.get(
      "http://localhost:7735/Hr_Stamp/Get_User",
      {
        headers: {
          authorization: `Bearer ${token}`, // ใส่ "Bearer " นำหน้า token
        },
        params: {
          username: u,
          password: p,
        },
      }
    );
    localStorage.setItem("Nameuser",response.data.user.Nameuser); 
    localStorage.setItem("Username",response.data.user.Username); 
    localStorage.setItem("DEPT1",response.data.user.DEPT1); 
 
    console.log("User Data:", response.data);
  } catch (error) {
    console.error("User Error:", error.response?.data || error.message);
  }
}
  },
};
</script>

<style scoped>
.data-v-inspector {
  padding: 0px;
}
</style>
