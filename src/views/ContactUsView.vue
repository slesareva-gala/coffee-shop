<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <title-page text="Contact us" />
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              class="beanslogo mt-5"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />

            <form @submit.prevent="submit" action="#" class="mt-5">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.form.name.$model"
                    type="text"
                    class="form-control"
                    id="name-input"
                  />
                  <span
                    class="error-message"
                    v-for="error in v$.form.name.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.form.email.$model"
                    type="email"
                    class="form-control"
                    id="email-input"
                  />
                  <span
                    class="error-message"
                    v-for="error in v$.form.email.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="phone-input" class="mb-0"> Phone </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.form.phone.$model"
                    type="tel"
                    class="form-control"
                    id="phone-input"
                  />
                  <span
                    class="error-message"
                    v-for="error in v$.form.phone.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-start">
                  <label for="pmessage" class="mb-3 mt-3 text-center">
                    Your message
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12">
                  <textarea
                    v-model="v$.form.message.$model"
                    class="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Leave your comments here"
                  ></textarea>
                  <span
                    class="error-message col col-12 col-sm-9"
                    v-for="error in v$.form.message.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 d-flex justify-content-start">
                  <input
                    v-model="v$.consent.$model"
                    name="consent"
                    id="consent"
                    type="checkbox"
                  />
                  <label for="consent" class="mb-0 mt-0 ml-2 text-center"
                    >I agree with the offer agreement</label
                  >
                </div>
                <div
                  class="error-message col col-12"
                  v-for="error in v$.consent.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <button class="btn btn-outline-dark send-btn">Send us</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import TitlePage from "@/components/TitlePage.vue";

import { useVuelidate } from "@vuelidate/core";
import { required, email, maxLength } from "@vuelidate/validators";
import { helpers } from "@vuelidate/validators";
import { minLength } from "@/validators/minLength";

import { sendData } from "../mixins/serverData";

export default {
  components: { NavBarComponent, TitlePage },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      consent: true,
    };
  },
  validations() {
    return {
      form: {
        name: { required },
        email: { required, email },
        phone: {},
        message: {
          required,
          maxLength: maxLength(20),
          minLength: helpers.withMessage("This value min 5", minLength),
        },
      },
      consent: {
        required,
        is: helpers.withMessage("Consent is required", (v) => v),
      },
    };
  },
  methods: {
    async submit() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

      sendData({
        message: this.form,
        callback: () => {
          Object.keys(this.form).forEach((key) => {
            this.form[key] = "";
          });
          this.v$.$reset();
          this.$router.push({ name: "thank-you" });
        },
      });
    },
  },
};
</script>