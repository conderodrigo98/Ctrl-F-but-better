var currentResults = [];

chrome.runtime.onMessage.addListener(search);

function search (request, sender, response) {
  currentResults.forEach(r => {
    r.parentNode.replaceChild(document.createTextNode(r.textContent), r);
  })
  currentResults = [];
  
  var searchTerm = request.message;
  var body = document.body.querySelectorAll("*");
  body.forEach(e => {
    if (e.textContent.includes(searchTerm) && e.children.length === 0 && isVisible(e)){
      e.innerHTML = e.textContent.replace(searchTerm, "<span style='color: yellow'>" + searchTerm + "</span>");
      currentResults.push(e.children[0]);
    }
  });
}

function isVisible(elem) {
  return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};
