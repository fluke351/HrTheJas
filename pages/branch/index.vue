<template>
    <div>
        <div class="display flex justify-end mb-10">
            <label class="input input-bordered flex items-center input-xs input-md gap-2 h-8">
                <input type="text" class="grow" placeholder="ค้นหา" v-model="searchTerm" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                    class="h-4 w-4 opacity-70">
                    <path fill-rule="evenodd"
                        d="M9.965 11.026a5 5 5 0 1 1-1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clip-rule="evenodd" />
                </svg>
            </label>
        </div>
        <div class="overflow-x-auto">
            <table class="table table-xs border">
                <thead>
                    <tr class="bg-red-700 text-white">
                        <th class="text-center border-solid border border-slate-700">ลำดับ</th>
                        <th class="text-center border-solid border border-slate-700">ชื่อสาขา</th>
                        <th class="text-center border-solid border border-slate-700">
                            รายละเอียดสาขา
                        </th>
                        <th class="text-center border-solid border border-slate-700">ที่อยู่สาขา</th>
                        <th class="text-center border-solid border border-slate-700">ถนน</th>
                        <th class="text-center border-solid border border-slate-700">วิทยาเขต</th>
                        <th class="text-center border-solid border border-slate-700">จังหวัด</th>
                        <th class="text-center border-solid border border-slate-700">รหัส</th>
                        <!-- <th class="border-solid border border-slate-700"></th>
                        <th class="border-solid border border-slate-700">Longitude</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="!loader && filteredBranch.length === 0">
                        <td colspan="10" class="text-center">ไม่มีข้อมูล</td>
                    </tr>
                    <tr v-for="(item, index) in filteredBranch" :key="item.Branch_ID">
                        <td class="text-nowrap text-center border-solid border border-slate-700">{{ index + 1 }}</td>
                        <td class="text-nowrap border-solid border border-slate-700">{{ item.Branch_Name }}</td>
                        <td class="text-nowrap border-solid border border-slate-700">{{ item.Branch_Detail }}</td>
                        <td class="text-nowrap border-solid border border-slate-700">{{ item.Address}}</td>
                        <td class="text-nowrap border-solid border border-slate-700">{{ item.Address_2}}</td>
                        <td class="text-nowrap border-solid border border-slate-700">{{ item.Disreict }}</td>
                        <td class="text-nowrap border-solid border border-slate-700">{{ item.Province }}</td>
                        <td class="text-nowrap border-solid border border-slate-700">{{ item.Zipcode }}</td>
                        <!-- <td class="text-nowrap border-solid border border-slate-700">{{ item.Latitude }}</td>
                        <td class="text-nowrap border-solid border border-slate-700">{{ item.Longitude }}</td> -->
                    </tr>
                </tbody>
            </table>
            <div v-if="loader" class="absolute inset-0 flex justify-center items-center bg-opacity-50 bg-gray-300">
                <loader />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import loader from "~/components/loader.vue";

export default {
    data() {
        return {
            branch: [],
            searchTerm: "",
            loader: true,
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
                this.loader = false;
            } catch (error) {
                console.error("Error fetching branches:", error);
                this.loader = false;
            }
        },
    },
    mounted() {
        this.getBranch();
    },
    components: {
        loader,
    },
};
</script>

<style></style>
