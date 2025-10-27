
/* Minimal JS for data-driven lists and UX niceties */
const data = {
  publications: [
    {
      title: "Federated feature selection for cyber-physical systems of systems",
      authors: "Pietro Cassar\u00e1 and Alberto Gotta and Lorenzo Valerio",
      venue: "2022",
      links: [
        {
          label: "PDF",
          href: "https://ieeexplore.ieee.org/abstract/document/9783110/"
        }
      ]
    },
    {
      title: "Energy efficient distributed analytics at the edge of the network for IoT environments",
      authors: "Lorenzo Valerio and Marco Conti and Andrea Passarella",
      venue: "2018",
      links: [
        {
          label: "PDF",
          href: "https://www.sciencedirect.com/science/article/pii/S1574119218300932"
        }
      ]
    },
    {
      title: "A communication efficient distributed learning framework for smart environments",
      authors: "Lorenzo Valerio and Andrea Passarella and Marco Conti",
      venue: "2017",
      links: [
        {
          label: "PDF",
          href: "https://www.sciencedirect.com/science/article/pii/S1574119217303875"
        }
      ]
    },
    {
      title: "An opportunistic platform for android-based mobile devices",
      authors: "Paolo Meroni and Elena Pagani and Gian Paolo Rossi and Lorenzo Valerio",
      venue: "2010",
      links: [
        {
          label: "PDF",
          href: "https://dl.acm.org/doi/abs/10.1145/1755743.1755783"
        }
      ]
    },
    {
      title: "Hypothesis transfer learning for efficient data computing in smart cities environments",
      authors: "Lorenzo Valerio and Andrea Passarella and Marco Conti",
      venue: "2016",
      links: [
        {
          label: "PDF",
          href: "https://ieeexplore.ieee.org/abstract/document/7501696/"
        }
      ]
    }
  ],
  teaching: [
    { title: "Introduction to Federated Learning, coping with heterogeneity", course: "International Student Workshop on \"The Interplay between Machine Learning and Communications Systems\"", venue: "CTTC, Barcelona, Spain", term: "May 13-17, 2024", role: "Invited Speaker", link: "#" },
    { title: "Model Compression/DNN Pruning", course: "Summer School on Deep Learning for Autonomous Systems and Smart Cities", venue: "Aarhus University, Aarhus, Danemark", term: "May 23-26, 2023", role: "Invited Speaker", link: "#" },
  ],
  service: [
    { role: "PC Member", venue: "IEEE Percom 2025" },
    { role: "PC Member", venue: "AAAI 2022,2023,2024,2025" },
    { role: "PC Member", venue: "ANT 2021" },
    { role: "Reviewer", venue: "IEEE IJCNN 2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025" },
    { role: "Reviewer", venue: "EUSIPCO 2022" },
    { role: "Reviewer", venue: "SIGIR 2021" },
    { role: "Reviewer", venue: "ANT 2021,2022" },
  ],
  projects: [
    { name: "PNRR-RESTART", description: "Reserach and innovation on future telecommunications systems and networks, to make Italy more Smart", year: "2023-present", link: "https://www.fondazione-restart.it/project/" },
    { name: "PNRR-FAIR", description: "Future Artificial Intelligence Research", year: "2023-present", link: "https://future-ai-research.it/" },
    { name: "CNR-FOE STRIVE-MeSaS", description: "Intelligent Models and Tools for Sustainable AI", year: "2023-present", link: "" },
    { name: "HE TRANTOR", description: "5G+ evolution to multiorbital mltiband networks", year: "2023-present", link: "https://www.trantor-he.eu/" },
    { name: "CHIST-ERA SAI", description: "Social Explainable AI", year: "2021-2023", link: "https://www.sai-project.eu/" },
    { name: "H2020 MARVEL", description: "Multimodal Estreme Scale Data Analytics for Smart Cities environments", year: "2021-2023", link: "https://www.marvel-project.eu/" },
    { name: "HE HCAIM", description: "Human Centred AI Masters [Education]", year: "2021-2023", link: "https://humancentered-ai.eu/" },
    { name: "PON OK-INSAID", description: "Operational Knowledge from Insights and Analytics on Industrial Data", year: "2021-2023", link: "https://www.eng.it/en/case-studies/ok-insaid-dati-fabbrica-futuro" },
    { name: "H2020 HumanAI-Net", description: "European Network of Human-centered Artificial Intelligence", year: "2020", link: "https://www.humane-ai.eu/" },
    { name: "FP7 MOTO", description: "Mobile opportunistic Traffic Offloading", year: "2025", link: "https://cordis.europa.eu/project/id/317959" },
  ],
  organization: [
    { role: "Workshop Organizer", event: "4th Workshop on Pervasive and Resource-constrained Artificial Intelligence, co-located to IEEE Percom", venue: "Washington, DC, USA", date: "2025" },
    { role: "Workshop Organizer", event: "3rd Workshop on Pervasive and Resource-constrained Artificial Intelligence, co-located to IEEE Percom", venue: "Biarritz, France", date: "2024" },
    { role: "Workshop Organizer", event: "2nd Workshop on Pervasive and Resource-constrained Artificial Intelligence, co-located to IEEE Percom", venue: "Atlanta, Georgia, USA", date: "2023" },
    { role: "Workshop Organizer", event: "1st Workshop on Pervasive and Resource-constrained Artificial Intelligence, co-located to IEEE Percom (virtual)", venue: "Pisa, Italy", date: "2022" },
    { role: "Workshop Organizer", event: "SS on Edge-Fog-Cloud machine learning for smart cities @ EUSIPCO", venue: "Belgrad, Serbia", date: "2022" },
    { role: "Track Chair", event: "Track on \"Big Data and AI\" @ IEEE Conference on Mobile Sensing and Netowrking (MSN)", venue: "", date: "2022" },
    { role: "Workshop Organizer", event: "9th Intl. Workshop on Autonomic and Cognitive Communications, co-located with IEEE WoWMoM 2015", venue: "Pisa, Italy", date: "2015" },
  ],
  editorial: [
    { role: "Editorial Board Member", venue: "Elsevier Computer Communications, 2015-present" },
    { role: "Guest Editor", venue: "Elsevier Pervasive and Mobile Computing, 2023" },
    { role: "Guest Editor", venue: "Elsevier Computer Communications, 2016" },

  ]
};

function renderList(id, items, renderItem) {
  const ul = document.getElementById(id);
  if (!ul) return;
  ul.innerHTML = items.map(renderItem).join("");
}

function linkBadges(links) {
  return (links || []).map(l => `<a class="badge" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join("");
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
      <div><small>${t.term}</small> - ${t.role} </div>
      <div>Title: ${t.title}</div>
      <div>Venue: ${t.course} </div>
      <div>Location: ${t.venue}</small></div>
      ${t.link ? `<div style="margin-top:8px"><a class="badge" href="${t.link}" target="_blank" rel="noopener">Syllabus</a></div>` : ""}
    </li>
  `);
  renderList("project-list", data.projects, r => `
    <li>
      <div class="kicker">${r.year}</div>
      <div><strong><a class="badge" href=${r.link} target="_blank" rel="noopener">${r.name}</a></strong></div>
      <div><small>${r.description}</small></div>
    </li>
  `);
  renderList("organization-list", data.organization, o => `
    <li>
      <div class="kicker">${o.date}-${o.event}</div>
      <div>${o.venue}</div>
      <div><strong>${o.role}</strong></div>
      <div><small>${o.date}</small></div>
    </li>
  `);
  renderList("editorial-list", data.editorial, e => `
    <li>
      <div><strong>${e.venue}</strong></div>
      <div>${e.role}</div>
    </li>
  `);
  renderList("service-list", data.service, s => `
    <li>
      <div><strong>${s.venue}</strong></div>
      <div>${s.role}</div>
    </li>
  `);
});
