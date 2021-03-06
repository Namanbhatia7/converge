var map;

        var myStyle = {
          "version": "1.0",
          "settings": {
              "landColor": "#0B334D"
          },
          "elements": {
              "mapElement": {
                  "labelColor": "#FFFFFF",
                  "labelOutlineColor": "#000000"
              },
              "political": {
                  "borderStrokeColor": "#144B53",
                  "borderOutlineColor": "#00000000"
              },
              "point": {
                  "iconColor": "#0C4152",
                  "fillColor": "#000000",
                  "strokeColor": "#0C4152"
              },
              "transportation": {
                  "strokeColor": "#000000",
                  "fillColor": "#000000"
              },
              "highway": {
                  "strokeColor": "#158399",
                  "fillColor": "#000000"
              },
              "controlledAccessHighway": {
                  "strokeColor": "#158399",
                  "fillColor": "#000000"
              },
              "arterialRoad": {
                  "strokeColor": "#157399",
                  "fillColor": "#000000"
              },
              "majorRoad": {
                  "strokeColor": "#157399",
                  "fillColor": "#000000"
              },
              "railway": {
                  "strokeColor": "#146474",
                  "fillColor": "#000000"
              },
              "structure": {
                  "fillColor": "#115166"
              },
              "water": {
                  "fillColor": "#021019"
              },
              "area": {
                  "fillColor": "#115166"
              }
          }
        };

        function GetMap()
        {
            map = new Microsoft.Maps.Map('#map', {
                credentials: 'Aq0puSkXua5uqDS_BepKK3biKRAmzIb2ABvBGVTLInBIvHozZIh0-MBqC-6s-n31',
                customMapStyle: myStyle
            });
            map.setView({
                center: new Microsoft.Maps.Location(28.5190905,77.3632335),
                zoom: 17
            });
            
        }