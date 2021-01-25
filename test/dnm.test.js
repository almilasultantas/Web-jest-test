import { mount } from "@vue/test-utils";

import Coffeepage from "../pages/Coffeepage.vue";

describe("Coffeepage.vue", () => {
  let wrapper = mount(Coffeepage);
  it("There is a Kahve çeşitleri", () => {
    expect(wrapper.text()).toContain("KAHVE ÇEŞİTLERİ");
  });
  // it("There is a Kahve çeşitleri", () => {
  //   expect(wrapper.text()).toContain("ZAHVE ÇEŞİTLERİ");
  // });
  it("There is a tanım", () => {
    expect(wrapper.text()).toContain("Taze ve kaliteli kahve çekirdeklerini bulabileceğiniz Türkiyenin en büyük online kahve mağazası.");
  });
  it("There is a Marka", () => {
    expect(wrapper.text()).toContain("MARKA");
  });
  it("There is a Origin", () => {
    expect(wrapper.text()).toContain("ORİGİN");
  });
  it("There is a Tat", () => {
    expect(wrapper.text()).toContain("TAT");
  });
 
});
