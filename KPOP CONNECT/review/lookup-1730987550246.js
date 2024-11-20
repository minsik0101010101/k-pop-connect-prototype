(function(window, undefined) {
  var dictionary = {
    "e2a9e6de-036a-4964-ae93-200a0dabd953": "news",
    "b7604deb-9593-4609-8e45-76dc480e74c1": "chat",
    "afe03c47-3907-48f9-a0c0-443f24945cdb": "shop",
    "5b72dd90-f6b6-4322-ac8c-765572d1ffa2": "play",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Login",
    "4f423ae9-f422-42e1-ba0e-c6d040b91802": "mv",
    "b7e0162b-be85-4fa0-840b-04132b8fa5e2": "dash",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);