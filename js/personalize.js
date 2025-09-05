document.addEventListener('DOMContentLoaded', function () {
    // Personalize meta tags
    document.getElementById('title').textContent = config.meta.title;
    document.getElementById('author').content = config.meta.author;
    document.getElementById('og-title').content = config.meta.title;
    document.getElementById('og-description').content = config.meta.description;
    document.getElementById('og-image').content = config.meta.image;
    document.getElementById('og-image-secure_url').content = config.meta.image;
    document.getElementById('og-image-type').content = config.meta.image;
    document.getElementById('og-image-alt').content = config.meta.title;
    document.getElementById('og-url').content = config.meta.url;
    document.getElementById('og-site_name').content = config.meta.title;
    document.getElementById('apple-mobile-web-app-title').content = config.meta.title;
    document.getElementById('theme-color').content = config.ui.theme_color;
    document.getElementById('canonical').href = config.meta.url;
    document.getElementById('shortcut-icon').href = config.meta.shortcut_icon;
    document.getElementById('apple-touch-icon').href = config.meta.apple_touch_icon;
    document.getElementById('icon').href = config.meta.shortcut_icon;

    // Personalize body
    const body = document.querySelector('body');
    body.setAttribute('data-key', config.api.key);
    body.setAttribute('data-url', config.api.url);

    // Personalize Home section
    document.getElementById('background-image').src = config.ui.background_image;
    document.getElementById('couple-name').textContent = config.wedding.couple.name;
    document.getElementById('wedding-date').textContent = config.wedding.event.date;
    const gcalendarButton = document.getElementById('gcalendar-button');
    const gcalendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(config.wedding.gcalendar.title)}&details=${encodeURIComponent(config.wedding.gcalendar.details)}&dates=${config.wedding.gcalendar.dates}&location=${encodeURIComponent(config.wedding.gcalendar.location)}`;
    gcalendarButton.href = gcalendarUrl;

    // Personalize Mempelai section
    document.getElementById('groom-image').src = config.wedding.couple.groom.image;
    document.getElementById('groom-name').textContent = config.wedding.couple.groom.name;
    
    document.getElementById('groom-son-of').textContent = config.wedding.couple.groom.son_of;
    document.getElementById('groom-parents').textContent = config.wedding.couple.groom.parents;
    document.getElementById('groom-address').textContent = config.wedding.couple.groom.address;
    document.getElementById('bride-image').src = config.wedding.couple.bride.image;
    document.getElementById('bride-name').textContent = config.wedding.couple.bride.name;
    
    document.getElementById('bride-daughter-of').textContent = config.wedding.couple.bride.daughter_of;
    document.getElementById('bride-parents').textContent = config.wedding.couple.bride.parents;
    document.getElementById('bride-address').textContent = config.wedding.couple.bride.address;

    // Personalize Tanggal section
    document.getElementById('count-down').setAttribute('data-time', config.wedding.event.countdown);
    document.getElementById('akad-time').textContent = config.wedding.event.akad_time;
    document.getElementById('resepsi-time').textContent = config.wedding.event.resepsi_time;
    document.getElementById('location-gmap').href = config.wedding.event.location.gmap_url;
    document.getElementById('location-address').textContent = config.wedding.event.location.address;

    // Personalize Gallery section
    const carouselIndicators1 = document.getElementById('carousel-indicators-1');
    const carouselInner1 = document.getElementById('carousel-inner-1');
    config.wedding.gallery.images_1.forEach((image, index) => {
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.dataset.bsTarget = '#carousel-image-one';
        indicator.dataset.bsSlideTo = index;
        if (index === 0) {
            indicator.classList.add('active');
            indicator.setAttribute('aria-current', 'true');
        }
        indicator.setAttribute('aria-label', `Slide ${index + 1}`);
        carouselIndicators1.appendChild(indicator);

        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (index === 0) {
            item.classList.add('active');
        }
        item.innerHTML = `<img src="${image}" alt="gambar ${index + 1}" class="d-block w-100" onclick="util.modal(this)">`;
        carouselInner1.appendChild(item);
    });

    const carouselIndicators2 = document.getElementById('carousel-indicators-2');
    const carouselInner2 = document.getElementById('carousel-inner-2');
    config.wedding.gallery.images_2.forEach((image, index) => {
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.dataset.bsTarget = '#carousel-image-two';
        indicator.dataset.bsSlideTo = index;
        if (index === 0) {
            indicator.classList.add('active');
            indicator.setAttribute('aria-current', 'true');
        }
        indicator.setAttribute('aria-label', `Slide ${index + 1}`);
        carouselIndicators2.appendChild(indicator);

        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (index === 0) {
            item.classList.add('active');
        }
        item.innerHTML = `<img src="${image}" alt="gambar ${index + 4}" class="d-block w-100" onclick="util.modal(this)">`;
        carouselInner2.appendChild(item);
    });

    // Personalize Love Gift section
    if (config.love_gift.show) {
        const loveGiftSection = document.getElementById('love-gift-section');
        loveGiftSection.style.display = 'block';
        const bankList = document.getElementById('bank-list');
        config.love_gift.banks.forEach(bank => {
            const bankCard = document.createElement('div');
            bankCard.classList.add('col-5', 'card-body', 'border', 'rounded-4', 'shadow', 'p-3', 'm-3');
            bankCard.dataset.aos = 'fade-down';
            bankCard.dataset.aosDuration = '1500';
            bankCard.innerHTML = `
                <img src="${bank.logo}" class="img-fluid w-50 rounded" alt="${bank.name}">
                <p class="card-text mt-3 mb-0" style="font-size: 0.9rem;">No. Rekening ${bank.account_number}</p>
                <p class="card-text" style="font-size: 0.9rem;">a.n ${bank.account_name}</p>
                <button class="btn btn-light btn-sm rounded-3" data-copy="${bank.account_number}" onclick="util.copy(this, 'Tersalin')" autofocus>Salin No. Rekening</button>
            `;
            bankList.appendChild(bankCard);
        });
    }

    // Personalize Footer
    document.getElementById('couple-name-footer').innerHTML = `${config.wedding.couple.footer_name.split(' & ')[0]}<i class="fa-solid fa-heart mx-1"></i>${config.wedding.couple.footer_name.split(' & ')[1]}`;
    const githubLink = document.getElementById('github-link');
    githubLink.href = config.links.github.url;
    githubLink.textContent = config.links.github.username;
    const personalLink = document.getElementById('personal-link');
    personalLink.href = config.links.personal_url;
    personalLink.textContent = config.links.personal_url.replace('https://www.', '');

    // Personalize Welcome Page
    document.getElementById('welcome-image').src = config.ui.welcome_image;
    document.getElementById('welcome-couple-name').textContent = config.ui.welcome_couple_name;

    // Personalize Audio
    document.getElementById('button-music').setAttribute('data-url', config.ui.audio_url);

    // Personalize Loading Page
    document.getElementById('loading-icon').src = config.ui.loading_icon;

    // Personalize Modal Image
    document.getElementById('show-modal-image').src = config.ui.modal_image;
});