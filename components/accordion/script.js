/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   Simple accordion pattern example
 */
'use strict';

class Accordion {
  constructor (domNode) {
    this.rootEl = domNode;
    this.buttonEl = this.rootEl.querySelector('button[aria-expanded]');

    const controlsId = this.buttonEl.getAttribute('aria-controls');
    this.contentEl = document.getElementById(controlsId);

    this.chevron = this.rootEl.querySelector('.chevron-icon');

    this.open = this.buttonEl.getAttribute('aria-expanded') === 'true';

    // add event listeners
    this.buttonEl.addEventListener('click', this.onButtonClick.bind(this));
  }

  onButtonClick() {
    this.toggle(!this.open);
  }

  toggle(open) {
    // don't do anything if the open state doesn't change
    if (open === this.open) {
      return;
    }

    // update the internal state
    this.open = open;

    // handle DOM updates
    this.buttonEl.setAttribute('aria-expanded', `${open}`);

    if (open) {
      this.chevron.style.transform = 'rotate(180deg)';
      this.buttonEl.setAttribute('aria-expanded', true);
      this.contentEl.setAttribute('aria-hidden', false);

      Array.from(document.querySelectorAll('h3'))
        .filter(h3 => h3 !== this.rootEl)
        .forEach(trigger => {
          const button = trigger.querySelector('button[aria-expanded="true"]');
          if (button) button.click();
          /* const t = new Accordion(trigger);
          t.close(); */
        });
    } else {
      this.chevron.style.transform = 'rotate(0deg)';
      this.buttonEl.setAttribute('aria-expanded', false);
      this.contentEl.setAttribute('aria-hidden', true);
    }
  }

  // Add public open and close methods for convenience
  open() {
    this.toggle(true);
  }

  close() {
    this.toggle(false);
  }
}

// init accordions
const accordions = document.querySelectorAll('.accordion h3');

accordions.forEach((accordionEl) => {
  new Accordion(accordionEl);
});
