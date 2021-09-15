<template>
  <div class="hello">
    <input v-model="text" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      text: 19,
    };
  },
  computed: {
    ...mapState({
      count: (state) => state.user.roles,
    }),
  },
  mounted() {
    console.log(this.count, this.$store);
    this.$http.get("/user/info");
  },
};
</script>
