// HomeFunctions.js
export function plusDivs(currentIndex, n, setIndex) {
  setIndex((prevIndex) => prevIndex + n);
}

export function showDivs(n, setIndex) {
  const slides = document.getElementsByClassName('mySlides');
  if (n > slides.length) {
    setIndex(1);
  }
  if (n < 1) {
    setIndex(slides.length);
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[n - 1].style.display = 'block';
}

export function startAutomaticSlideshow(setIndex) {
  let currentIndex = 1;

  function nextSlide() {
    const slides = document.getElementsByClassName('mySlides'); // Obtain slides within the function
    showDivs(currentIndex, setIndex);
    currentIndex++;
    if (currentIndex > slides.length) {
      currentIndex = 1;
    }
  }

  // Set an interval for automatic slideshow
  const intervalId = setInterval(nextSlide, 3000); // Change 3000 to the desired interval in milliseconds

  // Clear the interval when component unmounts or when manual interaction occurs
  return () => clearInterval(intervalId);
}
