document.addEventListener("DOMContentLoaded", () => {
  const tocDetails = document.querySelector(".toc-wrap");
  const toggleLabel = tocDetails?.querySelector(".toc-toggle-label");

  if (!tocDetails || !toggleLabel) return;

  const updateToggleText = () => {
    toggleLabel.textContent = tocDetails.open ? "目次 [閉じる]" : "目次 [開く]";
  };

  tocDetails.addEventListener("toggle", updateToggleText);
  updateToggleText();
});
