const logMessage = body => {
  fetch("/client_error_trace", {
    method: "post",
    headers: {
      Accept: "text/plain, */*",
      "Content-Type": "text/plain"
    },
    body
  });
};

const formatErrorEvent = evt =>
  evt.message
    ? `[Error] ${evt.message} at linenumber: ${evt.lineno} of file ${evt.filename}`
    : `[Error] ${evt.type} from element: ${evt.srcElement || evt.target}`;

const logUnhandledError = evt => logMessage(formatErrorEvent(evt));

window.addEventListener("error", logUnhandledError, true);

const consoleError = console.error;
console.error = (message, ...optionalArguments) =>
  logMessage(message) + consoleError(message, ...optionalArguments);
