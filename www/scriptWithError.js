const callback = function() {
  document.getElementById("error").addEventListener("click", () => {
    throw new Error("Very unhandled exception!");
  });
  document.getElementById("logger").addEventListener("click", () => {
    console.error("Logging something terrible bad!", "oh", "dear");
  });
};

(document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
  ? callback
  : document.addEventListener)("DOMContentLoaded", callback);
