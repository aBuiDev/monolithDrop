const hoverDiv = document.querySelector('.hoverDiv');

const hoverDivAnimationOver = () => {
    anime({
        targets: '.hoverDiv',
        width: 350,
        scale: 1.2,
        duration: 1500
      });
}

const hoverDivAnimationOut = () => {
    anime({
        targets: '.hoverDiv',
        width: 300,
        scale: 1,
        duration: 1500
      });
}

hoverDiv.addEventListener('mouseover', (event) => {
    hoverDivAnimationOver();
});

hoverDiv.addEventListener('mouseout', (event) => {
    hoverDivAnimationOut();
});


