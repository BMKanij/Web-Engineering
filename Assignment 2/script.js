document.getElementById('searchButton').addEventListener('click', function () {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const cards = document.querySelectorAll('.productCard');
  cards.forEach(card => {
    const name = card.querySelector('h3').innerText.toLowerCase();
    if (!q || name.includes(q)) card.style.display = '';
    else card.style.display = 'none';
  });
});

const reviewForm = document.getElementById('reviewForm');
const reviewsDisplay = document.getElementById('reviewsDisplay');
const clearBtn = document.getElementById('clearReviews');

function createReviewCard(data) {
  const div = document.createElement('div');
  div.className = 'review-card';
  div.innerHTML = `
    <header>
      <h4>${escapeHtml(data.name)} <small>(${escapeHtml(data.gender)})</small></h4>
      <small>${escapeHtml(data.rating)} ⭐</small>
    </header>
    <p><small>Email:</small> ${escapeHtml(data.email)}</p>
    <p>${escapeHtml(data.review)}</p>
  `;
  return div;
}

reviewForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const fd = new FormData(reviewForm);
  const data = {
    name: fd.get('name'),
    email: fd.get('email'),
    gender: fd.get('gender'),
    rating: fd.get('rating'),
    review: fd.get('review')
  };


  const card = createReviewCard(data);
  reviewsDisplay.prepend(card);

 
  saveReviewToLocal(data);

  reviewForm.reset();
});


clearBtn.addEventListener('click', function () {
  if (confirm('Are you sure you want to clear all reviews?')) {
    reviewsDisplay.innerHTML = '';
    localStorage.removeItem('shop_reviews');
  }
});


function saveReviewToLocal(review) {
  const key = 'shop_reviews';
  let arr = JSON.parse(localStorage.getItem(key) || '[]');
  arr.unshift(review);
  
  if (arr.length > 50) arr = arr.slice(0, 50);
  localStorage.setItem(key, JSON.stringify(arr));
}

function loadReviewsFromLocal() {
  const arr = JSON.parse(localStorage.getItem('shop_reviews') || '[]');
  arr.forEach(r => {
    const card = createReviewCard(r);
    reviewsDisplay.appendChild(card);
  });
}


function escapeHtml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


loadReviewsFromLocal();

