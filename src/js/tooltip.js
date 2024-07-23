export class Tooltip {
   
    showTooltip(message, title, element) {
        const tooltipElement = document.createElement('DIV');

        tooltipElement.classList.add('popover')

        const popoverTitle = document.createElement("div");
        popoverTitle.classList.add("popover-title");
        popoverTitle.textContent = title;
        tooltipElement.prepend(popoverTitle);

        const popoverContent = document.createElement("p");
        popoverContent.textContent = message;
        popoverContent.classList.add("popover-content");
        tooltipElement.append(popoverContent);

        element.append(tooltipElement);

        const { left, top } = element.getBoundingClientRect();
        tooltipElement.style.top = `${-tooltipElement.offsetHeight - 5}px`;
        const width = Math.abs(tooltipElement.offsetWidth - element.offsetWidth) / 2;
        tooltipElement.style.right = `${width}px`;
    }
}