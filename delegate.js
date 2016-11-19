module.exports = function (rootElement, eventName, selector, callback) {
  function findTarget(element) {
    console.log("findTarget() testing: ", element);
    if (element.matches(selector)) {
      return element;
    }
    else if (element === document.body) {
      console.warn(`Ran to <body> while searching for '${selector}'`);
      return null;
    }
    else if (element === rootElement) {
      console.warn(`Ran to root while searching for '${selector}'`);
      return null;
    }
    else {
      console.log("No match", element, selector, element.matches(selector));
      return findTarget(element.parentNode);
    }
  }
  rootElement.addEventListener(eventName, function (ev) {
    ev.preventDefault();
    var target = findTarget(ev.target);
    if (target) {
      callback(ev, target);
    }
  });
};
