<template>
  <div v-if="product">
    <img :src="product.image" />
    <div class="d-flex">
      <p>{{ product.name }}</p>
      <span>{{ product.price }}$</span>
    </div>
    <div class="mt-10">

    <select name="parfum" v-model="selectedParfum">
      <option v-for="item in parfums" :value="item" :key="item">{{
        item
      }}</option>
    </select>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left"></th>
            <th class="text-left"></th>
            <th class="text-left">% AR(*)</th>
          </tr>
        </thead>
        <tbody v-if="selectedParfumDetails">
          <tr>
            <td class="parrent">Énergie</td>
            <td class="text-center">{{ selectedParfumDetails.energie.value }} Kcal</td>
            <td class="text-center">{{ displayPerc(selectedParfumDetails.energie.percent) }}</td>
          </tr>
          <tr>
            <td class="parrent">Matières Grasses</td>
            <td class="text-center">{{ selectedParfumDetails.matieresGrasses.value }} g</td>
            <td class="text-center">{{ displayPerc(selectedParfumDetails.matieresGrasses.percent) }}</td>
          </tr>
          <tr
            v-for="item in selectedParfumDetails.matieresGrasses.childs"
            :key="item.title"
          >
            <td class="ml-4">{{ `${item.title}` }}</td>
            <td class="text-center">{{ item.value }}g</td>
            <td class="text-center">{{ displayPerc(item.percent) }}</td>
          </tr>
          <tr>
            <td class="parrent">Glucides</td>
            <td class="text-center">{{ selectedParfumDetails.glucides.value }} g</td>
            <td class="text-center">{{ displayPerc(selectedParfumDetails.glucides.percent) }}</td>
          </tr>
          <tr
            v-for="item in selectedParfumDetails.glucides.childs"
            :key="item.title"
          >
            <td class="ml-4">{{ `${item.title}` }}</td>
            <td class="text-center">{{ item.value }}g</td>
            <td class="text-center">{{ displayPerc(item.percent) }}</td>
          </tr>
          <tr>
            <td class="parrent">Protéines</td>
            <td class="text-center">{{ selectedParfumDetails.proteines.value }} g</td>
            <td class="text-center">{{ displayPerc(selectedParfumDetails.proteines.percent) }}</td>
          </tr>
          <tr
            v-for="item in selectedParfumDetails.proteines.childs"
            :key="item.title"
          >
            <td class="ml-4">{{ `${item.title}` }}</td>
            <td class="text-center">{{ item.value }}g</td>
            <td class="text-center">{{ displayPerc(item.percent) }}</td>
          </tr>
          <tr>
            <td class="parrent">Sel</td>
            <td class="text-center">{{ selectedParfumDetails.sel.value }} g</td>
            <td class="text-center">{{ displayPerc(selectedParfumDetails.sel.percent) }}</td>
          </tr>
          <tr
            v-for="item in selectedParfumDetails.sel.childs"
            :key="item.title"
          >
            <td class="ml-4">{{ `${item.title}` }}</td>
            <td class="text-center">{{ item.value }}g</td>
            <td class="text-center">{{ displayPerc(item.percent) }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";
import _ from "lodash";
export default {
  data() {
    return {
      selectedParfum: this.parfums ? this.parfums : null
    };
  },
  computed: {
    ...mapState({
      products: state => state.products
    }),
    product() {
      return _.find(this.products, obj => {
        return obj.id == this.$route.params.product_id;
      });
    },
    parfums() {
      return _.reduce(
        this.product.NutritionalDetails,
        (arr, obj) => {
          return (arr = [...arr, obj.parfum]);
        },
        []
      );
    },
    selectedParfumDetails() {
      return _.find(this.product.NutritionalDetails, obj => {
        return obj.parfum == this.selectedParfum;
      });
    }
  },
  methods: {
      displayPerc(number){
        //   number = parseFloat(number)
          return (`${number}${isNaN(number) ? '': '%'}`);
      }
  },
  mounted() {
    this.selectedParfum = this.parfums[0];
  }
};
</script>

<style>
img {
    width: 100%;
    height: 400px;
    object-fit: cover;
}
.d-flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.mt-10{
    margin-top: 20px;
}
.ml-4{
    padding-left: 40px !important;
}
.parrent{
    font-weight: bold;
}
.text-center{
    text-align: center;
}
/* Reset Select */
select {
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  -ms-appearance: none !important;
  appearance: none !important;
  outline: 0 !important;
  box-shadow: none !important;
  border: 0 !important;
  background: #2c3e50 !important;
  background-image: none !important;
  width: 100% ;
  padding: 5px 10px !important;
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select */
.select {
  position: relative !important;
  display: flex !important;
  width: 20em !important;
  height: 3em !important;
  line-height: 3 !important;
  background: #2c3e50 !important;
  overflow: hidden !important;
  border-radius: 0.25em !important;
}
select {
  flex: 1 !important;
  color: #fff !important;
  cursor: pointer !important;
}
/* Arrow */
.select::after {
  content: "\25BC" !important;
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  padding: 0 1em !important;
  background: #34495e !important;
  cursor: pointer !important;
  pointer-events: none !important;
  -webkit-transition: 0.25s all ease !important;
  -o-transition: 0.25s all ease !important;
  transition: 0.25s all ease !important;
}
/* Transition */
.select:hover::after {
  color: #f39c12 !important;
}
</style>
