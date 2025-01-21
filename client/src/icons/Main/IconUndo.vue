<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="31.375" height="30.67" viewBox="0 0 31.375 30.67"><path d="M20.933,187.583H11.145V184.9a.738.738,0,0,0-1.165-.583l-6.642,5.36a.778.778,0,0,0,0,1.165l6.642,5.36a.738.738,0,0,0,1.165-.583v-2.68h9.788a8.39,8.39,0,1,1,0,16.78H16.5v5.127h4.428A13.527,13.527,0,0,0,34.45,201.333,13.728,13.728,0,0,0,20.933,187.583Z" transform="translate(-3.075 -184.18)" :fill="fill"/></svg>
</template>

<script>
export default {
  name: "IconDelete",
  props: {
    fill : { type: String, default: "#fff"}
  }
}
</script>