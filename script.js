window.promises = [];

      for (let i = 0; i < 5; i++) {
        promises.push(
          new Promise((resolve, reject) => {
            const time = Math.floor(Math.random() * 5000) + 1000;
            setTimeout(() => {
              resolve(`Promise ${i + 1} resolved in ${time} ms`);
            }, time);
          })
        );
      }

      Promise.any(promises)
        .then((result) => {
          const outputDiv = document.getElementById("output");
          outputDiv.innerHTML = result;
        })
        .catch((error) => {
          console.error(error);
        });
