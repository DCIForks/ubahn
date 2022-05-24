const lines = [
  {
    "name": "U1",
    "color": "#7DAD4A",
    "type": "linear",
    "stations": [
      "Warschauer Straße",
      "Schlesisches Tor",
      "Görlitzer Bahnhof",
      "Kottbusser Tor",
      "Prinzenstraße",
      "Hallesches Tor",
      "Möckernbrücke",
      "Gleisdreieck",
      "Kurfürstenstraße",
      "Nollendorfplatz",
      "Wittenbergplatz",
      "Kurfürstendamm",
      "Uhlandstraße"
    ]
  },
  {
    "name": "U2",
    "color": "#DB4018",
    "type": "linear",
    "stations": [
      "Pankow",
      "Vinetastraße",
      "Schönhauser Allee",
      "Eberswalder Straße",
      "Senefelderplatz",
      "Rosa-Luxemburg-Platz",
      "Alexanderplatz",
      "Klosterstraße",
      "Märkisches Museum",
      "Spittelmarkt",
      "Hausvogteiplatz",
      "Stadtmitte",
      "Potsdamer Platz",
      "Mohrenstraße",
      "Mendelssohn-Bartholdy-Park",
      "Gleisdreieck",
      "Bülowstraße",
      "Nollendorfplatz",
      "Wittenbergplatz",
      "Zoologischer Garten",
      "Ernst-Reuter-Platz",
      "Deutsche Oper",
      "Bismarckstraße",
      "Sophie-Charlotte-Platz",
      "Kaiserdamm",
      "Theodor-Heuss-Platz",
      "Neu-Westend",
      "Olympia-Stadion",
      "Ruhleben"
    ]
  },
  {
    "name": "U3",
    "color": "#007B5B",
    "type": "linear",
    "stations": [
      "Warschauer Straße",
      "Schlesisches Tor",
      "Görlitzer Bahnhof",
      "Kottbusser Tor",
      "Prinzenstraße",
      "Hallesches Tor",
      "Möckernbrücke",
      "Gleisdreieck",
      "Kurfürstenstraße",
      "Nollendorfplatz",
      "Wittenbergplatz",
      "Augsburger Straße",
      "Nürnberger Platz",
      "Spichernstraße",
      "Hohenzollernplatz",
      "Fehrbelliner Platz",
      "Heidelberger Platz",
      "Rüdesheimer Platz",
      "Breitenbachplatz",
      "Podbielskiallee",
      "Dahlem-Dorf",
      "Freie Universität (Thielplatz)",
      "Oskar-Helene-Heim",
      "Onkel Toms Hütte",
      "Krumme Lanke"
    ]
  },
  {
    "name": "U4",
    "color": "#F0D81C",
    "type": "linear",
    "stations": [
      "Nollendorfplatz",
      "Viktoria-Luise-Platz",
      "Bayerischer Platz",
      "Rathaus Schöneberg",
      "Innsbrucker Platz"
    ]
  },
  {
    "name": "U5",
    "color": "#7F532D",
    "type": "linear",
    "stations": [
      "Bundestag",
      "Brandenburger Tor",
      "Unter den Linden",
      "Kupfergraben",
      "Museumsinsel",
      "Rotes Rathaus",
      "Alexanderplatz",
      "Schillingstraße",
      "Strausberger Platz",
      "Weberwiese",
      "Frankfurter Tor",
      "Samariterstraße",
      "Frankfurter Allee",
      "Magdalenenstraße",
      "Lichtenberg",
      "Friedrichsfelde",
      "Tierpark",
      "Biesdorf-Süd",
      "Elsterwerdaer Platz",
      "Wuhletal",
      "Kaulsdorf-Nord",
      "Kienberg (Gärten der Welt)",
      "Cottbusser Platz",
      "Hellersdorf",
      "Louis-Lewin-Straße",
      "Hönow"
    ]
  },
  {
    "name": "U6",
    "color": "#8D6DAD",
    "type": "linear",
    "stations": [
      "Alt-Tegel",
      "Borsigwerke",
      "Holzhauser Straße",
      "Otisstraße",
      "Scharnweberstraße",
      "Kurt-Schumacher-Platz",
      "Afrikanische Straße",
      "Rehberge",
      "Seestraße",
      "Leopoldplatz",
      "Wedding",
      "Reinickendorfer Straße",
      "Schwartzkopffstraße",
      "Naturkundemuseum",
      "Oranienburger Tor",
      "Friedrichstraße",
      "Nord-Süd Tunnel",
      "Unter den Linden",
      "Stadtmitte",
      "Kochstraße",
      "Hallesches Tor",
      "Mehringdamm",
      "Platz der Luftbrücke",
      "Paradestraße",
      "Tempelhof",
      "Alt-Tempelhof",
      "Kaiserin-Augusta-Straße",
      "Teltowkanal",
      "Ullsteinstraße",
      "Westphalweg",
      "Alt-Mariendorf"
    ]
  },
  {
    "name": "U7",
    "color": "#518EBB",
    "type": "linear",
    "stations": [
      "Rathaus Spandau",
      "Altstadt Spandau",
      "Zitadelle",
      "Haselhorst",
      "Paulsternstraße",
      "Rohrdamm",
      "Siemensdamm",
      "Halemweg",
      "Jakob-Kaiser-Platz",
      "Jungfernheide",
      "Mierendorffplatz",
      "Richard-Wagner-Platz",
      "Bismarckstraße",
      "Wilmersdorfer Straße",
      "Charlottenburg",
      "Adenauerplatz",
      "Konstanzer Straße",
      "Fehrbelliner Platz",
      "Blissestraße",
      "Bayerischer Platz",
      "Eisenacher Straße",
      "Kleistpark",
      "Yorckstraße",
      "Möckernbrücke",
      "Mehringdamm",
      "Gneisenaustraße",
      "Südstern",
      "Hermannplatz",
      "Rathaus Neukölln",
      "Karl-Marx-Straße",
      "Neukölln",
      "Grenzallee",
      "Blaschkoallee",
      "Parchimer Allee",
      "Britz-Süd",
      "Johannisthaler Chaussee",
      "Britz Depot",
      "Lipschitzallee",
      "Wutzkyallee",
      "Zwickauer Damm",
      "Rudow"
    ]
  },
  {
    "name": "U8",
    "color": "#1C4E87",
    "type": "linear",
    "stations": [
      "Quermatengraben",
      "Wittenau",
      "Rathaus Reinickendorf",
      "Nordgraben",
      "Karl-Bonhoeffer-Nervenklinik",
      "Kienhorstgraben",
      "Lindauer Allee",
      "Paracelsus-Bad",
      "Residenzstraße",
      "Franz-Neumann-Platz",
      "Osloer Straße",
      "Panke",
      "Pankstraße",
      "Gesundbrunnen",
      "Voltastraße",
      "Bernauer Straße",
      "Rosenthaler Platz",
      "Weinmeisterstraße",
      "Alexanderplatz",
      "Jannowitzbrücke",
      "Heinrich-Heine-Straße",
      "Moritzplatz",
      "Kottbusser Tor",
      "Landwehrkanal",
      "Schönleinstraße",
      "Hermannplatz",
      "Boddinstraße",
      "Leinestraße",
      "Hermannstraße"
    ]
  },
  {
    "name": "U9",
    "color": "#F37A17",
    "type": "linear",
    "stations": [
      "Osloer Straße",
      "Nauener Platz",
      "Leopoldplatz",
      "Amrumer Straße",
      "Westhafen",
      "Birkenstraße",
      "Turmstraße",
      "Hansaplatz",
      "Zoologischer Garten",
      "Kurfürstendamm",
      "Spichernstraße",
      "Güntzelstraße",
      "Bundesplatz",
      "Friedrich-Wilhelm-Platz",
      "Walther-Schreiber-Platz",
      "Schloßstraße",
      "Rathaus Steglitz"
    ]
  }
]

function getAccessibleLines(
  onLine,
  fromStation,
  allLines
) {
  return allLines.filter( line  => (
    line.stations.includes(fromStation) && line.name !== onLine?.name
  ))   
}

/**
 * returns the `Route` from `originStation` to `destinationStation`.
 * If there are multiple possible routes, you can return any of those routes.
 *
 * You can assume `allLines` to be the sample data included in this project, which means you can make the following assumptions:
 *  - all stations are interconnected, so it should always be possible to find a valid Route.
 *  - there's a finite set of stations with a size of around ~100
 *
 * @returns a structure like e.g.
 * ```json
 * [{
 *   "action": "enter",
 *   "station": "Otisstraße",
 *   "line": (U9)
 * }, {
 *   "action": "switch",
 *   "station": "Leopoldplatz",
 *   "line": (U9) 
 *  }, {
 *   "action": "exit",
 *   "station": "Hansaplatz",
 *   "line": (U9)
 *  }]
 * ```
 */
 function getRoute(
  originStation,
  destinationStation,
  allLines
) {
  //get origin line from origin station and get stations, check if destination station is there

  const linesThroughOriginStation = getAccessibleLines(
    null,
    originStation,
    allLines
  );

  // Prepare to make a list of stations where you can change lines
  const switchStations = {}

  const directRoutes = linesThroughOriginStation.filter( line => {
    // <<< HACK: .filter() is not intended to be used like
    //           .forEach() ... but why not?
    line.stations.forEach( station => {
      switchStations[station] = line
    })
    // HACK >>>

    // Only include lines that go directly to the destination
    return line?.stations.includes(destinationStation)
  });
 
  if (directRoutes.length) {
    // We have at least one direct line between the stations
    const line = directRoutes[0] // choose the first

    return [ {
      action: "enter",
      station: originStation,
      line
    }, {
      action: "exit",
      station: destinationStation,
      line
    } ]
  };

  // No direct line found. Look for a line change.
  const switchNames = Object.keys(switchStations)

  const linesThroughDestination = getAccessibleLines(
    null,
    destinationStation,
    allLines
  );

  let startLine
    , switchLine
    , switchStation

  linesThroughDestination.every( line => {
    line.stations.every( station => {
      if (switchNames.indexOf(station) > -1) {
        // Can switch to this line at this station
        startLine = switchStations[station]
        switchLine = line
        switchStation = station
        return false // stop looking
      }

      // Keep checking the other stations
      return true
    })

    return !!switchStation
  })

  // The instructions say that we can assume that there will be
  // a switch station, so we don't need to check
  return [ {
    action: "enter",
    station: originStation,
    line: startLine
  }, {
    action: "switch",
    station: switchStation,
    line: switchLine
  }, {
    action: "exit",
    station: "Yorckstraße",
    line: switchLine
  } ]
}


// Check a direct line
let route = getRoute("Siemensdamm", "Jungfernheide", lines)
console.log("Siemensdamm - Jungfernheide:", route);


// Check a route that requires a change
route = getRoute("Kochstraße", "Yorckstraße", lines)
console.log("Kochstraße - Yorckstraße:", route);
