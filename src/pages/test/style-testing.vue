<template>
  <div id="StyleTesting">
    <!--TEST-->
    <h2 class="text-center">TEST</h2>
    <div class="container-fluid d-flex justify-content-center" style="background: #f6f6f6;">
      <div class="row m-0" style="width: 1130px;">
        <chocomart-product></chocomart-product>
        <chocomart-product :size="1"></chocomart-product>
        <chocomart-product :size="2"></chocomart-product>
      </div>
    </div>
    <!-- GIRD START-->
    <h2 class="text-center">CHOCOMART GRID SYSTEM</h2>
    <div class="container-fluid" style="background-color: grey;border: 1px solid purple">
      <h4>div container-fluid</h4>
      <div class="row m-0" style="background-color: #ddd;border: 1px solid red">
        <div class="col-12">
          <h4>div row, with class => .m-0</h4>
        </div>
        <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <h4>div col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4</h4>
        </div>
        <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <h4>div col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4</h4>
        </div>
        <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <h4>div col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4</h4>
        </div>
      </div>
    </div>
    <div class="container-fluid p-0 mt-3 overflow-auto" style="background-color: #f6f6f6">
      <div class="col-2 float-left">
        Float Left
      </div>
      <div class="col-2 float-right text-right">
        Float right
      </div>
    </div>
    <!--GRID END-->
    <h2 class="text-center mt-5"> CHOCOMART TYPOGRAPHY </h2>
    <div class="container-fluid">
      <div class="row m-0">
        <div class="col-4 text-left" style="">
          Text left
        </div>
        <div class="col-4 text-center">
          Text center
        </div>
        <div class="col-4 text-right">
          Text right
        </div>
      </div>
    </div>

  </div>
</template>
