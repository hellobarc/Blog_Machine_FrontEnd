<template lang="">
  <div>
    <div class="right_item_nav">
        <form action="" class="search-form">
          <div class="form-group has-feedback">
            <label for="search" class="sr-only">Search</label>
            <input type="text" class="form-control" name="search" id="search" >
            <span class="form-control-feedback "><div class="left_minus_m_27"><b-icon icon="search"></b-icon></div></span>
          </div>
        </form>
      </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.search-form .form-group {
  float: right !important;
  transition: all 0.35s, border-radius 0s;
  width: 40px;
  height: 40px;
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
  border-radius: 25px;
  border: 1px solid #ccc;
  width: 100%;
}
.search-form .form-group input.form-control {
  padding-right: 20px;
  border: 0 none;
  background: transparent;
  box-shadow: none;
  display:block;

}
.search-form .form-group input.form-control::-webkit-input-placeholder {
  display: none;
}
.search-form .form-group input.form-control:-moz-placeholder {
  /* Firefox 18- */
  display: none;
}
.search-form .form-group input.form-control::-moz-placeholder {
  /* Firefox 19+ */
  display: none;
}
.search-form .form-group input.form-control:-ms-input-placeholder {
  display: none;
}
.search-form .form-group:hover,
.search-form .form-group.hover {
  width: 100%;
  border-radius: 25px;
}
.search-form .form-group span.form-control-feedback {
  position: absolute;
  top: -1px;
  right: -2px;
  z-index: 2;
  display: block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  color: #3596e0;
  left: initial;
  font-size: 14px;
}


.left_minus_m_27{
  margin-left: -35px;
    font-size: 22px;
    margin-top: 3px;

}

</style>
