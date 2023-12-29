$(window).on("load", function () {
  new Main();
});

class Main {
  constructor() {
    this.init();
  }

  init() {
    new Accordion(".accordion");
    this.addListeners();
    this.navbarToggle();
  }

  addListeners() {
    $(document).ready(function () {
      var form = new Form("#anmeldeformular");

      $("#anmeldeformular").on("submit", function (e) {
        e.preventDefault();
        console.log(form.getCheckedValues());
      });
    });
  }

  navbarToggle() {
    $(".navigation__toggle-button").on("click", function () {
      if ($(".navigation__menu").hasClass("responsive")) {
        $(".navigation__menu").removeClass("responsive");
        $(".navigation__menu").slideUp();
      } else {
        $(".navigation__menu").addClass("responsive");
        $(".navigation__menu").slideDown();
      }
    });
  }
}

class Form {
  constructor(selector) {
    this.selector = selector;
    this.checkboxes = $(selector + ' input[type="checkbox"]');
  }
  getCheckedValues() {
    var checkedValues = [];
    this.checkboxes.each(function (index, element) {
      if ($(element).is(":checked")) {
        checkedValues.push($(element).val());
      }
    });
    return checkedValues;
  }
}

class Accordion {
  constructor(selector) {
    this.accordion = $(selector);
    this.accordionItems = this.accordion.find(".accordion__item");
    this.bindEvents();
  }

  bindEvents() {
    this.accordionItems.on("click", this.handleClick.bind(this));
  }

  handleClick(event) {
    const target = $(event.currentTarget);
    if (target.hasClass("active")) {
      target.removeClass("active");
      target.children(".accordion__content").slideUp();
    } else {
      this.accordionItems.removeClass("active");
      this.accordionItems.children(".accordion__content").slideUp();
      target.addClass("active");
      target.children(".accordion__content").slideDown();
    }
  }
}
