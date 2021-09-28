<template>
  <section class="max-w-7xl mx-auto p-8 sm:px-6 lg:px-8">
    <header class="flex mb-4 text-2xl text-gray-500">
      <h2>☕ Nice Coffee Shops</h2>
      <div v-if="isFetching" class="ml-3 animate-spin">💿</div>
    </header>
    <div v-if="isSuccess" class="flex gap-4">
      <div v-for="{ id, fields: { name, city } } in shops" :key="id">
        <router-link :to="`/shop/${id}`">
          <article class="rounded-lg bg-white shadow-md border border-gray-300">
            <header class="p-4">
              <h3 class="text-base font-medium text-gray-900">{{ name }}</h3>
            </header>

            <footer
              class="
                flex-col
                rounded-b-lg
                bg-gray-100
                text-gray-400
                px-4
                py-2
                text-sm
                border-t-2
              "
            >
              <div>{{ city }}</div>
            </footer>
          </article>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { useQuery } from "vue-query";
import { getShops } from "@/queries/todos";

export default defineComponent({
  name: "Shops",
  setup() {
    const { isSuccess, isFetching, data: shops } = useQuery("shops", getShops);

    return {
      isFetching,
      isSuccess,
      shops,
    };
  },
});
</script>

<style scoped></style>
