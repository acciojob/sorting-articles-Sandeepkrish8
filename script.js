//your JS code here. If required.
const bands = [
      'The Plot in You',
      'The Devil Wears Prada',
      'Pierce the Veil',
      'Norma Jean',
      'The Bled',
      'Say Anything',
      'The Midway State',
      'We Came as Romans',
      'Counterparts',
      'Oh, Sleeper',
      'A Skylit Drive',
      'Anywhere But Here',
      'An Old Dog'
    ];

function stripArticle(name) {
      return name.replace(/^(a |an |the )/i, "").trim();
    }

    // Sort bands ignoring articles
    const sortedBands = bands.sort((a, b) => {
      return stripArticle(a).localeCompare(stripArticle(b));
    });

    // Add sorted items into the list
    document.getElementById("band").innerHTML =
      sortedBands.map(item => `<li>${item}</li>`).join("");