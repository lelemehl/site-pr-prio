// Lógica para o FAQ Sanfona (Accordion)
document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const faqItem = button.parentElement;
      const isActive = faqItem.classList.contains("active");

      // Fecha os demais itens abertos, mantendo apenas um aberto por vez
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
      });

      // Alterna o item clicado (fecha se já estava aberto)
      if (!isActive) {
        faqItem.classList.add("active");
      }
    });
  });
});
