import { getUser } from '../github/service';

const ME_ATTR = 'me';

export class AboutMe extends HTMLElement {
  // noinspection JSUnusedGlobalSymbols
  static get observedAttributes(): string[] {
    return [ME_ATTR];
  }

  constructor() {
    super();
  }

  // noinspection JSUnusedGlobalSymbols
  attributeChangedCallback(name: string, oldValue: any, newValue: any): void {
    if (name === ME_ATTR && oldValue !== newValue) {
      this.render(newValue);
    }
  }

  async render(me: string): Promise<void> {
    const user = await getUser(me);
    this.innerHTML = `
      <img src="${user.img}">
      <p>${user.bio}</p>
    `;
  }
}
