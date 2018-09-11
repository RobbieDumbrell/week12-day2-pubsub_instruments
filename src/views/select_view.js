const PubSub = require('../helpers/pub_sub.js');

const SelectView = function () {

}

SelectView.prototype.bindEvents = function () {
   PubSub.subscribe('InstrumentFamilies:data-ready', (event) => {
        const instrumentFamilies = event.detail;
        this.populateDropdown(instrumentFamilies);
   }) 
}

SelectView.prototype.populateDropdown = function (instrumentFamilies) {
    const instrumentFamiliesDropdown = document.querySelector('#instrument-families');
    
    instrumentFamilies.forEach((instrumentFamily, index) => {
        const newOption = document.createElement('option');
        newOption.textContent = instrumentFamily.name;
        newOption.value = index;
        instrumentFamiliesDropdown.appendChild(newOption);
    })
}

module.exports = SelectView;