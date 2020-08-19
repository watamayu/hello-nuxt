<template>
  <div class="head-primary">
    <h1>
      <slot name="image" />
      <span class="title" >
        <slot name="title" />
      </span>
      <slot name="lead" />
    </h1>
  </div>
</template>

<style>
.head-primary h1 {
  @apply flex flex-wrap;
}

.head-primary .title {
  width: 290px;
  font-size: theme('fontSize.fz20');
  line-height: theme('lineHeight.lh25');
  /* color: theme('colors.lh25'); */
  color: #3b3b3b;
  @apply flex items-end font-bold
}

.head-primary /deep/ .lead {
  font-size: theme('fontSize.fz12');
  line-height: theme('lineHeight.lh16');
  @apply w-full pt-8;
  color: #888787;
}

.head-primary /deep/ .image {
  @apply mr-20;
}
</style>
