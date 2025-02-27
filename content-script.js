function replaceShortsUrl() {
  if (window.location.href.includes("https://www.youtube.com/shorts/")) {
    const newUrl = window.location.href.replace(
      "https://www.youtube.com/shorts/",
      "https://www.youtube.com/watch?v="
    );

    history.replaceState(null, "", newUrl);
    window.location.reload();
  }
}

replaceShortsUrl();

const observer = new MutationObserver(() => {
  replaceShortsUrl();
});

observer.observe(document, { subtree: true, childList: true });
