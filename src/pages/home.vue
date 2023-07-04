<template>
  <div class="preview">
    <div class="body">
      <div class="lg:w-2/12 lg:p-2 md:p-2 md:w-4/12" v-for="i in 10">
        <div class="card glass bg-white relative">
          <figure>
            <img
              :src="'https://api.ee123.net/img/rand.php?k=' + i"
              alt="Shoes"
            />
            <button class="btn glass btn-sm  absolute top-2	right-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>
          </figure>
          <div class="card-body">
            <h2 class="card-title text-lg">根据doc模板批量生成doc</h2>
            <p class="text-sm">数据源为excel表格</p>
            <div class="card-actions justify-end pt-3">
              <button class="btn btn-sm btn-outline btn-ghost">代码</button>
              <button class="btn btn-sm btn-outline btn-ghost">介绍视频</button>
              <button class="btn btn-sm btn-primary">使用</button>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-2/12 lg:p-2 md:p-1 md:w-4/12">
        <div class="card bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://api.ee123.net/img/rand.php?k=1" alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">没找到想要的？</h2>
            <p>来讨论区留下你的需求</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">进入</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.preview {
  background-image: repeating-linear-gradient(
    45deg,
    hsl(var(--b1)),
    hsl(var(--b1)) 13px,
    hsl(var(--b2)) 13px,
    hsl(var(--b2)) 14px
  );
}
.body {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding: 30px;
}

.card {
  margin-bottom: 40px;
}
</style>
