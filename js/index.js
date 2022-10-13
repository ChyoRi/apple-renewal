const item11 = $('.item11 > div');
const item12 = $('.item12 > div');
const item13 = $('.item13 > div');
const item14 = $('.item14 > div');

const sizeUp = () => {
  const html1 = item12.html();
  item12.empty();
  item11.append(html1);

  const html2 = item14.html();
  item14.empty();
  item13.append(html2);
}

const sizeDown = () => {
  const html1 = item11.html();
  item11.empty();
  item12.append(html1);

  const html2 = item13.html();
  item13.empty();
  item14.append(html2);
}

const window380 = () => {
  let windowWidth = $(window).width();
  
  // (windowWidth <= 380 ? sizeDown : sizeUp)();

  if (windowWidth <= 463) {
    sizeDown();
  } else {
    sizeUp();
  }
}

$(window).resize(window380);
window380();