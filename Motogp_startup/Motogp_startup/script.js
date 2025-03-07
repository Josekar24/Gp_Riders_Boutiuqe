document.addEventListener('DOMContentLoaded', () => {
    const teams = document.querySelectorAll('.team');

    const modal = document.createElement('div');
    modal.id = 'teamModal';
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = 'white';
    modal.style.padding = '20px';
    modal.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
    modal.style.zIndex = '1000';
    modal.style.borderRadius = '10px';
    modal.style.maxWidth = '400px';
    modal.style.textAlign = 'center';

    const closeButton = document.createElement('button');
    closeButton.innerText = 'Cerrar';
    closeButton.style.marginTop = '10px';
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    document.body.appendChild(modal);

    teams.forEach(team => {
        team.addEventListener('click', () => {
            const teamName = team.querySelector('img').alt;
            const riders = team.querySelectorAll('.rider');

            let imagesHtml = '';

            if (riders.length > 0) {
                imagesHtml = '<div style="display: flex; justify-content: center; gap: 10px;">';
                riders.forEach(rider => {
                    const riderName = rider.getAttribute('data-name');
                    const riderImage = rider.getAttribute('data-image');
                    imagesHtml += `
                        <div>
                            <img src="${riderImage}" alt="${riderName}" style="width: 80px; border-radius: 10px;">
                            <p>${riderName}</p>
                        </div>
                    `;
                });
                imagesHtml += '</div>';
            } else {
                imagesHtml = "<p>No hay imágenes disponibles</p>";
            }

            modal.innerHTML = `<h2>${teamName}</h2>${imagesHtml}`;
            modal.appendChild(closeButton);
            modal.style.display = 'block';
        });
    });
});
