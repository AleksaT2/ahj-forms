import { Tooltip } from "./tooltip";


const form = document.querySelector('.form');
const tooltipFactory = new Tooltip();
let popoverMessage = "And here's some amazing content. It's very engaging. Right?";
let title = 'Popover';
form.addEventListener('click', (e) => {
    e.preventDefault();

    const elements = form.elements;
    [...elements].some(elem => {
        tooltipFactory.showTooltip(popoverMessage, title, elem);   
    });
    
});
