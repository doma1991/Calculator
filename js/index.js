function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Calculator extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "AC",












    () => {
      this.setState({
        caldisplay: "",
        display: "0",
        total: "" });

    });_defineProperty(this, "calculation",


    number => {

      if ((number === '+' || number === '-' || number === '*' || number === '/' || number === '.') && number === this.state.caldisplay.charAt(this.state.caldisplay.length - 1))
      {
        return error;
      }

      this.state.caldisplay += number;
      this.state.display = number;

      this.setState({
        caldisplay: this.state.caldisplay,
        display: this.state.display });


      if (this.state.caldisplay == "00") {
        this.setState({
          caldisplay: "error - press AC",
          display: "error -press AC" });
      };
      // return error;
    });_defineProperty(this, "showTotal",


    () => {
      this.state.total = eval(this.state.caldisplay); //calulation
      this.setState({
        total: this.state.total });


      this.state.display = this.state.total;
      this.setState({
        display: this.state.display });

    });this.state = { caldisplay: "", display: "0", total: "0" };this.AC = this.AC.bind(this);this.calculation = this.calculation.bind(this);this.showTotal = this.showTotal.bind(this);} // resets the calculator display

  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { class: "container", id: "big-container" },

      React.createElement("div", { class: "container", id: "display-container" },
      React.createElement("div", { class: "row display" },
      React.createElement("div", { class: "col-xs-4", id: "cal-display" }, this.state.caldisplay)),


      React.createElement("div", { class: "row display" },
      React.createElement("div", { class: "col-xs-4", id: "display" }, this.state.display))),


      React.createElement("div", { class: "row" },
      React.createElement("div", { class: "col-xs-2", id: "AC", onClick: this.AC }, "AC"),
      React.createElement("div", { class: "col-xs-1", id: "divide", onClick: () => this.calculation("/") }, "/"),
      React.createElement("div", { class: "col-xs-1", id: "multiply", onClick: () => this.calculation("*") }, "*")),


      React.createElement("div", { class: "row" },
      React.createElement("div", { class: "col-xs-1", id: "seven", onClick: () => this.calculation("7") }, "7"),
      React.createElement("div", { class: "col-xs-1", id: "eight", onClick: () => this.calculation("8") }, "8"),
      React.createElement("div", { class: "col-xs-1", id: "nine", onClick: () => this.calculation("9") }, "9"),
      React.createElement("div", { class: "col-xs-1", id: "subtract", onClick: () => this.calculation("-") }, "-")),


      React.createElement("div", { class: "row" },
      React.createElement("div", { class: "col-xs-1", id: "four", onClick: () => this.calculation("4") }, "4"),
      React.createElement("div", { class: "col-xs-1", id: "five", onClick: () => this.calculation("5") }, "5"),
      React.createElement("div", { class: "col-xs-1", id: "six", onClick: () => this.calculation("6") }, "6"),
      React.createElement("div", { class: "col-xs-1", id: "add", onClick: () => this.calculation("+") }, "+")),


      React.createElement("div", { class: "row" },
      React.createElement("div", { class: "col-xs-1", id: "one", onClick: () => this.calculation("1") }, "1"),
      React.createElement("div", { class: "col-xs-1", id: "two", onClick: () => this.calculation("2") }, "2"),
      React.createElement("div", { class: "col-xs-1", id: "three", onClick: () => this.calculation("3") }, "3"),
      React.createElement("div", { class: "col-xs-1", id: "equals-top" })),


      React.createElement("div", { class: "row" },
      React.createElement("div", { class: "col-xs-2", id: "zero", onClick: () => this.calculation("0") }, "0"),
      React.createElement("div", { class: "col-xs-1", id: "decimal", onClick: () => this.calculation(".") }, "."),
      React.createElement("div", { class: "col-xs-1", id: "equals", onClick: () => this.showTotal() }, "=")))));





  }}


ReactDOM.render(
React.createElement(Calculator, null),
document.getElementById("app"));