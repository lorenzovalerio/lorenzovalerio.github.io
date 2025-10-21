from scholarly import scholarly
from urllib.parse import urlparse, parse_qs
from typing import List, Dict, Optional
import json


def author_id_from_url(profile_url: str) -> str:
    """Extract the Google Scholar 'user' id from a profile URL."""
    qs = parse_qs(urlparse(profile_url).query)
    uid = qs.get("user", [None])[0]
    if not uid:
        raise ValueError("Could not find 'user' parameter in the provided URL.")
    return uid


def top_cited_pubs_by_author_id(author_id: str, n: int = 5) -> List[Dict]:
    """
    Return the top-N most cited publications for a given Google Scholar author id.
    Each dict has title, citations, year, url, authors (if available).
    """
    author = scholarly.search_author_id(author_id)
    author = scholarly.fill(author, sections=["publications"])

    results = []
    for pub in author.get("publications", []):
        pub = scholarly.fill(pub)
        results.append(
            {
                "title": pub.get("bib", {}).get("title"),
                "authors": pub.get("bib", {}).get("author", ""),
                "venue": pub.get("bib", {}).get("venue", ""),
                "year": pub.get("bib", {}).get("pub_year"),
                "citations": pub.get("num_citations", 0),
                "url": pub.get("eprint_url") or pub.get("pub_url"),
            }
        )

    results.sort(key=lambda x: x["citations"], reverse=True)
    return results[:n]


def top_cited_pubs_by_profile_url(profile_url: str, n: int = 5) -> List[Dict]:
    """Wrapper for passing the full profile URL instead of the id."""
    uid = author_id_from_url(profile_url)
    return top_cited_pubs_by_author_id(uid, n=n)


def to_js_publications(pubs: List[Dict]) -> str:
    """
    Convert a list of publication dicts into a JS snippet like:
    publications: [ { title: "...", authors: "...", venue: "...", links: [...] }, ... ]
    """
    js_ready = []
    for p in pubs:
        # Compose the 'venue' string with year if available
        venue = p.get("venue", "")
        if p.get("year"):
            venue = f"{venue}, {p['year']}" if venue else str(p["year"])

        # Compose links array (PDF if url exists)
        links = []
        if p.get("url"):
            links.append({"label": "PDF", "href": p["url"]})

        js_ready.append(
            {
                "title": p.get("title", ""),
                "authors": p.get("authors", ""),
                "venue": venue,
                "links": links,
            }
        )

    # Create JS code as a string; keep keys unquoted where valid in JS
    js_code = "publications: " + json.dumps(js_ready, indent=2)
    return js_code


if __name__ == "__main__":
    # Example usage:
    profile_url = "https://scholar.google.com/citations?user=CjoX4voAAAAJ"
    pubs = top_cited_pubs_by_profile_url(profile_url, n=5)
    print(to_js_publications(pubs))
