<template>
  <div class="choco-icon">
    <div class="choco-icon__svg" :style="{'color': color,'fontSize': font_size }" v-html="svg_tags">
    </div>
    <div class="choco-icon_counter">
      <h4 class="m-0">10</h4>
    </div>
  </div>
</template>
<script>
  import icons from '../choco-icons'
  export default {
    props: ['color', 'font_size', 'icon'],
    data() {
      return {
        svg_tags: '',
        icon_url: '',
      }
    },
    beforeMount () {
      this.icon_url = icons
      let path_to_file = this.icon_url[this.icon]
      let svg_icon = ''
      function readTextFile(file)
      {
        let rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
          if(rawFile.readyState === 4)
          {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
              let allText = rawFile.responseText;
              svg_icon = allText
            }
          }
        }
        rawFile.send(null);
      }
      readTextFile(path_to_file)
      this.svg_tags = svg_icon
    }
  }
</script>
<style>
  .choco-icon_counter {
    position: absolute;
    top:-5px;
    right: -5px;
    background-color: #ff5d5d;
    color: white;
    padding: 2px;
    border-radius: 50%;
  }
  .choco-icon_counter h4 {
    font-size: 12px;
  }
  .choco-icon{
    display: inline-block;
    position: relative;
  }
  .choco-icon__svg {
    display: inline-block;
  }
  .choco-icon__svg svg{
    width: 1em;
  }
  .choco-icon__svg svg path{
    fill: currentcolor
  }
</style>
