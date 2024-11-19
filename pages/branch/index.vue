<template>
  <div>
    <!-- <div class="display flex justify-end mb-10">
            <label class="input input-bordered flex items-center input-xs input-md gap-2 h-8">
                <input type="text" class="grow" placeholder="ค้นหา" v-model="searchTerm" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                    class="h-4 w-4 opacity-70">
                    <path fill-rule="evenodd"
                        d="M9.965 11.026a5 5 5 0 1 1-1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clip-rule="evenodd" />
                </svg>
            </label>
        </div> -->
    <div class="overflow-x-auto">
      <table class="table table-xs border">
        <thead>
          <tr class="bg-red-700 text-white">
            <th class="text-center border-solid border border-slate-700">
              ลำดับ
            </th>
            <th class="text-center border-solid border border-slate-700">
              ชื่อสาขา
            </th>
            <th class="text-center border-solid border border-slate-700">
              รายละเอียดสาขา
            </th>
            <th class="text-center border-solid border border-slate-700">
              ที่อยู่สาขา
            </th>
            <th class="text-center border-solid border border-slate-700">
              ถนน
            </th>
            <th class="text-center border-solid border border-slate-700">
              วิทยาเขต
            </th>
            <th class="text-center border-solid border border-slate-700">
              จังหวัด
            </th>
            <th class="text-center border-solid border border-slate-700">
              รหัส
            </th>
            <th class="text-center border-solid border border-slate-700">
              แก้ไข
            </th>
            <!-- <th class="border-solid border border-slate-700"></th>
                        <th class="border-solid border border-slate-700">Longitude</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-if="!loader && filteredBranch.length === 0">
            <td colspan="10" class="text-center">ไม่มีข้อมูล</td>
          </tr>
          <tr v-for="(item, index) in filteredBranch" :key="item.Branch_ID">
            <td
              class="text-nowrap text-center border-solid border border-slate-700"
            >
              {{ index + 1 }}
            </td>
            <td class="text-nowrap border-solid border border-slate-700">
              {{ item.Branch_Name }}
            </td>
            <td
              class="text-nowrap text-center border-solid border border-slate-700"
            >
              <div
                class="badge badge-outline cursor-pointer tooltip"
                data-tip="คลิกเพื่อดูรายละเอียด"
                onclick="my_modal_3.showModal() "
                @click="onclickModal(item.Branch_ID, item.Branch_Detail)"
              >
                {{ item.Branch_Detail }}
              </div>
            </td>
            <td class="text-nowrap border-solid border border-slate-700">
              {{ item.Address }}
            </td>
            <td class="text-nowrap border-solid border border-slate-700">
              {{ item.Address_2 }}
            </td>
            <td class="text-nowrap border-solid border border-slate-700">
              {{ item.Disreict }}
            </td>
            <td class="text-nowrap border-solid border border-slate-700">
              {{ item.Province }}
            </td>
            <td class="text-nowrap border-solid border border-slate-700">
              {{ item.Zipcode }}
            </td>
            <td class="text-nowrap text-center border-solid border border-slate-700">
              <button @click="editBranch(item.Branch_ID)">
                <Edit :branchId="item.Branch_ID" />
              </button>
            </td>

            <!-- <td class="text-nowrap border-solid border border-slate-700">{{ item.Latitude }}</td>
                        <td class="text-nowrap border-solid border border-slate-700">{{ item.Longitude }}</td> -->
          </tr>
        </tbody>
      </table>
      <div
        v-if="loader"
        class="absolute inset-0 flex justify-center items-center bg-opacity-50 bg-gray-300"
      >
        <loader />
      </div>
    </div>
    <dialog
      v-if="!loader"
      id="my_modal_3"
      class="modal fixed inset-0 bg-black/30 w-full h-full flex items-center justify-center p-4 animate-fade-in"
    >
      <div
        class="modal-box bg-white rounded-xl shadow-2xl max-w-2xl w-full animate-scale-up font-kanit"
      >
        <form method="dialog" class="absolute right-4 top-4">
          <button
            class="w-8 h-8 inline-flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </form>
        <h3
          class="text-2xl font-semibold text-center text-gray-800 mb-6 pb-4 border-b-2 border-gray-200"
        >
          {{ nameBranch }}
        </h3>
        <div
          v-for="branch in branchDl"
          :key="branch.Branch_ID"
          class="space-y-6 p-4"
        >
          <div class="space-y-4">
            <div
              class=" skeleton bg-gray-50/80 rounded-lg p-4 hover:bg-gray-50 transition-colors shadow-md"
            >
              <p class="font-medium text-gray-700 mb-2">ชื่อสาขา</p>
              <p class=" text-gray-600">{{ branchDl[0].Branch_Name }}</p>
            </div>

            <div
              class="bg-gray-50/80 rounded-lg p-4 hover:bg-gray-50 transition-colors shadow-md"
            >
              <p class="font-medium text-gray-700 mb-2">รายละเอียดสาขา</p>
              <p class="text-gray-600">{{ branchDl[0].Branch_Detail }}</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              class="bg-gray-50/80 rounded-lg p-4 hover:bg-gray-50 transition-colors shadow-md"
            >
              <p class="font-medium text-gray-700 mb-2">ที่อยู่</p>
              <p class="text-gray-600">{{ branchDl[0].Address }}</p>
            </div>
            <div
              class="bg-gray-50/80 rounded-lg p-4 hover:bg-gray-50 transition-colors shadow-md"
            >
              <p class="font-medium text-gray-700 mb-2">ถนน/ซอย</p>
              <p class="text-gray-600">{{ branchDl[0].Address_2 }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              class="bg-gray-50/80 rounded-lg p-4 hover:bg-gray-50 transition-colors shadow-md"
            >
              <p class="font-medium text-gray-700 mb-2">แขวง/ตำบล</p>
              <p class="text-gray-600">{{ branchDl[0].Sub_District }}</p>
            </div>
            <div
              class="bg-gray-50/80 rounded-lg p-4 hover:bg-gray-50 transition-colors shadow-md"
            >
              <p class="font-medium text-gray-700 mb-2">เขต/อำเภอ</p>
              <p class="text-gray-600">{{ branchDl[0].District }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              class="bg-gray-50/80 rounded-lg p-4 hover:bg-gray-50 transition-colors shadow-md"
            >
              <p class="font-medium text-gray-700 mb-2">จังหวัด</p>
              <p class="text-gray-600">{{ branchDl[0].Province }}</p>
            </div>
            <div
              class="bg-gray-50/80 rounded-lg p-4 hover:bg-gray-50 transition-colors shadow-md"
            >
              <p class="font-medium text-gray-700 mb-2">รหัสไปรษณีย์</p>
              <p class="text-gray-600">{{ branchDl[0].Zipcode }}</p>
            </div>
 
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              class="bg-gray-50/80 rounded-lg p-4 hover:bg-gray-50 transition-colors shadow-md"
            >
              <p class="font-medium text-gray-700 mb-2">ละติจูด</p>
              <p class="text-gray-600">{{ branchDl[0].Latitude }}</p>
            </div>
            <div
              class="bg-gray-50/80 rounded-lg p-4 hover:bg-gray-50 transition-colors shadow-md"
            >
              <p class="font-medium text-gray-700 mb-2">ลองจิจูด</p>
              <p class="text-gray-600">{{ branchDl[0].Longitude }}</p>
            </div>
          </div>
        </div>
      </div>
    </dialog>
    <div>
    <ske  />
   </div>
  </div>
</template>

<script>
import axios from "axios";
import loader from "~/components/loader.vue";
import Edit from "~/components/edit.vue";
import ske_model from "~/components/ske_model.vue";

export default {
  data() {
    return {
      branch: [],
      branchDl: [],
      searchTerm: "",
      loader: true,
      idBranch: 0,
      nameBranch: "",
    };
  },
  computed: {
    filteredBranch() {
      const term = this.searchTerm.toLowerCase();
      return this.branch.filter((item) => {
        return (
          (item.Branch_Name && item.Branch_Name.toLowerCase().includes(term)) ||
          (item.Branch_Detail &&
            item.Branch_Detail.toLowerCase().includes(term)) ||
          (item.Address && item.Address.toLowerCase().includes(term)) ||
          (item.Province && item.Province.toLowerCase().includes(term)) ||
          (item.Zipcode && item.Zipcode.includes(term))
        );
      });
    },
  },
  methods: {
    async getBranch() {
      try {
        const response = await axios.get(
          "http://localhost:7735/Hr_Stamp/Branch/Page_Branch",
          {
            headers: { authorization: "x3oimG1HoVEHPHF7mi61" },
          }
        );
        this.branch = response.data.result;
        // console.log(this.branch);
        this.loader = false;
      } catch (error) {
        console.error("Error fetching branches:", error);
        this.loader = false;
      }
    },
    async onclickModal(id, name) {
      try {
        const response = await axios.get(
          "http://localhost:7735/Hr_Stamp/Branch/Detail_Branch",
          {
            headers: { authorization: "x3oimG1HoVEHPHF7mi61" },
            params: {
              Branch_ID: id,
            },
          }
        );
        this.branchDl = response.data.result;
        console.log(this.branchDl);
        this.loader = false;
        // console.log(response.data)
      } catch (error) {}
      // console.log(id, name);
      // this.idBranch = id;
      this.nameBranch = name;
    },
    editBranch(branchId) {
      // console.log("Edit branch with ID:", branchId);
      // // คุณสามารถทำสิ่งที่ต้องการกับ branchId ที่ได้
    },
  },
  mounted() {
    this.getBranch();
  },
  components: {
    loader,
    Edit,
    
  },
};
</script>

<style></style>
