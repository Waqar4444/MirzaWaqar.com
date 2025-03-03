document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById("profile-pic");
  let animationFrame;

  image.addEventListener("mousemove", function (event) {
      if (animationFrame) cancelAnimationFrame(animationFrame); // Prevents excessive calculations
      
      animationFrame = requestAnimationFrame(() => {
          const rect = image.getBoundingClientRect();
          const moveX = ((event.clientX - rect.left) / rect.width - 0.5) * 10; // Adjust sensitivity for X-axis
          const moveY = ((event.clientY - rect.top) / rect.height - 0.5) * 10; // Adjust sensitivity for Y-axis

          image.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
  });

  image.addEventListener("mouseleave", function () {
      image.style.transform = "translate(0, 0)"; // Reset position when mouse leaves
  });
});
