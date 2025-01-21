<template>
  <svg
    id="delet"
    xmlns="http://www.w3.org/2000/svg"
    width="31.442"
    height="31.629"
    viewBox="0 0 31.442 31.629"
  >
    <path
      id="Path_38"
      data-name="Path 38"
      d="M68.63,125.945V104.277h2.811V96.589h-10V94.36H49.983v2.273H40v7.687h2.822v21.668Zm-7.578-17.209h3.295v12.08H61.053Zm-6.974,0h3.295v12.08H54.079Zm-6.974,0H50.4v12.08H47.105Z"
      transform="translate(-40 -94.36)"
      :fill="fill"
    />
  </svg>
</template>
<script lang="ts">
export default {
  name: "IconDelete",
  props: {
    fill: { type: String, default: "#fff" },
  },
};
</script>
