const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="../components/site-user/site-user.css">
<slot name='username'></slot>
<slot name="job"></slot>
<button>Remove</button>
<hr/>



`;

class siteUser extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    console.log("کامپوننت به دام اضافه شد");
    let removeBtn = this.shadowRoot.querySelector("button");
    removeBtn.addEventListener("click", () => {
      console.log("روی دکمه کلیک شد");
      this.remove();
    });
  }
}

export { siteUser };
