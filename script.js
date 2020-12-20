// const hoverDiv = document.querySelector('.hoverDiv');
const container = document.querySelector('.container');
const nightSky = document.querySelector('#nightSky');
const nightSea = document.querySelector('#nightSea');
const monolith = document.querySelector('#monolith');
const shadowThin = document.querySelector('#shadowThin');
const shadowWide = document.querySelector('#shadowWide');

const aBuiDevLogo = document.querySelector('#aBuiDevLogo');

// const hoverDivAnimationOver = () => {
//     anime({
//         targets: '.hoverDiv',
//         width: 350,
//         scale: 1.2,
//         duration: 1500
//       });
// }

// const hoverDivAnimationOut = () => {
//     anime({
//         targets: '.hoverDiv',
//         width: 300,
//         scale: 1,
//         duration: 1500
//       });
// }

// hoverDiv.addEventListener('mouseover', (event) => {
//     hoverDivAnimationOver();
// });

// hoverDiv.addEventListener('mouseout', (event) => {
//     hoverDivAnimationOut();
// });

// hoverDiv.addEventListener('mouseover', hoverDivAnimationOver);
// hoverDiv.addEventListener('mouseout', hoverDivAnimationOut);



// nightSky
anime({
    targets: '#nightSky',
    translateY: -20,
});

const nightSkyAnimationOver = () => {
    anime({
        targets: '#nightSky',
        keyframes: [
            {
                translateY: 0
            },
            {
                scale: 1.1, duration: 10000
            }
        ],
        duration: 10000,
    });
}

const nightSkyAnimationOut = () => {
    anime({
        targets: '#nightSky',
        translateY: -20,
        duration: 10000
    });
}



// nightSea
anime({
    targets: '#nightSea',
    translateY: 10,
});

const nightSeaAnimationOver = () => {
    anime({
        targets: '#nightSea',
        keyframes: [
            {
                translateY: 0
            },
            {
                scale: 1.1, duration: 10000
            }
        ],
        duration: 10000,
    });
}

const nightSeaAnimationOut = () => {
    anime({
        targets: '#nightSea',
        translateY: 10,
        duration: 10000
    });
}



// monolith
anime({
    targets: '#monolith',
    translateY: -500,
});

const monolithAnimationOver = () => {
    anime({
        targets: '#monolith',
        keyframes: [
            {
                translateY: 0
            },
            {
                scale: 0.9
            }
        ],
        duration: 10000,
        easing: 'cubicBezier(.5, .05, .1, .3)'
    });
}

const monolithAnimationOut = () => {
    anime({
        targets: '#monolith',
        translateY: -500,
        duration: 10000,
    });
}



// shadowThin
anime({
    targets: '#shadowThin',
    translateY: 100,
});

const shadowThinAnimationOver = () => {
    anime({
        targets: '#shadowThin',
        translateY: 0,
        duration: 10000,
        easing: 'linear'
    });
}

const shadowThinAnimationOut = () => {
    anime({
        targets: '#shadowThin',
        translateY: 100,
        duration: 10000,
    });
}



// shadowWide
anime({
    targets: '#shadowWide',
    translateY: 100,
});

const shadowWideAnimationOver = () => {
    anime({
        targets: '#shadowWide',
        translateY: 0,
        duration: 10000,
        easing: 'linear'
    });
}

const shadowWideAnimationOut = () => {
    anime({
        targets: '#shadowWide',
        translateY: 100,
        duration: 10000,
    });
}



// aBuiDev Logo
anime({
    targets: '#aBuiDevLogo path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 500,
    delay: 10000
});


container.addEventListener('mouseover', () => {
    nightSkyAnimationOver();
    nightSeaAnimationOver();
    monolithAnimationOver();
    shadowThinAnimationOver();
    shadowWideAnimationOver();
});

container.addEventListener('mouseout', () => {
    nightSkyAnimationOut();
    nightSeaAnimationOut();
    monolithAnimationOut();
    shadowThinAnimationOut();
    shadowWideAnimationOut();
});