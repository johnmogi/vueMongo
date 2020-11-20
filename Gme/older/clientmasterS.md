1. "strictNullChecks": false<br>
  on tsconfig.json so redux can be built

2. npx create-react-app client --template typescript cd client

3. npm i react-router-dom @types/react-router-dom
4. npm install @material-ui/core
5. folder structure:<br>
  index.tsx (layout) import 'bootstrap/dist/css/bootstrap.min.css'; components: layout header sidebar main footer
6. index.tsx:<br>
  import React from "react"; import ReactDOM from "react-dom"; import "bootstrap/dist/css/bootstrap.min.css"; import { Layout } from "./components/layout/layout"; ReactDOM.render(

  <layout>, document.getElementById("root"));</layout>

7. layout.tsx:<br>
  import React, { Component } from "react"; import "./layout.css"; export class Layout extends Component { render() { return (

8. insert navbar into header as an added component

9. build extended layout (updated version):<br>
  import React, { Component } from "react"; import "./layout.css"; import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom"; import Navbar from "react-bootstrap/Navbar"; import { Home } from "../home/home"; export class Layout extends Component { render() { return (

10. **take notice not to invest in design- only when time permits and all other jobs are done.**

11. build model:<br>
  export class RestoModel { public constructor(public restName?: string) {} }

12. display all items:<br>
  reviews (partial):<br>
  import React, { Component } from "react"; import "./reviews.css"; import { ReviewModel } from "../models/review-model"; // import { NavLink } from "react-router-dom"; interface reviewsState { reviews: ReviewModel[]; } export class Reviews extends Component

  <any, reviewsstate=""> {
  public constructor(props: any) {
  super(props);
  this.state = {
  reviews: []     };   }
  public componentDidMount(): void {
  fetch("http://localhost:3100/api/reviews")
  .then(response => response.json())
  .then(reviews => this.setState({ reviews }))
  .catch(err => alert(err.message));
  }
  public render(): JSX.Element {
  return (
  </any,>

  <div classname="reviews">
    <p>
  </p>
    <pre>

    <code>&lt;h2>Here are our {this.state.reviews.length} reviews&lt;/h2>
  {this.state.reviews.map(rev => (
  // &lt;NavLink to={"/salaries-per-emp/" + rev.id} key={rev.id}>
  &lt;div className="rev">
  date: {rev.date} &lt;br />
  restCode: {rev.restCode} &lt;br />
  review: {rev.review} &lt;br />
  visitor: {rev.visitor} &lt;br />
  &lt;/div>
  // &lt;/NavLink>
  ))}
  </code>
  </pre>
    <p>
  </p>
  </div>

  ); } }

13. FAIL insert + select - retrace:<br>
  import React, { Component, ChangeEvent } from "react"; import "./insert.css"; import { EmployeeModel } from "../../models/employee"; import { SalaryModel } from "../../models/salary"; interface InsertState { employees: EmployeeModel[], salary: SalaryModel } export class Insert extends Component

  <any, insertstate=""> {
  public constructor(props: any) {</any,>

  ```
  super(props);
  this.state = {
  employees: [],
  salary: new SalaryModel()
  };
  ```

  } public componentDidMount(): void {

  ```
  fetch("http://localhost:3000/api/employees")
  .then(response => response.json())
  .then(employees => this.setState({ employees }))
  .catch(err => alert(err.message));
  ```

  } private setEmployeeID = (args: ChangeEvent

  <htmlselectelement>) => {</htmlselectelement>

  ```
  const employeeID = +args.target.value;
  const salary = { ...this.state.salary };
  salary.employeeID = employeeID;
  this.setState({ salary });
  ```

  }; private setDate = (args: ChangeEvent

  <htmlinputelement>) => {</htmlinputelement>

  ```
  const date = args.target.value;
  const salary = { ...this.state.salary };
  salary.date = date;
  this.setState({ salary });
  ```

  }; private setSalary = (args: ChangeEvent

  <htmlinputelement>) => {</htmlinputelement>

  ```
  const sal = +args.target.value;
  const salary = { ...this.state.salary };
  salary.salary = sal;
  this.setState({ salary });
  ```

  }; private addSalary = () => {

  ```
  const options = {
  method: "POST",
  headers: {
  "Content-Type": "application/json",
  "Accept": "application/json"
  },
  body: JSON.stringify(this.state.salary)
  };
  fetch("http://localhost:3000/api/salaries", options)
  .then(response => response.json())
  .then(salary => alert("Salary has been added. ID: " + salary.id))
  .catch(err => alert(err.message));
  ```

  }; public render(): JSX.Element {

  ```
  return (
  <div className="insert">
  <h2>Insert new Salary: </h2>
  <form>
  <select onChange={this.setEmployeeID}>
    <option disabled selected>Select Employee</option>
    {this.state.employees.map(emp =>
        <option key={emp.id} value={emp.id}>
            {emp.firstName + " " + emp.lastName}
        </option>
    )}
  </select>
  <br /><br />
  <input type="date" onChange={this.setDate} value={this.state.salary.date} />
  <br /><br />
  <input type="number" onChange={this.setSalary} value={this.state.salary.salary} />
  <br /><br />
  <button type="button" onClick={this.addSalary}>Add Salary</button>
  </form>
  </div>         );     } }
  ```

  // todo 404

14. basic layout

15. build models:<br>
  export class BidModel { public constructor( public bidId?: number, public productId?: number, public bidStart?: string, public bidderName?: string, public productName?: string, public bidPrice?: number ) {} }

16. component fetch:<br>
  public componentDidMount(): void { fetch("<http://localhost:3333/api/cats>") .then(response => response.json()) .then(cats => this.setState({ cats })) .catch(err => alert(err.message)); }

here are our X products
