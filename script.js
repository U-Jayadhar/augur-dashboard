function createDistributorCard(distributorData) {
  const card = document.createElement("div");
  card.classList.add("distributor-card");

  card.innerHTML = `
    <h2>${distributorData.distributorName}</h2>
    <p><span>Last Month:</span> ${distributorData.lastMonthQuantity}</p>
    <p><span>Forecast:</span> ${distributorData.forecastedQuantity}</p>
    <p><span>YTD Avg:</span> ${distributorData.yearToDateAverageQuantity}</p>
    <p><span>${distributorData.additionalMetric}</span></p>
  `;

  return card;
}

const dashboardContainer = document.getElementById("dashboard-container");

fetch('./mockdata.json')
  .then(response => response.json())
  .then(mockData => {
    mockData.forEach(distributor => {
      const card = createDistributorCard(distributor);
      dashboardContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error loading mock data:', error);
  });
