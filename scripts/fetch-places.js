import fs from "fs/promises";
import path from "path";

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
if (!API_KEY) {
  console.error("ERROR: Set environment variable GOOGLE_MAPS_API_KEY and re-run.");
  process.exit(1);
}

const SRC = path.resolve("src/data/places-source.json");
const OUT = path.resolve("src/data/places-built.json");

async function callJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text}`);
  }
  return res.json();
}

async function findPlaceId(query) {
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(query)}&inputtype=textquery&fields=place_id&key=${API_KEY}`;
  const json = await callJson(url);
  return json.candidates && json.candidates[0] && json.candidates[0].place_id ? json.candidates[0].place_id : null;
}

async function placeDetails(placeId) {
  const fields = ['name','formatted_address','geometry','rating','reviews','photos','place_id'].join(',');
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${encodeURIComponent(fields)}&key=${API_KEY}`;
  const json = await callJson(url);
  if (json.status !== 'OK') throw new Error(`Places API error: ${json.status}`);
  return json.result;
}

function photoUrl(photoRef, maxWidth = 800) {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoRef}&key=${API_KEY}`;
}

async function main() {
  const raw = await fs.readFile(SRC, "utf8");
  const list = JSON.parse(raw);
  const out = [];

  for (const item of list) {
    try {
      let placeId = item.placeId || null;
      if (!placeId && item.placeQuery) {
        placeId = await findPlaceId(item.placeQuery);
        if (!placeId) console.warn('No placeId for', item.placeQuery);
      }

      if (placeId) {
        const d = await placeDetails(placeId);
        const location = d.geometry && d.geometry.location ? { lat: d.geometry.location.lat, lng: d.geometry.location.lng } : null;
        const photos_urls = (d.photos || []).slice(0,5).map(p => photoUrl(p.photo_reference));
        const reviews = (d.reviews || []).slice(0,5).map(r => ({ author_name: r.author_name, rating: r.rating, text: r.text, time: r.time }));
        out.push({
          ...item,
          placeId: d.place_id,
          placeName: d.name,
          address: d.formatted_address,
          location,
          rating: d.rating ?? null,
          reviews,
          photos_urls
        });
      } else {
        out.push({ ...item });
      }
    } catch (err) {
      console.error('Failed for', item.title, err.message);
      out.push({ ...item, _fetchError: err.message });
    }
  }

  await fs.mkdir(path.dirname(OUT), { recursive: true });
  await fs.writeFile(OUT, JSON.stringify(out, null, 2), "utf8");
  console.log("Wrote", OUT);
}

main().catch(err => { console.error(err); process.exit(1); });