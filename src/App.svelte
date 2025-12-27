<script lang="ts">
  import {Router, Link, Route} from "svelte5-router"
  import Home from './pages/Home/Home.svelte';
  export let url = "";
</script>

<Router {url}>
  <Route path="/" component={Home} />
</Router>

<style>

</style>
