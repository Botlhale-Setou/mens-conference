const speakersSec = document.querySelector('#speaker-sec');
const btnMore = document.querySelector('#morebtn');
const sp3 = document.querySelector('#sp3');
const sp4 = document.querySelector('#sp4');
const sp5 = document.querySelector('#sp5');
const sp6 = document.querySelector('#sp6');

const dataMod = {
  name: ['Vusi Thembekwayo', 'Dan Pena', 'Patrice Motsepe', 'Robert Greene', 'Mike Tyson', 'Jordan Peterson'],
  job: ['Top South African Businessman', 'World-Renowned American Businessman', 'South African Oil Billionaire',
    'World-renowned American Author', 'Legendary Boxing Champion', 'World-renowned Canadian Clinical Psychologist'],
  desc: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis accusamus minus exercitationem commodi veritatis. Nostrum.'],
  image: ['./artwork/images/vusi.jpeg', './artwork/images/dan.jpg', './artwork/images/patrice.jfif',
    './artwork/images/robert.webp', './artwork/images/mike.jpg', './artwork/images/jordan.jpg'],
};

speakersSec.innerHTML = `
<h4 class="" id="speaker-sec-title">Featured Speakers</h4>
<hr id="speaker-hr">
<article class="speaker" id="sp1">
  <img src="${dataMod.image[0]}" alt="${dataMod.name[0]}" class="speaker-img">
  <div class="speaker-info">
    <h5 class="speaker-name">${dataMod.name[0]}</h5>
    <h6 class="speaker-job">${dataMod.job[0]}</h6>
    <hr class="speaker-info-hr">
    <p class="speaker-desc">${dataMod.desc[0]}</p>
  </div>
</article>
<article class="speaker" id="sp2">
  <img src="${dataMod.image[1]}" alt="${dataMod.name[1]}" class="speaker-img">
  <div class="speaker-info">
    <h5 class="speaker-name">${dataMod.name[1]}</h5>
    <h6 class="speaker-job">${dataMod.job[1]}</h6>
    <hr class="speaker-info-hr">
    <p class="speaker-desc">${dataMod.desc[0]}</p>
  </div>
</article>
<article class="speaker more" id="sp3">
  <img src="${dataMod.image[2]}" alt="${dataMod.name[2]}" class="speaker-img">
  <div class="speaker-info">
    <h5 class="speaker-name">${dataMod.name[2]}</h5>
    <h6 class="speaker-job">${dataMod.job[2]}</h6>
    <hr class="speaker-info-hr">
    <p class="speaker-desc">${dataMod.desc[0]}</p>
  </div>
</article>
<article class="speaker more" id="sp4">
  <img src="${dataMod.image[3]}" alt="${dataMod.name[3]}" class="speaker-img">
  <div class="speaker-info">
    <h5 class="speaker-name">${dataMod.name[3]}</h5>
    <h6 class="speaker-job">${dataMod.job[3]}</h6>
    <hr class="speaker-info-hr">
    <p class="speaker-desc">${dataMod.desc[0]}</p>
  </div>
</article>
<article class="speaker more" id="sp5">
  <img src="${dataMod.image[4]}" alt="${dataMod.name[4]}" class="speaker-img">
  <div class="speaker-info">
    <h5 class="speaker-name">${dataMod.name[4]}</h5>
    <h6 class="speaker-job">${dataMod.job[4]}</h6>
    <hr class="speaker-info-hr">
    <p class="speaker-desc">${dataMod.desc[0]}</p>
  </div>
</article>
<article class="speaker more" id="sp6">
  <img src="${dataMod.image[5]}" alt="${dataMod.name[5]}" class="speaker-img">
  <div class="speaker-info">
    <h5 class="speaker-name">${dataMod.name[5]}</h5>
    <h6 class="speaker-job">${dataMod.job[5]}</h6>
    <hr class="speaker-info-hr">
    <p class="speaker-desc">${dataMod.desc[0]}</p>
  </div>
</article>
<button class="" id="morebtn" type="button">
    MORE
    <img src="./artwork/icons/uparrow.png" alt="Up arrow" class="updown" id="up">
    <img src="./artwork/icons/downarrow.jpg" alt="Up arrow" class="updown" id="down">
</button>
`;

btnMore.addEventListener('click', () => {
  sp3.classList.toggle('more');
  sp4.classList.toggle('more');
  sp5.classList.toggle('more');
  sp6.classList.toggle('more');
});