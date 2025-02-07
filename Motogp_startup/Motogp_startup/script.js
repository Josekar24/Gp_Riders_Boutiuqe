const teams = document.querySelectorAll('.team');

teams.forEach(team => {
    team.addEventListener('click', () => {
        const riders = team.querySelector('.riders').innerHTML;
        const teamName = team.querySelector('img').alt;

        const popup = window.open('', '_blank', 'width=400,height=300');

        popup.document.write(`
            <html>
            <head>
                <title>${teamName}</title>
            </head>
            <body>
                <h1>${teamName}</h1>
                ${riders}
            </body>
            </html>
        `);
        popup.document.close();
    });
});