<template lang="">
  <div>
    <hr/>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="sidebar_content">
              <ul>
                <li><NuxtLink to="/">Dashboard</NuxtLink></li>
                <li><NuxtLink to="/">Article Manage</NuxtLink></li>
                <li><NuxtLink to="/">Category</NuxtLink></li>
                <li><NuxtLink to="/">Article Content</NuxtLink></li>
                <li><NuxtLink to="/">Text Content</NuxtLink></li>
                <li><NuxtLink to="/">Image Content</NuxtLink></li>
                <li><NuxtLink to="/">Video Content</NuxtLink></li>
                <li><NuxtLink to="/">Quotes Content</NuxtLink></li>
                <li><NuxtLink to="/">Visitors Counter</NuxtLink></li>
                <li><NuxtLink to="/">Comments Manage</NuxtLink></li>
              </ul>
          </div>
        </div>
        <div class="col-md-9">
            <div class="main_content">
                <h1>Admin Dashboard</h1>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  layout: 'admin',
  middleware: 'admin_middleware'

}
</script>
<style lang="">

</style>
