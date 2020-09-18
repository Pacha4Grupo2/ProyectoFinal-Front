<template>
  <div class="view-home">
    <h2>PAGINA HOME</h2>
    <CardCourse />
  </div>
</template>

<script>
import CardCourse from "./components/CardCourse";
export default {
  name: "Home",
  components: {
    CardCourse,
  },
  data() {
    return {
      courses: [
        {
          id: 1,
          name: "Desarrollo Front-End",
          description: "",
          itsBuy: true,
        },
        {
          id: 2,
          name: "Desarrollo Front-End",
          description: "",
          itsBuy: true,
        },
        {
          id: 3,
          name: "Desarrollo Front-End",
          description: "",
          itsBuy: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>