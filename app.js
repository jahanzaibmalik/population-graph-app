// get data about country and years... 
var country = prompt("Enter the name of country?");
country = country.charAt(0).toUpperCase() + country.slice(1);
var numOfYears = Number(prompt("Enter number of years?"));

// push data in 2d-array through loops...
var years = [];

for (var i = 0; i < numOfYears; i++) {
    years[i] = [];
    
    years[i].push(((prompt("Enter year " + (i + 1))))); 
    years[i].push(parseInt((prompt("Enter poplution " + (i + 1))))); 
    
}

// get data back from 2d-array and push into single array column wise...

function getCol1(matrix1, col1){
    var column1 = [];
    for(var i=0; i < matrix1.length; i++){
       column1.push(matrix1[i][col1]);
    }
    return column1;
 }

function getCol2(matrix2, col2){
    var column2 = [];
    for(var i = 0; i < matrix2.length; i++){
       column2.push(matrix2[i][col2]);
    }
    return column2;
 }

var x = getCol1(years, 0);
console.log(x);
var y = getCol2(years, 1);
console.log(y);



// show data using graph in x and y axis...
zingchart.THEME="classic";
var myConfig = {
    "type":"bullet",
    "background-color":"#F2F2F0",
	"title":{
		"text":"Population of " + country,
        "background-color":"none",
        "color":"#333"
	},
	"plotarea":{
 
	},
    "scaleX":{
        "guide":{
            "visible":false
        },
        "label":["Sales Revenue Streams"],
        "values":x,
        "tick":{
            "line-color":"#333"
        },
        "line-color":"#666",
        "item":{
            "wrapText":true,
            "color":"#333"
        }
    },
    "scaleY":{
        "tick":{
            "line-color":"#333"
        },
        "line-color":"#333",
        "guide":{
            "lineStyle":"solid"
        },
        "item":{
            "wrapText":true,
            "color":"#333"
        },
        "short":true,
        "thousands-separator":","
    },
	"plot":{
	  "tooltip":{
            "fontSize":15,
            "align":"left",
            "borderRadius":3,
            "borderWidth":2,
            "borderColor":"%color-1",
            "backgroundColor":"#fff",
            "shadow":0,
            "alpha":0.9,
            "padding":10,
            "color":"#000",
            "negation":"currency",
            "thousandsSeparator":",",
            // "text":"<b style=\"color:%color\">Actual Sales: %negation$%node-value</b> USD<br><em style=\"color:#C4473F\">Sales Goals: %negation$%g</em> USD",
        },
        "goal":{
            "background-color":"#C4473F"
        },
        "styles":[
          {
            "background-color":"#87E1FF",
            "alpha":0.7
          },
          {
            "background-color":"#008cba",
            "alpha":0.7
          },
          {
            "background-color":"#00526D",
            "alpha":0.7
          }
          ]
        
	},
	"series":[
		{
			"values":y,
			"hover-state":{
			  "styles":[
          {
            "alpha":1,
            "background-color":"#87E1FF"
          },
          {
            "alpha":1,
            "background-color":"#008cba"
          },
          {
            "alpha":1,
            "background-color":"#00526D"
          }
          ]
			},
      "goals":y
		}
	]
};
 
zingchart.render({ 
	id : 'myChart', 
	data : myConfig
});

