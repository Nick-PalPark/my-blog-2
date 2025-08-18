function getEntries() {
  const el = document.getElementById('__MAP_ENTRIES__');
  if (!el) return [];
  try { return JSON.parse(el.textContent || el.innerText || '[]'); } catch (e) { console.error(e); return []; }
}

function renderReview(container, entry) {
  container.innerHTML = '';
  if (!entry) { container.innerHTML = '<p>No review.</p>'; return; }

  const title = document.createElement('div'); title.className='review-title'; title.textContent = entry.placeName || entry.title || '';
  const rating = document.createElement('div'); rating.className='rating'; rating.textContent = entry.rating ? `Rating: ${entry.rating} ★` : '';
  const excerpt = document.createElement('div'); excerpt.className='review-excerpt'; excerpt.textContent = (entry.reviews && entry.reviews[0] && entry.reviews[0].text) || entry.excerpt || '';

  container.appendChild(title);
  if (rating.textContent) container.appendChild(rating);
  container.appendChild(excerpt);

  const photos = entry.photos_urls || [];
  photos.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'review-photo';
    img.style.maxWidth = '100%';
    img.style.marginTop = '0.5rem';
    container.appendChild(img);
  });

  if (entry.url) {
    const a = document.createElement('a');
    a.href = entry.url;
    a.textContent = 'Read full post →';
    a.style.display = 'inline-block';
    a.style.marginTop = '0.5rem';
    container.appendChild(a);
  }
}

window.initMap = function () {
  const entries = getEntries();
  const mapEl = document.getElementById('map');
  const reviewEl = document.getElementById('review-content');
  if (!mapEl) return;

  const center = (entries[0] && entries[0].location) ? entries[0].location : { lat: 51.5, lng: -0.12 };
  const map = new google.maps.Map(mapEl, { center, zoom: 13, mapTypeControl: false });
  const bounds = new google.maps.LatLngBounds();

  entries.forEach((e, i) => {
    const pos = e.location ? e.location : { lat: center.lat + (i * 0.005), lng: center.lng + (i * 0.005) };
    const marker = new google.maps.Marker({ position: pos, map, title: e.placeName || e.title || '' });
    bounds.extend(pos);
    marker.addListener('click', () => {
      renderReview(reviewEl, e);
      map.panTo(marker.getPosition());
      map.setZoom(Math.max(map.getZoom(), 14));
    });
  });

  if (!bounds.isEmpty()) map.fitBounds(bounds, 80);
};