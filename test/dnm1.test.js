import { mount } from "@vue/test-utils";

import Loginpage from "../pages/Loginpage.vue";

describe("Loginpage.vue", () => {
  let wrapper = mount(Loginpage);
  it("There is a Giriş Butonu", () => {
    expect(wrapper.text()).toContain("GİRİŞ YAP");
  });
  it("There is a Şifremi unuttum", () => {
    expect(wrapper.text()).toContain("Şifremi Unuttum");
  });
  it("There is a Kayıt ol", () => {
    expect(wrapper.text()).toContain("KAYIT OL");
  });
//   it("There is a Kayıt ol", () => {
//     expect(wrapper.text()).toContain("TKAYIT OL");
//   });
 
});