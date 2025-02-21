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
    modal.style.maxWidth = '500px';
    modal.style.textAlign = 'center';
    
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Cerrar';
    closeButton.style.marginTop = '10px';
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    modal.appendChild(closeButton);
    document.body.appendChild(modal);
    
    teams.forEach(team => {
        team.addEventListener('click', () => {
            const riders = team.querySelector('.riders').innerHTML;
            const teamName = team.querySelector('img').alt;
            
            const riderImages = team.querySelectorAll('.rider-img');
            let imagesHtml = '';
            if (riderImages.length >= 2) {
                imagesHtml = `<div style="display: flex; justify-content: center; gap: 10px;">
                    <img src="${riderImages[0].src}" alt="${riderImages[0].alt}" style="width: 100px; border-radius: 5px;">
                    <img src="${riderImages[1].src}" alt="${riderImages[1].alt}" style="width: 100px; border-radius: 5px;">
                </div>`;
            }
            
            modal.innerHTML = `<h1>${teamName}</h1>${riders}${imagesHtml}`;
            modal.appendChild(closeButton);
            modal.style.display = 'block';
        });
    });
});
