fetch('https://gasflowmeter.net/thermal-dispersion-mass-flowmeter.html')
  .then(r => r.text())
  .then(html => {
    const matches = html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi);
    for (const match of matches) {
      console.log(match[1]);
    }
  });
