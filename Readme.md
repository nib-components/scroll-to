
# scroll-to

  Animate scrolling to elements.

## Installation

    $ component install anthonyshort/scroll-to

## API

    var scrollTo = require("scroll-to");

    scrollTo({
      el : '.is-invalid',
      duration: 2000,
      easing: 'inOutExpo',
      offset: -100
    });

Pretty basic, eh? Give it a DOM element, a duration and an easing function from component/easing.

## License

  MIT
