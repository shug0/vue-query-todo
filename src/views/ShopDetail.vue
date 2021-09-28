<template>
  <section class="max-w-7xl mx-auto p-8 sm:px-6 lg:px-8">
    <header class="flex mb-4 text-3xl text-gray-700">
      <h2>{{ currentShop.name }}</h2>
      <div v-if="isFetching" class="ml-3 animate-spin">💿</div>
    </header>
    <article>
      <div><strong>City : </strong>{{ currentShop.city }}</div>
      <div>
        <strong>Maps : </strong
        ><a class="text-indigo-700" :href="currentShop.maps_link"
          >Voir sur la carte</a
        >
      </div>
      <div>
        <strong>Notes : </strong>
        <p v-if="currentShop.notes">
          {{ currentShop.notes }}
        </p>
        <span v-else> Aucune notes pour l'instant. </span>
      </div>
    </article>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useQuery } from "vue-query";
import { getShops } from "@/queries/todos";

export default defineComponent({
  name: "ShopDetails",
  setup() {
    const { isSuccess, isFetching, data: shops } = useQuery("shops", getShops);
    const route = useRoute();

    return {
      isFetching,
      isSuccess,
      shops,
      id: route.params.id,
    };
  },
  computed: {
    currentShop() {
      if (!this.shops) return null;
      const shop = this.shops.find((shop) => shop.id === this.id);
      return {
        id: shop.id,
        ...shop.fields,
      };
    },
  },
});
</script>

<style scoped></style>
