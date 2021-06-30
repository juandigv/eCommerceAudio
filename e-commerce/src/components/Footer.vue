<template>
  <div class="footer">
    <div class="flex-wrapper-two">
      <div class="flex-social-networks">
        <img alt="" class="vector" src="../assets/facebook.svg" />
        <img alt="" class="vector" src="../assets/skype.svg" />
        <img alt="" class="vector" src="../assets/whatsapp.svg" />
        <img alt="" class="vector" src="../assets/instagram.svg" />
      </div>
      <div class="sign-up-container">
        <img alt="" class="vector-two" src="../assets/pencil.svg" />
        <p class="sign-up">Sign Up</p>
      </div>
    </div>
    <div class="flex-wrapper-one">
      <div class="aux">
        <div class="flex-wrapper-title">
          <p class="titles">Aditional Information</p>
          <p class="titles">About the company</p>
          <p class="titles">Licenses and disclaimers</p>
        </div>
        <div class="flex-wrapper-subtitles">
          <p class="subtitle1">Relevant link 1</p>
          <p class="subtitle2">Contact Us</p>
          <p class="subtitle3">Terms of use</p>
        </div>
        <div class="flex-wrapper-subtitles">
          <p class="subtitle1">Relevant link 2</p>
          <p class="subtitle2">About Us</p>
          <p class="subtitle3">Terms of sale</p>
        </div>
        <div class="flex-wrapper-subtitles">
          <p class="subtitle1">Relevant link 3</p>
          <p class="subtitle2">Work with us</p>
          <p class="subtitle3">Accesibility</p>
        </div>
        <div class="flex-wrapper-subtitles">
          <p style="margin-left: 11em" class="subtitle1"></p>
          <p class="subtitle2">Support</p>
          <p class="subtitle3">Trademarks</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--v-charcoal50-base);
  display: flex;
  flex-direction: column;
}
.flex-wrapper-two {
  background-color: var(--v-charcoal400-base);
  padding: 16px 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-social-networks {
  margin-right: 32px;
  border-radius: 2px;
  display: flex;
  align-items: flex-start;
  margin-right: 840px;
}
.vector {
  flex: 1;
  align-self: stretch;
  margin-right: 30px;
  object-fit: cover;
}
.vector-two {
  flex: 1;
  align-self: stretch;
  object-fit: cover;
  margin-right: 10px;
}
.sign-up-container {
  display: flex;
  justify-content: space-between;
}
.sign-up {
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  margin: 0px;
  color: var(--v-charcoal50-base);
  min-width: 70px;
}
.flex-wrapper-one {
  background-color: var(--v-charcoal900-base);
  padding: 32px 64px 40px;
  display: flex;
  flex-direction: column;
}
.flex-wrapper-title {
  margin-bottom: 32px;
  display: flex;
  align-items: flex-start;
  text-align: center;
  justify-content: space-between;
}
.flex-wrapper-subtitles {
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.titles {
  width: 308px;
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--v-charcoal50-base);
}
.subtitle1 {
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  color: var(--v-charcoal50-base);
  margin-left: 80px;
}
.subtitle2 {
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: var(--v-charcoal200-base);
  margin-right: 15px;
}
.subtitle3 {
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: var(--v-charcoal200-base);
  margin-right: 114px;
}
.support {
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: var(--v-charcoal200-base);
  margin-right: -720px;
}
.trademarks {
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: var(--v-charcoal200-base);
  margin-right: 200px;
}
.aux {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
}
</style>
