<template>
    <div id="app">
        <div class="section">
            <h3 style="margin:0 0 10px 0">Galleries</h3>
            <span>Feature Image: -(Image show on Deal Information Box) <span style="font-size:12px;margin:0">*Default set to max 3 images.</span></span>
            <Deals :featureImage="true"></Deals>
            <br />
            <span>Product Image: -(Image show in Deal's Details Page) <span style="font-size:12px;margin:0">*Default set to max 2 images.</span></span>
            <Deals :productImage="true"></Deals>
        </div>
        <div class="section">
            <h3 style="margin:0 0 10px 0">Visibilities</h3>
            <MultiTierDropdown label="Membership"></MultiTierDropdown>
        </div>
        <div class="section">
            <h3 style="margin:0 0 10px 0">Visibilities</h3>
            <MultiTierDropdown1 label="Visibility Type"></MultiTierDropdown1>
        </div>
    </div>
</template>

<script>
    import Deals from './components/Deals.vue'
    import MultiTierDropdown from './components/MultiTierDropdown.vue'
    import MultiTierDropdown1 from './components/MultiTierDropdown1.vue'

export default {
  name: 'App',
  components: {
      Deals,
      MultiTierDropdown,
      MultiTierDropdown1
  }
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        height: 100%;

    }
    .section{
        margin:30px;
        padding:20px;
        border:1px solid gray;
    }
</style>
