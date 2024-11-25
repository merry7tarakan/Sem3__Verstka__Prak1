document.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
    checkbox.addEventListener('change', filterBackpacks);
});

function filterBackpacks() {
  const selectedColors = document.querySelectorAll('input[name="colors"]:checked');
  const selectedPrints = document.querySelectorAll('input[name="print"]:checked');
  const selectedCompartments = document.querySelectorAll('input[name="compartments"]:checked');

  // Получаем выбранные значения
  const colors = Array.from(selectedColors).map(el => el.value);
  const prints = Array.from(selectedPrints).map(el => el.value);
  const compartments = Array.from(selectedCompartments).map(el => el.value);

  // Фильтруем картинки рюкзаков
  document.querySelectorAll('.backpack').forEach(backpack => {
    const backpackColors = backpack.getAttribute('data-colors').split(',');
    const backpackPrints = backpack.getAttribute('data-prints').split(',');
    const backpackCompartments = backpack.getAttribute('data-compartments').split(',');

    // Проверяем, соответствует ли рюкзак выбранным фильтрам
    const isColorMatch = colors.length === 0 || colors.some(color => backpackColors.includes(color));
    const isPrintMatch = prints.length === 0 || prints.some(print => backpackPrints.includes(print));
    const isCompartmentMatch = compartments.length === 0 || compartments.some(compartment => backpackCompartments.includes(compartment));

    if (isColorMatch && isPrintMatch && isCompartmentMatch) {
      backpack.classList.add('show');
    } else {
      backpack.classList.remove('show');
    }
  });

  // Если ни один фильтр не выбран, показываем все рюкзаки
  if (colors.length === 0 && prints.length === 0 && compartments.length === 0) {
    document.querySelectorAll('.backpack').forEach(backpack => backpack.classList.add('show'));
  }
}