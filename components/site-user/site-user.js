const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="../components/site-user/site-user.css">
<slot name='username'></slot>
<slot name="job"></slot>
<hr/>



`;

class siteUser extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export { siteUser };
