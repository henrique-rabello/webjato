﻿angular.module("WebjatoConfig").config(function ($provide) {
    $provide.factory("ColorPickerConfig",
        function () {
            var config = {
                allowEmpty: true,
                showPaletteOnly: true,
                showSelectionPalette: false,
                preferredFormat: "hex",
                palette: [
                    ["#FFFFFF", "#C00000", "#FF0000", "#490000", "#790000", "#C00000", "#EE1D24", "#F16C4D", "#F7977A", "#FBD0C3", "#FDE8E1"],
                    ["#000000", "#CC5200", "#FF6600", "#461C00", "#7B3000", "#A1410D", "#F16522", "#F68E54", "#FBAD82", "#FDDAC7", "#FEEDE3"],
                    ["#333333", "#FFD800", "#FFFF00", "#4F2F00", "#7C4900", "#A36209", "#F7941D", "#FFBF05", "#FFD45C", "#FFECB5", "#FFF6DA"],
                    ["#666666", "#92D14F", "#99FF33", "#5B5600", "#827A00", "#ABA000", "#FFF100", "#FFF467", "#FFF799", "#FFFBD1", "#FFFDE8"],
                    ["#999999", "#00AF50", "#00FF00", "#253D0E", "#3E6617", "#588528", "#8FC63D", "#93D14F", "#ADDC7A", "#DAEFC3", "#EDF7E1"],
                    ["#CCCCCC", "#03B1F0", "#00FFFF", "#033813", "#045F20", "#197B30", "#35b449", "#7DC473", "#A4D49D", "#D6ECD3", "#EBF6E9"],
                    ["#DDDDDD", "#0071C1", "#0000FF", "#003E19", "#005824", "#007236", "#00A650", "#39B778", "#81CA9D", "#C6E7D3", "#E3F3E9"],
                    ["#EEEEEE", "#7030A0", "#FF00FF", "#003531", "#005951", "#00736A", "#00A99E", "#16BCB4", "#7BCDC9", "#C3E8E7", "#E1F4F3"],
                    ["#41484D", "#42260D", "#362F2C", "#00364B", "#005B7E", "#0076A4", "#00AEEF", "#00BFF3", "#6CCFF7", "#BDE9FB", "#DEF4FD"],
                    ["#5C676E", "#613813", "#423A34", "#002D53", "#003562", "#004A80", "#0072BC", "#438CCB", "#7CA6D8", "#C7D9EE", "#E3ECF7"],
                    ["#5F6D84", "#744B24", "#534841", "#001A45", "#002056", "#003370", "#0054A5", "#5573B7", "#8293CA", "#CAD0E8", "#E5E8F4"],
                    ["#758792", "#8C623A", "#726357", "#0C004B", "#1D1363", "#2A2C70", "#393B97", "#5E5CA7", "#8881BE", "#CCC9E3", "#E6E4F1"],
                    ["#90ABBD", "#A77C50", "#9A8575", "#30004A", "#450E61", "#5A2680", "#7030A0", "#855FA8", "#A286BD", "#D5C8E1", "#EAE4F0"],
                    ["#A6BCCA", "#C69C6D", "#C7B198", "#390037", "#4B0048", "#62055F", "#91278F", "#A763A9", "#BC8CBF", "#E1CBE2", "#F0E5F1"],
                    ["#C4D2DC", "#E2CDB6", "#D9CAB9", "#490029", "#7A0045", "#9D005C", "#ED008C", "#EF6EA8", "#f39bc1", "#FAD8E7", "#FDECF3"],
                    ["#E2E9EE", "#F1E6DB", "#ECE5DC", "#58001B", "#7A0026", "#9D0039", "#EE105A", "#F16D7E", "#F5999D", "#FAD1D3", "#FDE8E9"]]
            };
            return config;
        }
    );
});