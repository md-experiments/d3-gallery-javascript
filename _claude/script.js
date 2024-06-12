// Set up the SVG container
const width = 500;
const height = 500;
const svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Define the initial data
let data = [{ x: width / 2, y: height / 2, radius: 30 }];

// Define the nodes and links
const nodes = svg.selectAll(".node")
  .data(data)
  .enter()
  .append("circle")
  .attr("class", "node")
  .attr("r", d => d.radius)
  .attr("cx", d => d.x)
  .attr("cy", d => d.y);

const links = svg.selectAll(".link")
  .data([])
  .enter()
  .append("line")
  .attr("class", "link");

// Animation function
function animate() {
  const newNode = {
    x: Math.random() * (width - 60) + 30,
    y: Math.random() * (height - 60) + 30,
    radius: 30
  };

  // Add the new node
  nodes.data(data)
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("r", d => d.radius)
    .attr("cx", d => d.x)
    .attr("cy", d => d.y);

  // Add the new link
  const newLink = [
    { x: data[data.length - 1].x, y: data[data.length - 1].y },
    { x: newNode.x, y: newNode.y }
  ];

  links.data([...links.data(), newLink])
    .enter()
    .append("line")
    .attr("class", "link")
    .attr("x1", d => d[0].x)
    .attr("y1", d => d[0].y)
    .attr("x2", d => d[1].x)
    .attr("y2", d => d[1].y);

  // Update the data array
  data.push(newNode);
}

// Start the animation
setInterval(animate, 1000);