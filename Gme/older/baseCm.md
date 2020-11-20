0. cli:
   npx create-react-app --template typescript
   cd client
   npm i react-router-dom @types/react-router-dom

sudo npm start
mkdir components

133. more info towards routing:
     <BrowserRouter>
     <NavLink className="nav-link" to="/" exact>
     Home
     </NavLink>
     <Switch>
     <Redirect to="/home" path="/" exact />
     <Route path="/home" component={HomePage} exact />
     <Route path="" component={NotFound} exact />  
      </Switch>
     </BrowserRouter>

134. base page:
     import React from "react";
     class Homepage extends React.Component {
     render() {
     return <>home</>;
     }
     }
     export default Homepage;

135. routing:
import { Router, Link, BrowserRouter, NavLink } from 'react-router-dom';
NavLink inside Router,
redirect inside switch
<Switch>
<Redirect to="/home" path="/" exact />
<Route path="/home" component={Homepage} exact />
<Route path="/games/:cat" component={Category} />
<Route path="" component={NotFound} exact />
</Switch>
{menu structure}
 <div id="header">
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/games" exact>
              games
            </NavLink>
          </li>
        </ul>
      </div>

136. touch layout.tsx:
     import React, { Component } from "react";
     export class Layout extends Component {
     render() {
     return (
     <>
     hi
     </>
     )
     }
     }

137. index.tsx (local service worker):
     import React from 'react';
     import ReactDOM from 'react-dom';
     import './index.css';
     import \* as serviceWorker from './serviceWorker';
     import { Layout } from './components/layout';
     ReactDOM.render(
     <Layout />,
     document.getElementById('root')
     );
     // If you want your app to work offline and load faster, you can change
     // unregister() to register() below. Note this comes with some pitfalls.
     // Learn more about service workers: https://bit.ly/CRA-PWA
     serviceWorker.register();

138. BTSTRP:
     npm install react-bootstrap bootstrap
     import 'bootstrap/dist/css/bootstrap.min.css';
     https://react-bootstrap.github.io/getting-started/introduction

139. layout.css:
     .container{
     margin: 0 auto;
     max-width:1080px;
     }
     td ,table{
     text-align: center;
     padding:0 3px;
     border: 1px solid #000;
     border-spacing:0;
     border-collapse: collapse;
     }
     thead {
     background: #ccc;
     font-size:1.2em;font-weight:600;
     }
     tr:nth-child(even){
     background:#ccc2cc
     }

140. mkdir models> Item.tsx:
     export class RestoModel { public constructor(public restName?: string) {} }

141. data retrieval recepie:
     build a model in model folder-
     game-model.tsx-
     export class GameModel {
     public constructor(
     public name?: string
     ) {} }
     new games component-
     import React, { Component } from "react";
     import { GameModel } from "../models/game-model";
     // import { NavLink } from "react-router-dom";
     interface gameState {
     games: GameModel[];
     }
     export class Games extends Component<any, gameState> {
     public constructor(props: any) {
     super(props);
     this.state = { games: [] };
     }
     public componentDidMount(): void {
     fetch("http://localhost:3006/api/games")
     .then((response) => response.json())
     .then((games) => this.setState({ games }))
     .catch((err) => alert(err.message));
     }
     public render(): JSX.Element {
     return (
     <div>
     Here are our {this.state.games.length} games
     {this.state.games.map((game) => (
     // <NavLink to={"/salaries-per-emp/" + rev.id} key={rev.id}>
     <div className="rev">
     name: {game.name} <br />
     {game}
     </div>
     // </NavLink>
     ))}
     </div>
     ); }}

142. base layout ready:
     import React from 'react';
     import { BookModel } from '../models/Book';
     interface bookState {
     books: BookModel[];
     }
     class Layout extends React.Component<any, bookState> {
     public constructor(props: any) {
     super(props);
     this.state = { books: [] };
     }
     public componentDidMount(): void {
     fetch("http://localhost:3000/api/books")
     .then((response) => response.json())
     .then((books) => this.setState({ books }))
     .catch((err) => alert(err.message));
     }
     public render(): JSX.Element {
     return (
     <>
     <h1>
     here are our {this.state.books.length} books:
     </h1>
     </>
     );
     }
     }
     export default Layout;

143. extend into tabular data:
     <table className="table">
            <thead>
              <tr>
                <td>#</td>
                <td>Name</td>
                <td>Category</td>
                <td>Price</td>
                <td>Rating</td>
              </tr>
            </thead>
            <tbody>
              {this.state.books.map((book) => (
                <tr key={book.bookID}>
                  <td>{book.bookID}</td>
                  <td>{book.bookName}</td>
                  <td>{book.category}</td>
                  <td>{book.price}</td>
                  <td>{book.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>

144. extend into card (MUI):

145. insert comment - base install:
     ChangeEvent - import React, { Component, ChangeEvent } from "react";
     it will look like this- watch closely the diff between state and interface-
     interface gameState {
     games: GameModel[],
     scores: ScoreModel[],
     comments: CommentModel[],
     comment: CommentModel
     };
     export class Layout extends Component<any, gameState> {
     public constructor(props: any) {
     super(props);
     this.state = { games: [],
     scores: [],
     comments: [],
     comment: new CommentModel()
     };

146. each input key in insert form gets a function above render inside export comp-
     private setEmployeeID = (args: ChangeEvent
     ) => {
     const employeeID = +args.target.value;
     const salary = { ...this.state.salary };
     salary.employeeID = employeeID;
     this.setState({ salary });
     };

147. select sample-
     {this.state.books.map(book =>
     <option key={book.bookID} value={book.bookID}>
     {book.bookName + " " + book.bookName}
     </option>
     )}

148. sample insert form - new:
<form>
<label>Choose a book :</label>
<select onChange={this.setBookID}>
<option disabled placeholder="Choose a book">Please select:</option>
        {this.state.books.map(b =>
        <option key={b.bookID} value={b.bookID}>
            {b.bookName}
        </option>
    )}
    </select>
    <br /><br />
  <input type="text" onChange={this.setUserName} value={this.state.review.userName} />
  <br /><br />
   <textarea onChange={this.setReview} value={this.state.review.review} ></textarea>
  <br /><br />
  <button type="button" onClick={this.addReview}>Add Review</button> 
  </form>

149. private setBookID = (args: SyntheticEvent) => {
     const bookID = (args.target as HTMLInputElement).value;
     const review = { ...this.state.review }; // Spread Operator
     review.bookID = +bookID;
     this.setState({ review });
     };

150. private addReview = () => {
     console.log(this.state.review);
     const options = {
     method: "POST",
     headers: {
     "Content-Type": "application/json",
     Accept: "application/json",
     },
     body: JSON.stringify(this.state.review),
     };
     fetch("http://localhost:3000/api/ratings", options)
     .then((response) => response.json())
     .then((review) => alert("Review has been added. ID: " + review.id))
     .catch((err) => alert(err.message));
     };

151. nice sample with literal logic:
private updatePrice = (args: SyntheticEvent) => {
const price = +(args.target as HTMLSelectElement).value;
const sumbitOffer = { ...this.state.sumbitOffer };
sumbitOffer.productID = this.state.selectedID;
sumbitOffer.price = price;
this.setState({ sumbitOffer });
}
private sendOffer = () => {
console.log(this.state.sumbitOffer)
const options = {
method: "POST",
headers: {
"Content-Type": "application/json",
"Accept": "application/json"
},
body: JSON.stringify(this.state.sumbitOffer)
};
fetch("http://localhost:3000/api/products", options)
.then(response => response.json())
.then(offer => alert('Offer has been added !'))
.catch(err => alert(err.message));
}
public render(): JSX.Element {
return (
<div className='app'>        <select onChange={this.getOffer}>
          <option>Select</option>
          {this.state.products.map(p =>
            <option key={p.id} value={p.id}>{p.name}</option>
          )}
        </select>
        <hr />
        {this.state.offers ?
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>User Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.offers.map(o =>
                <tr key={o.id}>
                  <td>{o.date}</td>
                  <td>{o.nameOfUser}</td>
                  <td>{o.price}</td>
                </tr>
              )}
            </tbody>
          </table>
          : null}

152. isolatedModules flag
     {
     "compilerOptions": {
     "isolatedModules": false
     }
     }
