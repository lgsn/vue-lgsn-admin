<template>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <symbol id="tab-geometry-left" viewBox="0 0 214 36">
        <path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z" />
      </symbol>
      <symbol id="tab-geometry-right" viewBox="0 0 214 36">
        <use xlink:href="#tab-geometry-left" />
      </symbol>
      <clipPath id="crop">
        <rect width="100%" height="100%" x="0" class="mask" />
      </clipPath>
    </defs>
    <svg width="52%" height="100%">
      <use xlink:href="#tab-geometry-left" width="214" height="36" class="tab-geometry" />
    </svg>
    <g transform="scale(-1, 1)">
      <svg width="52%" height="100%" x="-100%" y="0">
        <use xlink:href="#tab-geometry-right" width="214" height="36" class="tab-geometry" />
      </svg>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'TabSvg'
}
</script>
