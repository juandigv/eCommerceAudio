<template>
  <div class="header">
    <img
      alt=""
      class="healthy-logo-2-1"
      src="../assets/HealthyLogo.png"
    />
  <div class="buttons">    
      <div class="button-header">
      <div class="button">
        <p class="btn-label">Sales</p>
      </div>
      <img
        alt=""
        class="vector"
        src="../assets/sales.svg"
      />
    </div>
    <div class="button-header">
      <div class="button">
        <p class="btn-label">Support</p>
      </div>
      <img
        alt=""
        class="vector"
        src="../assets/support.svg"
      />
    </div>
    <div class="button-header">
      <div class="button">
        <p class="btn-label">Home</p>
      </div>
      <img
        alt=""
        class="vector"
        src="../assets/home.svg"
      />
    </div>
    <div class="button-header">
      <div class="button">
        <p class="btn-label">Cart</p>
      </div>
      <img
        alt=""
        class="vector"
        src="../assets/cart.svg"
      />
    </div>
    <div class="button-header">
      <div class="button">
        <p class="btn-label">Profile</p>
      </div>
      <img
        alt=""
        class="vector"
        src="../assets/profile.svg"
      />
    </div>
    </div>
    <img
      alt=""
      class="group-6"
      src="../assets/searchbar.png"
    /> 

  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
* {
    box-sizing: border-box;
}
.header {
  background: linear-gradient(#5865F2, #5865F2),#FCFCFC;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  

}
.healthy-logo-2-1 {
  width: 144px;
  height: 80px;
  margin-right: 32px;
  border-radius: 8px;
  margin-left: 0px;
}
.buttons{
    display: flex;
    position: absolute;
    left: 220px;
    
}

.button-header {
  margin-right: 16px;
  position: relative;
}
.button {
  background-color: #FCFCFC;
  border-radius: 32px;
  padding-left: 22px;
  padding-right: 1px;
  padding-top: 2px ;
  padding-bottom: 2px ;
  position: relative;
  background-color: #FCFCFC;
  width: 120px;
  min-width: 30px;
  height: 40px;
}
.btn-label {
  margin: 0px;
  height: 100%;
  width: 100%;
  color: #5865F2;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  
}
.vector {
  width: 20%;
  height: 75%;
  position: absolute;
  left: 16px;
  flex: 1;
  top: 4px;
}
.group-6 {
  width: 296px;
  height: 48px;
}
</style>