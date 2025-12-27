<script lang="TS">
    export let text = "";
    export let sizeFont = "clamp(2rem, 5vw, 6rem)";
</script>


<h1 class="title" style:font-size="{sizeFont}">
    {text}
</h1>

<style>
.title {
    margin: 0;
    line-height: 0.9;
    padding: 0;
    background: linear-gradient(to right, #7e5cff 20%, #b8a1ff 80%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }

</style>