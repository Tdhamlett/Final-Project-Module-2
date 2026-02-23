const rows = document.querySelectorAll(".card-row");

function getScrollAmount(row) {
  return Math.max(row.clientWidth * 0.9, 260);
}

function updateArrowStates(row) {
  const prev = document.querySelector(`.row-nav.prev[data-row-target="${row.id}"]`);
  const next = document.querySelector(`.row-nav.next[data-row-target="${row.id}"]`);
  if (!prev || !next) return;

  const maxScroll = row.scrollWidth - row.clientWidth - 2;
  prev.disabled = row.scrollLeft <= 2;
  next.disabled = row.scrollLeft >= maxScroll;
}

function scrollRow(row, direction) {
  row.scrollBy({
    left: direction * getScrollAmount(row),
    behavior: "smooth"
  });
}

rows.forEach((row) => {
  updateArrowStates(row);
  row.addEventListener("scroll", () => updateArrowStates(row), { passive: true });
});

window.addEventListener("resize", () => {
  rows.forEach((row) => updateArrowStates(row));
});

document.querySelectorAll(".row-nav").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.rowTarget;
    const row = document.getElementById(targetId);
    if (!row) return;
    const direction = button.classList.contains("next") ? 1 : -1;
    scrollRow(row, direction);
  });
});
