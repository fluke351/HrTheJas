<template>
  <div>
    <button class="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-md transition-all" @click="openModal">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
    </button>
    <dialog ref="my_modal_2" class="modal">
      <div class="modal-box w-11/12 max-w-5xl font-kanit p-6 bg-white rounded-xl shadow-xl">
        <div v-if="loader" class="absolute inset-0 flex justify-center items-center bg-opacity-50 bg-gray-300 rounded-xl">
          <loader />
        </div>
        <h3 class="text-4xl font-semibold text-gray-800 mb-6 text-center border-b-2 pb-4">แก้ไขข้อมูลสาขา</h3>
        
        <div v-for="d in branchData" :key="d.Branch_ID">
          <div class="mb-4">
            <label class="block text-start text-gray-700 font-medium mb-2">ชื่อสาขา:</label>
            <input type="text" v-model="d.Branch_Name" class="input input-bordered w-full p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
          </div>
          
          <div class="mb-4">
            <label class="block text-start text-gray-700 font-medium mb-2">รายละเอียดสาขา:</label>
            <input type="text" v-model="d.Branch_Detail" class="input input-bordered w-full p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-start text-gray-700 font-medium mb-2">ที่อยู่:</label>
              <input type="text" v-model="d.Address" class="input input-bordered w-full p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
            </div>
            <div>
              <label class="block text-start text-gray-700 font-medium mb-2">ถนน/ซอย:</label>
              <input type="text" v-model="d.Address_2" class="input input-bordered w-full p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-start text-gray-700 font-medium mb-2">แขวง/ตำบล:</label>
              <input type="text" v-model="d.Sub_District" class="input input-bordered w-full p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
            </div>
            <div>
              <label class="block text-start text-gray-700 font-medium mb-2">เขต/อำเภอ:</label>
              <input type="text" v-model="d.Disreict" class="input input-bordered w-full p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-start text-gray-700 font-medium mb-2">รหัสไปรษณีย์:</label>
              <input type="text" v-model="d.Zipcode" class="input input-bordered w-full p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
            </div>
            <div>
              <label class="block text-start text-gray-700 font-medium mb-2">รหัสพนักงานผู้บันทึก:</label>
              <input type="text" class="input input-bordered w-full p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-start text-gray-700 font-medium mb-2">ชื่อผู้บันทึก:</label>
              <input type="text" class="input input-bordered w-full p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
            </div>
            <div>
              <label class="block text-start text-gray-700 font-medium mb-2">วันที่บันทึก:</label>
              <input type="text" class="input input-bordered w-full p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-start text-gray-700 font-medium mb-2">ละติจูด:</label>
              <input type="text" v-model="d.Latitude" class="input input-bordered w-full p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
            </div>
            <div>
              <label class="block text-start text-gray-700 font-medium mb-2">ลองจิจูด:</label>
              <input type="text" v-model="d.Longitude" class="input input-bordered w-full p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
            </div>
          </div>
        </div>

        <div class="modal-action justify-center space-x-4">
          <form method="dialog">
            <button @click="loader = false" class="btn btn-error w-28 text-white bg-red-600 hover:bg-red-700 shadow-md rounded-lg">
              Close
            </button>
            <button class="btn btn-accent w-28 text-white bg-blue-600 hover:bg-blue-700 shadow-md rounded-lg">
              บันทึก
            </button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script>
import axios from "axios";
import loader from "~/components/loader.vue";
export default {
  props: {
    branchId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      branchIds: this.branchId,
      branchData: [],
      loader: true,
    };
  },
  methods: {
    openModal() {
      this.$refs.my_modal_2.showModal();
      this.getDataModal(this.branchId);
    },
    async getDataModal(id) {

      try {
        this.loader= true;
        const response = await axios.get(
          "http://localhost:7735/Hr_Stamp/Branch/Detail_Branch",
          {
            headers: { authorization: "x3oimG1HoVEHPHF7mi61" },
            params: {
              Branch_ID: id,
            },
          }
        );
        this.branchData = response.data.result;
        // console.log(this.branchData);
        this.loader = false;
        // console.log(response.data)
      } catch (error) {
        this.loader = false;
      }
    },
  },
  components: {
    loader,
  },
};
</script>
