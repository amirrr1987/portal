<template>
  <svg
    v-show="display"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28.42 28.42"
    fill="#686868"
  >
    <title>user_icon</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Capa_1" data-name="Capa 1">
        <path
          d="M24.26,4.16a14.21,14.21,0,0,0-20.1,20.1,14.21,14.21,0,0,0,20.1-20.1Zm-10,5.39a1.63,1.63,0,0,0-1.63,1.63.75.75,0,0,1-.74.75.76.76,0,0,1-.75-.75,3.12,3.12,0,0,1,3.12-3.12.75.75,0,0,1,.74.75A.74.74,0,0,1,14.21,9.55ZM22.08,22c-.83-3-2.4-5.59-5.24-6.57a5,5,0,1,0-5.27,0C8.73,16.4,7.17,19,6.34,22a11.07,11.07,0,1,1,15.74,0Z"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "icon-user-2",
  props: {
    display: {
      type: Boolean,
      default: true,
    },
  },
};
</script>