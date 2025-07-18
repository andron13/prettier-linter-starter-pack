const paragraph = document.querySelector('p');

paragraph.style.color = 'red';

// Don't forget to change to true before deploy

const PRODUCTION = true;

// Banner Variables
const startAnimationDelay = 0.1; // sec
const initScrollDelay = 1.5; // sec

RESOLUTIONS;
const tlParams = {
  // Put your debug parameters here
  // onStart: console.log('play'),
  onComplete: initScroll,
};

const customScroll = OverlayScrollbars(document.getElementById('isi'), {});

window.onload = () => {
  gsap
    .timeline(tlParams)
    .delay(startAnimationDelay)

    // Labels and delays in seconds
    .addLabel('startFrame1', 0)
    .addLabel('startFrame2', 4)
    .addLabel('startFrame3', 8)
    .addLabel('startFrame4', 13)

    // Frame 1
    .to('.banner', { opacity: 1, ease: 'none', duration: 0.5 }, 'startFrame1')
    .to(
      '#frame1 .accompany',
      { opacity: 1, ease: 'none', duration: 0.5 },
      'startFrame1+=0.5',
    )
    .set('#frame1 .line', { className: 'line expanded' }, 'startFrame1+=1')
    .to(
      '#frame1 .copy',
      { opacity: 1, ease: 'none', duration: 0.5 },
      'startFrame1+=1.5',
    )
    .to(
      '#frame1 .accompany, #frame1 .copy, #frame1 .line',
      { opacity: 0, ease: 'none', duration: 0.5 },
      'startFrame2-=.5',
    )

    // Frame 2
    .to('#frame2', { opacity: 1, ease: 'none', duration: 0.5 }, 'startFrame2')
    .to(
      '#frame2 .copy',
      { opacity: 1, ease: 'none', duration: 0.5 },
      'startFrame2+=0.5',
    )
    .to(
      '#frame2 .accompany',
      { opacity: 1, ease: 'none', duration: 0.5 },
      'startFrame2+=1',
    )

    // Frame 3
    .to(
      '#frame2 .rect',
      { bottom: 18, ease: 'power4.out', duration: 0.5 },
      'startFrame3',
    )
    .set('#frame2 .rect', { className: 'rect expanded' }, 'startFrame3')
    .to(
      '#frame3',
      { opacity: 1, ease: 'none', duration: 0.5 },
      'startFrame3+=.5',
    )
    .to(
      '#frame3 .copy',
      { opacity: 1, ease: 'none', duration: 0.5 },
      'startFrame3+=.7',
    )
    .to(
      '#frame3 .accompany',
      { opacity: 1, ease: 'none', duration: 0.5 },
      'startFrame3+=2',
    )

    // Frame 4
    .to('#frame4', { opacity: 1, ease: 'none', duration: 0.5 }, 'startFrame4')
    .to(
      '#frame4 .content',
      { bottom: 0, ease: 'power4.out', duration: 1 },
      'startFrame4+=.5',
    );
};

// init scroll after animation
function initScroll() {
  setTimeout(() => {
    customScroll.scroll({ y: '0%' });
    customScroll.scroll([0, '100%'], 103000, { y: 'linear' });
  }, initScrollDelay * 1000);
}

// stop auto scroll handler
const scrollHolder = document.getElementById('isi');
scrollHolder.addEventListener('wheel', function () {
  customScroll.scrollStop();
});

scrollHolder.addEventListener(
  'mousedown',
  (e) => {
    if (e.target.matches('.os-scrollbar-handle')) {
      customScroll.scrollStop();
    }
  },
  true,
);

// exit links for DoubleClick
document.getElementById('clickarea').addEventListener('click', function () {
  Enabler.exit('full_exit');
});

document.getElementById('link_button').addEventListener('click', function () {
  Enabler.exit('discover_link');
});

document.getElementById('logo_otsuka').addEventListener('click', function () {
  Enabler.exit('otsuka_link');
});

document
  .getElementById('pre_isi_link_full_pi')
  .addEventListener('click', function () {
    Enabler.exit('exit_to_full_PI');
  });

document
  .getElementById('link_isi_medwatch')
  .addEventListener('click', function () {
    Enabler.exit('exit_isi_medwatch');
  });

document
  .getElementById('link_isi_full_pi')
  .addEventListener('click', function () {
    Enabler.exit('exit_to_full_PI');
  });
