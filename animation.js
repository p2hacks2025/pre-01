document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.fade-up-target');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 要素が見えたら visible クラスを付与
        entry.target.classList.add('visible');
        // 一度だけ実行して、その後は監視を止める（消えないようにする）
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15 // 15% 見えたら発火
  });

  targets.forEach(t => observer.observe(t));
});