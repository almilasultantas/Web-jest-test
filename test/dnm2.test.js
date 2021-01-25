import { mount } from "@vue/test-utils";

import index from "../pages/index.vue";

describe("index.vue", () => {
  let wrapper = mount(index);
  it("There is a POPÜLER KATEGORİLER", () => {
    expect(wrapper.text()).toContain("POPÜLER KATEGORİLER");
  });
  it("There is a Tat", () => {
    expect(wrapper.text()).toContain("TAT");
  });

 
});