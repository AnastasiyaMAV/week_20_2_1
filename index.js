fetch('https://api.nasa.gov/planetary/apod?api_key=ZceuvtMAgoSZA7jvKTTdHOMy3BPrBOndZiEZkpFI')
        .then(response => response.json())
        .then(data => {
                let firstDiv = document.getElementById('firstDiv');
                
                let line1 = document.createElement('p');
                line1.textContent = `Today: ${data.date}`;                
                firstDiv.appendChild(line1);

                let line2 = document.createElement('p');
                line2.textContent = `Copyright: ${data.copyright}`;                
                firstDiv.appendChild(line2);

                let line3 = document.createElement('p');
                line3.textContent = `The nebula: ${data.title}`;                
                firstDiv.appendChild(line3);

                let img = document.createElement('img');
                img.className = "imgStyle";
                img.src = data.hdurl;
                img.alt = data.title;              
                firstDiv.appendChild(img);

                let line4 = document.createElement('p');
                line4.textContent = data.explanation;
                firstDiv.after(line4);
        })
        .catch(err => console.log(err));
