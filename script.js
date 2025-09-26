
/* Minimal JS for data-driven lists and UX niceties */
const data = {
  publications: [
    {
      title: "Paper Title One",
      authors: "First A., Second B.",
      venue: "Journal/Conference, 2024",
      links: [{label:"PDF", href:"#"}, {label:"DOI", href:"#"}]
    },
    {
      title: "Paper Title Two",
      authors: "First A., Second B., Third C.",
      venue: "Proceedings, 2023",
      links: [{label:"PDF", href:"#"}]
    }
  ],
  teaching: [
    { course: "Course Name", term: "Spring 2025", role: "Instructor", link: "#" },
    { course: "Another Course", term: "Fall 2024", role: "Lecturer", link: "#" }
  ],
  service: [
    { role: "PC Member", venue: "ACM XYZ 2024" },
    { role: "Reviewer", venue: "IEEE ABC 2023" }
  ]
};

function renderList(id, items, renderItem){
  const ul = document.getElementById(id);
  if(!ul) return;
  ul.innerHTML = items.map(renderItem).join("");
}

function linkBadges(links){
  return (links||[]).map(l => `<a class="badge" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join("");
}

// Populate dynamic sections
document.addEventListener("DOMContentLoaded", () => {
  renderList("pubs-list", data.publications, p => `
    <li>
      <div class="kicker">${p.venue}</div>
      <div><strong>${p.title}</strong></div>
      <div><small>${p.authors}</small></div>
      <div style="margin-top:8px">${linkBadges(p.links)}</div>
    </li>
  `);
  renderList("teaching-list", data.teaching, t => `
    <li>
      <div><strong>${t.course}</strong> — <small>${t.term}</small></div>
      <div><small>${t.role}</small></div>
      ${t.link ? `<div style="margin-top:8px"><a class="badge" href="${t.link}" target="_blank" rel="noopener">Syllabus</a></div>` : ""}
    </li>
  `);
  renderList("service-list", data.service, s => `
    <li>
      <div><strong>${s.role}</strong></div>
      <div><small>${s.venue}</small></div>
    </li>
  `);
});
