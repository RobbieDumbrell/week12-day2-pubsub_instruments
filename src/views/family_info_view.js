const PubSub = require('../helpers/pub_sub.js');

const FamilyInfoView = function () {

}

FamilyInfoView.prototype.bindEvents = function () {
    PubSub.subscribe('InstrumentFamilies:selected-family-ready', (event) => {
        const selectedInstrumentFamily = event.detail;
        this.generateInfo(selectedInstrumentFamily);
    })
}

FamilyInfoView.prototype.generateInfo = function (instrumentFamily) {
    const infoContainer = document.querySelector('#info-container');

    infoContainer.innerHTML = '';

    const familyName = document.createElement('h2');
    familyName.textContent = instrumentFamily.name;
    infoContainer.appendChild(familyName);

    const familyDescription = document.createElement('p');
    familyDescription.textContent = instrumentFamily.description;
    infoContainer.appendChild(familyDescription);

    const instrumentsIncludeHeading = document.createElement('h3');
    instrumentsIncludeHeading.textContent = 'Instruments Include:'
    infoContainer.appendChild(instrumentsIncludeHeading);

    const familyInstruments = document.createElement('ul');
    const familyInstrumentsArray = instrumentFamily.instruments;
    familyInstrumentsArray.forEach((instrument) => {
        const newLi = document.createElement('li');
        newLi.textContent = instrument;
        familyInstruments.appendChild(newLi);
    })
    infoContainer.appendChild(familyInstruments);
}

module.exports = FamilyInfoView;