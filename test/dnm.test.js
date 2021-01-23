import { mount } from "@vue/test-utils";

import ShoppingBasket from "../components/ShoppingBasket.vue";

describe("ShoppingBasket.vue", () => {
  let wrapper = mount(ShoppingBasket);
  it("There is a ShoppingBasket", () => {
    expect(wrapper.text()).toContain("SEPETİNİZ");
  });
  
});
