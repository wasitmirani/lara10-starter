<template >
    <master-layout></master-layout>
  </template>
  <script >
  import MasterLayout from "./backend/layouts/MasterLayout.vue";
//   import "vue3-tel-input/dist/vue3-tel-input.css";
//   import 'vue-skeletor/dist/vue-skeletor.css';

  // import 'vue-multiselect/dist/vue-multiselect.min.css';

  export default {
    components: { MasterLayout },
    methods: {
      appendValidateClass(errors, value) {
        if (errors && errors[value]) return "validate";
      },
      mapStatus(status) {
        switch (status) {
          case 1:
            return '<span class="status-badge-success me-1">Active</span>';
            break;
          case 0:
            return '<span class="status-badge-danger me-1">InActive</span>';
            break;

          default:
          return '<span class="status-badge-success me-1">Active</span>';
            break;
        }
      },
    //   alertNotify(status, title, type, response) {
    //     switch (status) {
    //       case 200:
    //         this.$notify({ title: title, type: type, text: response.message });
    //         break;
    //       case 201:
    //         this.$notify({ title: title, type: type, text: response.message });
    //         break;
    //       case 422:
    //         this.$notify({
    //           title: `Oops, Unprocessable Entity ${status} Error! `,
    //           type: type,
    //           text: response.message,
    //         });
    //         break;
    //       case 404:
    //         this.$notify({
    //           title: `Oops, Not Found ${status} Error! `,
    //           type: type,
    //           text: response.message,
    //         });
    //         break;
    //       case 500:
    //         this.$notify({
    //           title: `Oops, Something Went Wrong ${status} Error! `,
    //           type: type,
    //           text: response.message,
    //         });
    //         break;
    //     }
    //   },
    },
    mounted() {},
  };
  </script>
  <style >
  .validate {
    border-color: red;
  }
  </style>
