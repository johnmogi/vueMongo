// a class component with props:

class FeaturesPage extends Component {
  constructor(props) {
        super(props);
        this.state = {
          works: []     };   }
         componentDidMount() {
        fetch("http://localhost:3001/api/works")
        .then(response => response.json())
        .then(works => this.setState({ works }))
        .catch(err => alert(err.message));
        }
render(){ 
}
}
// a function

const FeaturesPage = () => {
}