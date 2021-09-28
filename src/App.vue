<template>
  <Header />
  <router-view />
  <VueQueryDevTools position="bottom-right" />
</template>

<script>
import { defineComponent } from "vue";
import { useQueryProvider } from "vue-query";
import Header from "@/components/Header";
import { VueQueryDevTools } from "vue-query/devtools";

export default defineComponent({
  name: "App",
  components: {
    Header,
    VueQueryDevTools,
  },
  setup() {
    useQueryProvider();
  },
});
</script>

<style scoped></style>
